/* Anvesha Jewels: Instagram reels → Cloudflare R2.
   Reads every reel on the connected Instagram account, keeps a web-sized copy of each new one
   (an .mp4 and a .jpg cover) in R2, and writes reels.json, the list the home page reads (assets/js/reels.js).
   Reels already stored are not downloaded again, so a run with nothing new takes a few seconds.
   Instagram's API gives no video for reels that use licensed music. For those the script uses, in order:
   a clip uploaded to manual/<reel code>.mp4 in the bucket (the code is the part after /reel/ in its link),
   else a copy from the reel's public page fetched with yt-dlp (at most once a day per reel; set
   IG_PUBLIC_FALLBACK=0 to turn it off). Either way the sound is taken out, since the music is licensed
   for Instagram only. If neither works the reel shows its cover.

     IG_TOKEN=… IG_USER_ID=… R2_ACCOUNT_ID=… R2_ACCESS_KEY_ID=… R2_SECRET_ACCESS_KEY=… R2_BUCKET=… npm run reels

   IG_TOKEN is either an Instagram token ("IG…", from Instagram login) or a Meta system-user token ("EAA…",
   from the newer Unified login); the second needs IG_USER_ID, the account's ID shown next to it in the app.

   Without the R2_* values everything is written to ./reels-local instead, for a first test on your own machine.
   Setup: docs/instagram-reels.md */
import { AwsClient } from "aws4fetch";
import { execFile } from "node:child_process";
import { webcrypto } from "node:crypto";
import { access, copyFile, mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { promisify } from "node:util";

globalThis.crypto ??= webcrypto;            /* Node 18 */
const run = promisify(execFile);
const ffmpeg = process.env.FFMPEG || "ffmpeg";   /* needs ffmpeg installed (brew install ffmpeg / apt install ffmpeg) */
const ytdlp = process.env.YTDLP || "yt-dlp";     /* optional: pipx install yt-dlp / brew install yt-dlp */
const env = process.env;
const PUBLIC = env.IG_PUBLIC_FALLBACK !== "0";
const LIST = "reels.json";
const KEEP = "public, max-age=31536000, immutable";   /* a reel's files never change once written */
const FRESH = "public, max-age=60";                     /* the list is re-checked every minute */
const FIELDS = "id,media_type,media_product_type,media_url,thumbnail_url,permalink,caption,timestamp";

if (!env.IG_TOKEN) fail("IG_TOKEN is missing.");
const viaInstagram = env.IG_TOKEN.startsWith("IG");
if (!viaInstagram && !env.IG_USER_ID) fail("IG_USER_ID is missing (needed with an EAA… token).");

/* ── storage: R2 when configured, else a local folder ── */
const r2 = env.R2_BUCKET
  ? new AwsClient({ accessKeyId: env.R2_ACCESS_KEY_ID, secretAccessKey: env.R2_SECRET_ACCESS_KEY, service: "s3", region: "auto" })
  : null;
const OUT = "reels-local";
const objectUrl = (key) => `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${env.R2_BUCKET}/${key}`;

async function get(key) {
  if (!r2) return readFile(join(OUT, key), "utf8").catch(() => null);
  const res = await r2.fetch(objectUrl(key));
  if (res.status === 404) return null;
  if (!res.ok) fail(`R2 read ${key}: ${res.status} ${await res.text()}`);
  return res.text();
}
async function has(key) {
  if (!r2) return access(join(OUT, key)).then(() => true, () => false);
  return (await r2.fetch(objectUrl(key), { method: "HEAD" })).ok;
}
async function del(key) {
  if (!r2) return rm(join(OUT, key), { force: true });
  const res = await r2.fetch(objectUrl(key), { method: "DELETE" });
  if (!res.ok && res.status !== 404) fail(`R2 delete ${key}: ${res.status} ${await res.text()}`);
}
async function put(key, body, type, cache) {
  if (!r2) {
    await mkdir(dirname(join(OUT, key)), { recursive: true });
    return writeFile(join(OUT, key), body);
  }
  const res = await r2.fetch(objectUrl(key), { method: "PUT", body, headers: { "Content-Type": type, "Cache-Control": cache } });
  if (!res.ok) fail(`R2 write ${key}: ${res.status} ${await res.text()}`);
}

/* ── Instagram ── */
async function ig(url) {
  const res = await fetch(url);
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.error) fail(`Instagram: ${json.error?.message || res.status}`);
  return json;
}
async function liveReels() {
  const all = [];
  const from = viaInstagram ? "https://graph.instagram.com/me" : `https://graph.facebook.com/v23.0/${env.IG_USER_ID}`;
  let url = `${from}/media?fields=${FIELDS}&limit=50&access_token=${env.IG_TOKEN}`;
  while (url) {
    const page = await ig(url);
    all.push(...page.data);
    url = page.paging?.next;
  }
  /* newest first, as Instagram returns them; older video posts count as reels too */
  return all.filter((m) => m.media_product_type === "REELS" || m.media_type === "VIDEO");
}

