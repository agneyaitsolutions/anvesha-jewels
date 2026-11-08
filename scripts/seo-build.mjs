/* Search, AI-answer and AI-crawler readiness for the static site:  npm run seo
 *
 * The pages are plain HTML whose product grids and product details are drawn by assets/js/site.js.
 * Google runs that JavaScript; most AI crawlers (GPTBot, ClaudeBot, PerplexityBot…) do not, so they saw
 * empty pages. This script opens every page in headless Chrome, lets the site's own JavaScript draw it,
 * and saves that exact markup into the HTML, so the first byte already holds what visitors see. The
 * same JavaScript still runs in the browser and draws the same markup over it, so nothing on screen
 * changes.
 *
 * It writes:
 *   product/<slug>.html     one real page per piece (title, description, canonical, Product data)
 *   <page>.html             a managed block in each <head> (icons, social tags, JSON-LD) and the
 *                           pre-drawn content of the listing pages, the home page's festive row and
 *                           the Solene selection
 *   sitemap.xml robots.txt llms.txt llms-full.txt site.webmanifest
 *   vercel.json             redirects: old product addresses → new ones, switched-off pages → home
 *   scripts/seo-slugs.json  every piece's published address, so an address never moves silently
 *
 * Run it again after any change to assets/js/data.js or the page templates. It is safe to re-run:
 * every generated part sits between markers and is replaced, never stacked, and a page whose content
 * did not change keeps its date.
 *
 * Needs Google Chrome (or set CHROME_PATH) and `npm install` for playwright-core.
 * SEO_DATE=YYYY-MM-DD sets the date for changed pages (defaults to today in India).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from "node:fs";
import { createServer } from "node:http";
import { join, extname } from "node:path";
import vm from "node:vm";
import { chromium } from "playwright-core";

const SITE = "https://www.anveshajewels.com";
const root = process.cwd();
if (!existsSync(join(root, "assets/js/data.js"))) throw new Error("Run from the site root (npm run seo).");
const TODAY = process.env.SEO_DATE || new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" });
const read = (f) => readFileSync(join(root, f), "utf8");

/* ── catalogue, exactly as the site loads it ───────────────────────────── */
const sandbox = { window: {} };
vm.runInNewContext(read("assets/js/data.js"), sandbox);
const D = sandbox.window.AJ;
const products = D.products;
const slug = (p) => D.slug(p);
const faq = existsSync(join(root, "scripts/seo-faq.json")) ? JSON.parse(read("scripts/seo-faq.json")) : {};

/* ── addresses: every piece keeps the address it was published under ───── */
const SLUGS_FILE = "scripts/seo-slugs.json";
const published = existsSync(join(root, SLUGS_FILE)) ? JSON.parse(read(SLUGS_FILE)) : {};
const bySlug = Object.fromEntries(products.map((p) => [slug(p), p.code]));
for (const [code, s] of Object.entries(published)) {
  if (bySlug[s] && bySlug[s] !== code) {
    throw new Error(`/product/${s} used to be ${code} but would now show ${bySlug[s]}. Give one of them another name or slug in data.js.`);
  }
}
/* old address → new address: the scheme before accents were handled, and any slug that changed since the last build */
const moved = new Map();
for (const p of products) {
  for (const old of [D.legacySlug(p), published[p.code]]) {
    if (old && old !== slug(p) && !bySlug[old]) moved.set(old, slug(p));
  }
}

