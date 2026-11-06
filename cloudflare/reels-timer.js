/* Anvesha Jewels: reels timer (Cloudflare Worker).
   GitHub's own schedule runs the "Instagram reels" workflow only every few hours, so this Worker's cron
   trigger (every 10 minutes) starts it instead. It needs one secret, GH_TOKEN: a fine-grained GitHub token
   for agneyaitsolutions/anvesha-jewels with "Actions: Read and write" and nothing else.
   Setup: Workers & Pages → the Worker → paste this file; Settings → Variables and secrets → GH_TOKEN;
   Settings → Trigger events → Cron trigger "*\/10 * * * *". */
const WORKFLOW = "https://api.github.com/repos/agneyaitsolutions/anvesha-jewels/actions/workflows/instagram-reels.yml/dispatches";

export default {
  async scheduled(event, env, ctx) {
    const res = await fetch(WORKFLOW, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GH_TOKEN}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "anvesha-reels-timer"
      },
      body: JSON.stringify({ ref: "main" })
    });
    /* 204 = started; anything else shows in the Worker's logs */
    if (res.status !== 204) throw new Error(`GitHub said ${res.status}: ${await res.text()}`);
  },
  /* the Worker's web address does nothing, so nobody can start runs by visiting it */
  async fetch() {
    return new Response("Not found", { status: 404 });
  }
};
