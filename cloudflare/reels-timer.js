/* Anvesha Jewels: reels timer (Cloudflare Worker).
   GitHub's own schedule runs the "Instagram reels" workflow only every few hours, so this Worker's cron
   trigger (every 10 minutes) starts it instead. It needs one secret, GH_TIMER_TOKEN (GH_TOKEN also works):
   a fine-grained GitHub token for anveshajewels/anvesha-jewels with "Actions: Read and write" only.
   Setup: Workers & Pages → the Worker → paste this file and Deploy; Settings → Variables and secrets →
   Add → type Secret → GH_TIMER_TOKEN;
   Settings → Trigger events → Cron trigger "*\/10 * * * *". */
const WORKFLOW = "https://api.github.com/repos/anveshajewels/anvesha-jewels/actions/workflows/instagram-reels.yml/dispatches";

export default {
  async scheduled(event, env, ctx) {
    const res = await fetch(WORKFLOW, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.GH_TOKEN || env.GH_TIMER_TOKEN}`,
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