/* ── helpers ───────────────────────────────────────────────────────────── */
const abs = (path) => SITE + encodeURI(path).replace(/'/g, "%27");
const xml = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const attr = xml;
const decode = (s) => String(s).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&rsquo;/g, "’").replace(/&nbsp;/g, " ");
const metaContent = (html, sel) => {
  const m = html.match(new RegExp(`<meta ${sel} content="([^"]*)"`));
  return m ? decode(m[1]) : "";
};
const titleOf = (html) => decode((html.match(/<title>([^<]*)<\/title>/) || [])[1] || "");
const pageLabel = (html) => titleOf(html).replace(/^Anvesha Jewels · | · Anvesha Jewels$/g, "");
const ld = (obj) => `<script type="application/ld+json" data-seo>${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;
const metalLabel = (id) => (D.metals.find((m) => m.id === id) || { label: id }).label;
/* replace with literal text ($ in names or copy must not be read as a pattern) */
const swap = (html, pattern, text) => html.replace(pattern, () => text);

/* write a page only when something besides its date changed; returns the date the page carries */
const DATE_RE = /"dateModified":"(\d{4}-\d{2}-\d{2})"/;
const undated = (s) => s.replace(/"dateModified":"\d{4}-\d{2}-\d{2}"/g, "");
const pending = []; // nothing is written until every page has been drawn without errors
function stage(file, html) {
  const p = join(root, file);
  const old = existsSync(p) ? readFileSync(p, "utf8") : null;
  const oldDate = old && (old.match(DATE_RE) || [])[1];
  if (old && oldDate && undated(old) === undated(html)) {
    pending.push([file, old]);
    return oldDate;
  }
  pending.push([file, html]);
  return (html.match(DATE_RE) || [])[1] || TODAY;
}

/* ── who we are (one definition, referenced from every page) ───────────── */
const STORE_ID = SITE + "/#store", SITE_ID = SITE + "/#website";
const phone = "+91-" + D.whatsapp.slice(2, 7) + "-" + D.whatsapp.slice(7);
/* clean profile addresses (no share links or tracking tokens) for search engines and AI assistants */
const PROFILES = {
  instagram: "https://www.instagram.com/anveshajewels/",
  facebook: "https://www.facebook.com/profile.php?id=61594274313675",
  linkedin: D.linkedin,
};
const store = {
  "@type": "JewelryStore",
  "@id": STORE_ID,
  name: "Anvesha Jewels",
  alternateName: ["Anvesha", "anveshajewels"],
  url: SITE + "/",
  logo: { "@type": "ImageObject", "@id": SITE + "/#logo", url: SITE + "/assets/logo.png", contentUrl: SITE + "/assets/logo.png", width: 760, height: 305, caption: "Anvesha Jewels" },
  image: [SITE + "/assets/share.jpg", SITE + "/assets/icons/icon-512.png"],
  description: "Fine jewellery made to order in genuine gold with natural or lab-grown diamonds.",
  slogan: "Precious, in your own way.",
  telephone: phone,
  email: "admin@anveshajewels.com",
  priceRange: "₹₹₹",
  currenciesAccepted: "INR",
  address: { "@type": "PostalAddress", streetAddress: "F-612 Surya Darshan Apartment, Citylight", addressLocality: "Surat", addressRegion: "Gujarat", addressCountry: "IN" },
  areaServed: { "@type": "Country", name: "India" },
  contactPoint: [{ "@type": "ContactPoint", contactType: "customer service", telephone: phone, email: "admin@anveshajewels.com", areaServed: "IN", url: "https://wa.me/" + D.whatsapp }],
  knowsAbout: ["Fine jewellery", "Gold jewellery", "Diamond jewellery", "Lab-grown diamonds", "Natural diamonds", "14K gold", "18K gold", "22K gold", "Rings", "Necklaces", "Earrings", "Bracelets", "Men's jewellery"],
  sameAs: Object.values(PROFILES).filter(Boolean),
};
const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  name: "Anvesha Jewels",
  alternateName: ["Anvesha", "anveshajewels.com"],
  url: SITE + "/",
  inLanguage: "en-IN",
  publisher: { "@id": STORE_ID },
  potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: SITE + "/rings?q={search_term_string}" }, "query-input": "required name=search_term_string" },
};
const ref = { "@id": STORE_ID };

/* ── the pages ─────────────────────────────────────────────────────────── */
const CATEGORY_PAGES = ["rings", "necklaces", "earrings", "bracelets", "mens-jewellery", "festive"];
/* collection, gifting and testimonials are switched off: their HTML sends visitors home. vercel.json does the
   same on the server (a real redirect search engines understand), and they stay out of the sitemap. */
const HIDDEN = ["collection", "gifting", "testimonials"];
const INFO = {
  about: "AboutPage", contact: "ContactPage", "jewellery-care": "WebPage", "sizing-chart": "WebPage",
  "shipping-policy": "WebPage", "returns-exchange": "WebPage", "privacy-policy": "WebPage",
};
const NOINDEX = ["instagram"];
const SITEMAP_PRIORITY = {
  index: "1.0", rings: "0.9", necklaces: "0.9", earrings: "0.9", bracelets: "0.9", "mens-jewellery": "0.9", festive: "0.8",
  collections: "0.7", about: "0.6", contact: "0.6", "sizing-chart": "0.5", "jewellery-care": "0.5",
  "shipping-policy": "0.4", "returns-exchange": "0.4", "privacy-policy": "0.2",
};
const urlOf = (name) => (name === "index" ? SITE + "/" : `${SITE}/${name}`);

/* ── render with the site's own JavaScript ─────────────────────────────── */
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".json": "application/json", ".ico": "image/x-icon" };
function serve() {
  const server = createServer((req, res) => {
    const u = new URL(req.url, "http://x");
    let p = decodeURIComponent(u.pathname);
    if (p === "/") p = "/index.html";
    else if (/^\/product\/[^/]+$/.test(p)) p = "/product.html"; // always the template, never a built page
    else if (!extname(p)) p += ".html";
    const f = join(root, p);
    if (!f.startsWith(root) || !existsSync(f)) { res.writeHead(404); return res.end(); }
    res.writeHead(200, { "content-type": TYPES[extname(f)] || "application/octet-stream" });
    res.end(readFileSync(f));
  });
  return new Promise((ok) => server.listen(0, "127.0.0.1", () => ok(server)));
}

/* containers the JavaScript fills, per kind of page */
const SLOTS = {
  category: ["data-cat-hero", "data-tabs", "data-grid", "data-grid-end"],
  home: ["data-festive"],
  collections: ["data-solene"],
  product: ["data-crumbs", "data-pdp-media", "data-pdp-info", "data-pdp-detail", "data-related", "data-related-link"],
};

async function capture(page, url, slots, ready) {
  await page.goto(url, { waitUntil: "load" });
  await page.waitForSelector(ready, { timeout: 15000, state: "attached" });
  return page.evaluate((slots) => {
    const out = {};
    for (const s of slots) {
      const el = document.querySelector(`[${s}]`);
      if (!el) continue;
      const c = el.cloneNode(true);
      /* keep the reveal-on-scroll animation: cards start hidden exactly as before */
      c.querySelectorAll(".rv.in").forEach((n) => n.classList.remove("in"));
      c.querySelectorAll(".is-hovered,.is-neighbor-1,.is-neighbor-2").forEach((n) => n.classList.remove("is-hovered", "is-neighbor-1", "is-neighbor-2"));
      out[s] = { html: c.innerHTML, cls: el.getAttribute("class") };
    }
    return out;
  }, slots);
}

/* put pre-drawn markup (and the class list the JavaScript gives the container) inside a container.
   The container keeps its original classes in data-ssr-class, so a re-run starts from the original. */
function fill(html, slotAttr, got) {
  const re = new RegExp(`<([a-z]+)\\b([^>]*\\s${slotAttr}(?=[\\s>=])[^>]*)>(?:<!--ssr-->[\\s\\S]*?<!--/ssr-->)?(?=</)`);
  const m = html.match(re);
  if (!m) throw new Error("slot not found: " + slotAttr);
  let attrs = m[2];
  const orig = (attrs.match(/\sdata-ssr-class="([^"]*)"/) || attrs.match(/\sclass="([^"]*)"/) || [])[1];
  attrs = attrs.replace(/\sdata-ssr-class="[^"]*"/, "");
  if (got && got.cls != null && orig != null && got.cls !== orig) {
    attrs = attrs.replace(/\sclass="[^"]*"/, () => ` class="${attr(got.cls)}" data-ssr-class="${attr(orig)}"`);
  }
  return html.replace(re, () => `<${m[1]}${attrs}><!--ssr-->${got ? got.html : ""}<!--/ssr-->`);
}

/* listing pages draw differently for ?sub= (a sub-category) and ?q= (search). For those addresses this
   puts the containers back to their original empty state before anything is shown, as before. */
const QUERY_RESET = '<script data-ssr-reset>/[?&](sub|q)=/.test(location.search)&&document.querySelectorAll("main [data-ssr-class],main [data-cat-hero],main [data-tabs],main [data-grid],main [data-grid-end]").forEach(function(e){var c=e.getAttribute("data-ssr-class");if(c!=null)e.className=c;e.innerHTML=""})</script>';
const withReset = (html) => html.replace(/\n*<script data-ssr-reset>[\s\S]*?<\/script>/, "").replace("</main>", () => "</main>\n" + QUERY_RESET);

/* ── <head> block ──────────────────────────────────────────────────────── */
const ICONS = [
  '<link rel="icon" href="/favicon.ico" sizes="48x48">',
  '<link rel="icon" type="image/png" sizes="96x96" href="/assets/icons/icon-96.png">',
  '<link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/icon-192.png">',
  '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">',
  '<link rel="manifest" href="/site.webmanifest">',
].join("\n");
const MARK = "<!-- seo:start · generated by scripts/seo-build.mjs, do not edit by hand -->";

function headBlock(html, url, graph, extra = "") {
  const ogTitle = metaContent(html, 'property="og:title"') || titleOf(html);
  const ogDesc = metaContent(html, 'property="og:description"') || metaContent(html, 'name="description"');
  const tags = [
    ICONS,
    extra,
    `<meta property="og:url" content="${attr(url)}">`,
    '<meta property="og:locale" content="en_IN">',
    `<meta name="twitter:title" content="${attr(ogTitle)}">`,
    `<meta name="twitter:description" content="${attr(ogDesc)}">`,
    ld({ "@context": "https://schema.org", "@graph": graph }),
  ].filter(Boolean).join("\n");
  return `${MARK}\n${tags}\n<!-- seo:end -->`;
}

function setHead(html, block) {
  html = html.replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->\n?/, "");
  html = html.replace(/<link rel="icon" href="\/assets\/logo\.png">\n?/, "");
  /* the hand-written store and site data on the home page now live in the generated graph */
  html = html.replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema\.org","@type":"(JewelryStore|WebSite)"[\s\S]*?<\/script>\n?/g, "");
  return html.replace("</head>", () => block + "\n</head>");
}

const crumbList = (id, items) => ({
  "@type": "BreadcrumbList", "@id": id,
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it[0], ...(it[1] ? { item: it[1] } : {}) })),
});

function webPage(type, url, html, extra = {}) {
  return {
    "@type": type, "@id": url + "#webpage", url, name: titleOf(html),
    description: metaContent(html, 'name="description"'),
    isPartOf: { "@id": SITE_ID }, about: ref, publisher: ref, inLanguage: "en-IN",
    dateModified: TODAY, ...extra,
  };
}

/* ── product page head ─────────────────────────────────────────────────── */
function productDescription(p, pc) {
  /* built only from the piece's own facts, so each of the 202 pages has its own snippet */
  const metals = p.metal.map(metalLabel);
  const lead = `${p.name} (${p.code}) by Anvesha Jewels: ${p.meta}. ${pc.name === "Men's Jewellery" ? "Men's jewellery" : pc.name.replace(/s$/, "")} in ${metals.join(", ").replace(/, ([^,]*)$/, " or $1")}, made to order in ${D.karats.join(", ").replace(/, ([^,]*)$/, " or $1")} gold.`;
  const full = `${lead} ${p.desc}`;
  if (full.length <= 160) return full;
  if (lead.length <= 160) return lead;
  return lead.slice(0, 157).replace(/\s+\S*$/, "") + "…";
}

function productHead(tpl, p) {
  const pc = D.categories[p.cat];
  const url = `${SITE}/product/${slug(p)}`;
  const title = `${p.name} · ${pc.name} · Anvesha Jewels`;
  const desc = productDescription(p, pc);
  const img = abs(p.img);
  let html = tpl;
  html = swap(html, /<title>[^<]*<\/title>/, `<title>${xml(title)}</title>`);
  html = swap(html, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${attr(desc)}">`);
  html = swap(html, /<meta property="og:type" content="[^"]*">/, '<meta property="og:type" content="product">');
  html = swap(html, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${attr(p.name + " · Anvesha Jewels")}">`);
  html = swap(html, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${attr(p.desc)}">`);
  html = swap(html, /<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${attr(img)}">`);
  html = swap(html, /<meta property="og:image:width" content="[^"]*">\n?/, "");
  html = swap(html, /<meta property="og:image:height" content="[^"]*">\n?/, "");
  html = swap(html, /<meta property="og:image:alt" content="[^"]*">/, `<meta property="og:image:alt" content="${attr(p.name + " by Anvesha Jewels")}">`);
  html = swap(html, /<meta name="twitter:image" content="[^"]*">/, `<meta name="twitter:image" content="${attr(img)}">`);
  html = swap(html, /<link rel="canonical"[^>]*>\n?/, "");
  html = swap(html, '<meta name="theme-color"', `<link rel="canonical" href="${attr(url)}">\n<meta name="theme-color"`);

  const props = [];
  if (p.line) props.push({ "@type": "PropertyValue", name: "Selection", value: `The ${p.line} selection` });
  props.push({ "@type": "PropertyValue", name: "Metal", value: p.metal.map(metalLabel).join(", ") });
  props.push({ "@type": "PropertyValue", name: "Gold purity", value: D.karats.join(", ") });
  if (p.diamond && p.diamond !== "none") props.push({ "@type": "PropertyValue", name: "Diamond preference", value: D.diamonds.map((d) => d.label).join(" or ") });
  if (p.meta) props.push({ "@type": "PropertyValue", name: "Design", value: p.meta });
  props.push({ "@type": "PropertyValue", name: "Made to order", value: `Delivered in ${D.shipDays[0]}–${D.shipDays[1]} days` });

  /* No "offers": every piece is quoted individually, and an offer without a price is invalid. Search
     Console will therefore list these under Product snippets as missing offers/review/rating. That is
     expected; add real prices or real per-piece reviews to change it, never placeholder values. */
  const product = {
    "@type": "Product", "@id": url + "#product", url, name: p.name, sku: p.code, productID: p.code,
    description: [p.desc, p.detail].filter(Boolean).join(" "),
    image: (p.gallery && p.gallery.length ? p.gallery : [p.img]).map(abs),
    category: pc.name, brand: { "@type": "Brand", name: "Anvesha Jewels" }, manufacturer: ref,
    material: p.metal.map(metalLabel).join(", "), additionalProperty: props,
    mainEntityOfPage: { "@id": url + "#webpage" },
  };
  const graph = [
    webPage("ItemPage", url, html, { name: title, description: desc, primaryImageOfPage: { "@type": "ImageObject", url: img }, breadcrumb: { "@id": url + "#breadcrumb" }, mainEntity: { "@id": url + "#product" } }),
    product,
    crumbList(url + "#breadcrumb", [["Home", SITE + "/"], [pc.name, `${SITE}/${pc.slug || p.cat}`], [p.name, url]]),
  ];
  /* the main photo is the largest thing on the page: ask for it first */
  const preload = `<link rel="preload" as="image" href="${attr(encodeURI(p.img))}" fetchpriority="high">`;
  return setHead(html, headBlock(html, url, graph, preload));
}

/* ── run ───────────────────────────────────────────────────────────────── */
const server = await serve();
const base = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: "chrome" });
} catch (e) {
  server.close();
  throw new Error("Could not start Google Chrome. Install it, or set CHROME_PATH to a Chrome/Chromium binary.\n" + e.message);
}
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
await ctx.route(/^https?:\/\/(?!127\.0\.0\.1)/, (r) => r.abort()); // fonts, reels feed: not needed to draw
const page = await ctx.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(`${page.url()}: ${e.message}`));
const dates = {}; // url → date the page carries