/* ── media: 720p H.264 that starts playing before it has fully loaded, and a 540px cover ── */
let tmp;
/* a source is { url } (from Instagram), { key } (a clip uploaded to the bucket) or { file } (already here) */
async function download(source, file) {
  if (source.file) return copyFile(source.file, file);
  if (source.key && !r2) return copyFile(join(OUT, source.key), file);
  const res = await (source.key ? r2.fetch(objectUrl(source.key)) : fetch(source.url));
  if (!res.ok) throw new Error(`download ${res.status}`);
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
}
async function toMp4(source) {
  const src = join(tmp, "in.mp4"), dst = join(tmp, "out.mp4");
  await download(source, src);
  await run(ffmpeg, ["-y", "-loglevel", "error", "-i", src,
    "-vf", "scale='min(720,iw)':-2", "-c:v", "libx264", "-preset", "medium", "-crf", "26",
    "-profile:v", "high", "-pix_fmt", "yuv420p",
    ...(source.audio ? ["-c:a", "aac", "-b:a", "96k"] : ["-an"]), "-movflags", "+faststart", dst]);
  return readFile(dst);
}
/* the reel as anyone sees it on its public page, without logging in */
async function fromPublic(permalink) {
  const file = join(tmp, "public.mp4");
  await rm(file, { force: true });
  await run(ytdlp, ["-q", "--no-warnings", "--no-playlist", "-f", "mp4/best", "--merge-output-format", "mp4", "-o", file, permalink], { timeout: 120000 });
  await access(file);
  return file;
}
async function toJpg(url) {
  const src = join(tmp, "in.img"), dst = join(tmp, "out.jpg");
  await download({ url }, src);
  await run(ffmpeg, ["-y", "-loglevel", "error", "-i", src, "-vf", "scale='min(540,iw)':-2", "-q:v", "4", dst]);
  return readFile(dst);
}

/* ── sync ── */
const old = JSON.parse((await get(LIST)) || '{"reels":[]}');
const known = new Map(old.reels.map((r) => [r.id, r]));
const live = await liveReels();
tmp = await mkdtemp(join(tmpdir(), "reels-"));

const reels = [];
const today = new Date().toISOString().slice(0, 10);
let added = 0;
for (const m of live) {
  const had = known.get(m.id);
  const caption = (m.caption || "").trim();
  const code = m.permalink.match(/\/(?:reels?|p|tv)\/([^/?#]+)/)?.[1] || m.id;
  /* stored already: only the caption and link can change */
  if (had?.video) {
    reels.push({ ...had, caption, permalink: m.permalink });
    continue;
  }
  /* Instagram leaves out media_url for reels that use licensed music: use an uploaded clip, else the
     public copy (tried once a day), always silenced */
  const manual = `manual/${code}.mp4`;
  let source = m.media_url ? { url: m.media_url, audio: true } : (await has(manual)) ? { key: manual, audio: false } : null;
  let tried = had?.tried;
  if (!source && PUBLIC && tried !== today) {
    tried = today;
    try { source = { file: await fromPublic(m.permalink), audio: false, public: true }; }
    catch (e) { console.warn(`  no public copy of ${m.permalink}: ${String(e.message).split("\n")[0]}`); }
  }
  if (had && !source) {
    reels.push({ ...had, caption, permalink: m.permalink, ...(tried ? { tried } : {}) });
    continue;
  }
  try {
    const r = { id: m.id, code, permalink: m.permalink, caption, timestamp: m.timestamp, poster: had?.poster || null, video: null, audio: false };
    if (!r.poster && m.thumbnail_url) {
      r.poster = `reels/${m.id}.jpg`;
      await put(r.poster, await toJpg(m.thumbnail_url), "image/jpeg", KEEP);
    }
    if (source) {
      r.video = `reels/${m.id}.mp4`;
      r.audio = source.audio;
      await put(r.video, await toMp4(source), "video/mp4", KEEP);
    } else if (tried) r.tried = tried;
    if (r.poster || r.video) {
      reels.push(r); if (!had) added++;
      console.log(`+ ${m.permalink}${!r.video ? ` (cover only: licensed music. Upload its clip as ${manual} to add the video)` : r.audio ? "" : source.public ? " (public copy, no sound)" : " (uploaded clip, no sound)"}`);
    }
  } catch (e) {
    console.warn(`! skipped ${m.permalink}: ${e.message}`);
    if (had) reels.push(had);
  }
}
await rm(tmp, { recursive: true, force: true });

/* Reels deleted (or archived) on Instagram leave the list, since their links would no longer open, and their
   video and cover are deleted from R2. Clips uploaded to manual/ are kept. If Instagram suddenly lists no reels
   at all while we had some (say, a different account was connected by mistake), nothing is deleted. */
const gone = old.reels.filter((r) => !reels.some((n) => n.id === r.id));
if (JSON.stringify(reels) === JSON.stringify(old.reels)) {
  console.log(`No change: ${reels.length} reels.`);
} else if (!reels.length && old.reels.length) {
  fail(`Instagram returned no reels (we had ${old.reels.length}); nothing changed. Check IG_TOKEN and IG_USER_ID.`);
} else {
  await put(LIST, JSON.stringify({ updated: new Date().toISOString(), reels }), "application/json", FRESH);
  for (const r of gone) {
    for (const key of [r.video, r.poster]) if (key?.startsWith("reels/")) await del(key);
    console.log(`- ${r.permalink} (deleted on Instagram; files removed)`);
  }
  console.log(`Saved ${reels.length} reels (${added} new, ${gone.length} removed).`);
}

function fail(msg) {
  console.error(msg);
  process.exit(1);
}