/* 1 · listing pages */
for (const name of CATEGORY_PAGES) {
  const out = await capture(page, `${base}/${name}`, SLOTS.category, "[data-grid] .pcard, [data-grid] .grid-empty");
  let html = read(name + ".html");
  for (const s of SLOTS.category) html = fill(html, s, out[s]);
  html = withReset(html);
  const items = await page.$$eval("[data-grid] .pcard h3 a", (as) => as.map((a) => [a.textContent, a.getAttribute("href")]));
  const url = urlOf(name);
  const cname = (D.categories[name] || {}).name || pageLabel(html);
  const graph = [
    webPage("CollectionPage", url, html, { breadcrumb: { "@id": url + "#breadcrumb" }, mainEntity: { "@id": url + "#items" } }),
    { "@type": "ItemList", "@id": url + "#items", name: cname, numberOfItems: items.length,
      itemListElement: items.map(([n, h], i) => ({ "@type": "ListItem", position: i + 1, name: n, url: SITE + h })) },
    crumbList(url + "#breadcrumb", [["Home", SITE + "/"], [cname, url]]),
  ];
  dates[url] = stage(name + ".html", setHead(html, headBlock(html, url, graph)));
  console.log(`  ${name}: ${items.length} pieces`);
}

/* 2 · home page (festive row) and collections (Solene selection) */
{
  const out = await capture(page, `${base}/`, SLOTS.home, "[data-festive] .pcard");
  let html = read("index.html");
  for (const s of SLOTS.home) html = fill(html, s, out[s]);
  const url = SITE + "/";
  const graph = [store, website, webPage("WebPage", url, html, { primaryImageOfPage: { "@type": "ImageObject", url: SITE + "/assets/share.jpg" } })];
  dates[url] = stage("index.html", setHead(html, headBlock(html, url, graph)));
}
{
  const out = await capture(page, `${base}/collections`, SLOTS.collections, "[data-solene] .pcard");
  let html = read("collections.html");
  for (const s of SLOTS.collections) html = fill(html, s, out[s]);
  const items = await page.$$eval("[data-solene] .pcard h3 a", (as) => as.map((a) => [a.textContent, a.getAttribute("href")]));
  const url = urlOf("collections");
  const graph = [
    webPage("CollectionPage", url, html, { breadcrumb: { "@id": url + "#breadcrumb" }, mainEntity: { "@id": url + "#items" } }),
    { "@type": "ItemList", "@id": url + "#items", name: "The Solene selection", numberOfItems: items.length,
      itemListElement: items.map(([n, h], i) => ({ "@type": "ListItem", position: i + 1, name: n, url: SITE + h })) },
    crumbList(url + "#breadcrumb", [["Home", SITE + "/"], [pageLabel(html), url]]),
  ];
  dates[url] = stage("collections.html", setHead(html, headBlock(html, url, graph)));
  console.log(`  home and collections`);
}

/* 3 · information pages and noindexed pages (head only, content is already in the HTML) */
for (const [name, type] of Object.entries(INFO)) {
  const html = read(name + ".html");
  const url = urlOf(name);
  const extra = type === "AboutPage" || type === "ContactPage" ? { mainEntity: ref } : {};
  const graph = [
    webPage(type, url, html, { breadcrumb: { "@id": url + "#breadcrumb" }, ...extra }),
    crumbList(url + "#breadcrumb", [["Home", SITE + "/"], [pageLabel(html), url]]),
  ];
  dates[url] = stage(name + ".html", setHead(html, headBlock(html, url, graph)));
}
for (const name of NOINDEX) stage(name + ".html", setHead(read(name + ".html"), `${MARK}\n${ICONS}\n<!-- seo:end -->`));

/* 4 · one real page per piece */
const tpl = setHead(read("product.html"), `${MARK}\n${ICONS}\n<!-- seo:end -->`);
stage("product.html", tpl);
for (const [i, p] of products.entries()) {
  const out = await capture(page, `${base}/product/${slug(p)}`, SLOTS.product, "[data-pdp-info] h1");
  let html = productHead(tpl, p);
  for (const s of SLOTS.product) html = fill(html, s, out[s]);
  dates[`${SITE}/product/${slug(p)}`] = stage(`product/${slug(p)}.html`, html);
  if ((i + 1) % 50 === 0) console.log(`  products: ${i + 1}/${products.length}`);
}
console.log(`  products: ${products.length}/${products.length}`);
await browser.close();
server.close();
if (errors.length) {
  console.error("JavaScript errors while drawing pages; nothing was written:\n" + [...new Set(errors)].join("\n"));
  process.exit(1);
}

/* everything drew cleanly: write it */
const keep = new Set(products.map((p) => `${slug(p)}.html`));
mkdirSync(join(root, "product"), { recursive: true });
for (const f of readdirSync(join(root, "product"))) if (!keep.has(f)) rmSync(join(root, "product", f));
for (const [f, s] of pending) writeFileSync(join(root, f), s);

/* 5 · sitemap (with product photos) */
const pageNames = ["index", ...CATEGORY_PAGES, "collections", ...Object.keys(INFO)];
const sm = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ...pageNames.map((n) => `  <url><loc>${xml(urlOf(n))}</loc><lastmod>${dates[urlOf(n)] || TODAY}</lastmod><priority>${SITEMAP_PRIORITY[n] || "0.5"}</priority></url>`),
  ...products.map((p) => {
    const u = `${SITE}/product/${slug(p)}`;
    return `  <url><loc>${xml(u)}</loc><lastmod>${dates[u] || TODAY}</lastmod><priority>0.6</priority><image:image><image:loc>${xml(abs(p.img))}</image:loc></image:image></url>`;
  }),
  "</urlset>", "",
];
writeFileSync(join(root, "sitemap.xml"), sm.join("\n"));

/* 6 · robots.txt: search engines and AI answer engines all welcome. Nothing is blocked, so crawlers can
   also see the redirects and noindex signals of the pages that are switched off. */
const bots = ["Googlebot", "Googlebot-Image", "Google-Extended", "Bingbot", "Applebot", "Applebot-Extended", "DuckDuckBot",
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "anthropic-ai",
  "PerplexityBot", "Perplexity-User", "CCBot", "meta-externalagent", "Amazonbot", "YandexBot"];
writeFileSync(join(root, "robots.txt"), [
  "# Anvesha Jewels · https://www.anveshajewels.com",
  "# Search engines and AI assistants are welcome to read and cite this site.",
  "",
  ...bots.map((b) => `User-agent: ${b}`),
  "Allow: /",
  "",
  "User-agent: *",
  "Allow: /",
  "",
  `Sitemap: ${SITE}/sitemap.xml`,
  "",
].join("\n"));

/* 7 · llms.txt (short map) and llms-full.txt (catalogue and answers) for AI assistants */
const C = D.categories;
const catLine = (k) => `- [${C[k].name}](${SITE}/${C[k].slug}): ${C[k].intro}`;
const llms = [
  "# Anvesha Jewels", "",
  "> Anvesha Jewels is a fine jewellery brand from Surat, Gujarat, India. Every piece is made to order in genuine gold (14K, 18K or 22K) with natural or lab-grown diamonds, chosen by the customer. Customers request a personal quote on WhatsApp.", "",
  `- Website: ${SITE}`,
  `- WhatsApp / phone: +${D.whatsapp.slice(0, 2)} ${D.whatsapp.slice(2, 7)} ${D.whatsapp.slice(7)}`,
  "- Email: admin@anveshajewels.com",
  "- Address: F-612 Surya Darshan Apartment, Citylight, Surat, Gujarat, India",
  `- Instagram: ${PROFILES.instagram}`,
  `- Full catalogue and answers for AI assistants: ${SITE}/llms-full.txt`, "",
  "## Jewellery",
  ...["rings", "necklaces", "earrings", "bracelets", "mens-jewellery"].map(catLine),
  `- [Festive Specials](${SITE}/festive): Pieces chosen for festive evenings.`,
  `- [Collections](${SITE}/collections): The Anvesha collection and the Solene selection.`, "",
  "## Buying",
  `- Made to order; delivered in ${D.shipDays[0]}–${D.shipDays[1]} days, insured shipping.`,
  "- Gold purity: 14K, 18K, 22K. Diamonds: natural or lab-grown, certified.",
  `- [About Anvesha Jewels](${SITE}/about)`,
  `- [Sizing chart](${SITE}/sizing-chart)`,
  `- [Shipping policy](${SITE}/shipping-policy)`,
  `- [Returns & exchange](${SITE}/returns-exchange)`,
  `- [Jewellery care](${SITE}/jewellery-care)`,
  `- [Contact](${SITE}/contact)`, "",
];
writeFileSync(join(root, "llms.txt"), llms.join("\n"));
const full = [...llms];
/* answers copied word for word from the pages (scripts/seo-faq.json), with the page they come from */
const answered = Object.entries(faq).filter(([, v]) => Array.isArray(v) && v.length);
if (answered.length) {
  full.push("## Questions and answers", "");
  for (const [name, qas] of answered) {
    for (const q of qas) full.push(`### ${q.question}`, "", q.answer, "", `Source: ${urlOf(name)}`, "");
  }
}
full.push("## Catalogue", "",
  `${products.length} pieces. Every piece is made to order; metal, gold purity, diamond and size are chosen when requesting a quote.`, "");
for (const k of ["rings", "necklaces", "earrings", "bracelets", "mens-jewellery"]) {
  full.push(`### ${C[k].name}`, "");
  for (const p of products.filter((x) => x.cat === k)) {
    full.push(`- [${p.name}](${SITE}/product/${slug(p)}) · ${p.code}` + (p.line ? ` · The ${p.line} selection` : "") +
      ` · ${p.meta} · Metal: ${p.metal.map(metalLabel).join(", ")}. ${p.desc} ${p.detail || ""}`.trimEnd());
  }
  full.push("");
}
writeFileSync(join(root, "llms-full.txt"), full.join("\n"));

/* 8 · web app manifest (home-screen icon and name) */
writeFileSync(join(root, "site.webmanifest"), JSON.stringify({
  name: "Anvesha Jewels", short_name: "Anvesha", description: store.description, start_url: "/", scope: "/",
  display: "browser", background_color: "#FFFFFF", theme_color: "#FFFFFF",
  icons: [
    { src: "/assets/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/assets/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "/assets/icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
}, null, 2) + "\n");

/* 9 · vercel.json redirects, and the published addresses */
const vercel = JSON.parse(read("vercel.json"));
vercel.redirects = (vercel.redirects || []).filter((r) => !r.source.startsWith("/product/") && !HIDDEN.includes(r.source.slice(1)))
  .concat(HIDDEN.map((n) => ({ source: `/${n}`, destination: "/", permanent: false })))
  .concat([...moved].map(([a, b]) => ({ source: `/product/${a}`, destination: `/product/${b}`, permanent: true })));
writeFileSync(join(root, "vercel.json"), JSON.stringify(vercel, null, 2) + "\n");
writeFileSync(join(root, SLUGS_FILE), JSON.stringify(Object.fromEntries(products.map((p) => [p.code, slug(p)])), null, 2) + "\n");

console.log(`done: ${pageNames.length} pages, ${products.length} products, ${moved.size} product redirects`);
