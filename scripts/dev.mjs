/* Local dev server (npm run dev): live-server with the same clean addresses as the live site (vercel.json).
   /rings → rings.html, /product/aurelia-band → product.html, and /rings.html redirects to /rings. */
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const liveServer = createRequire(import.meta.url)("live-server");
const root = process.cwd();

function routes(req, res, next) {
  const u = new URL(req.url, "http://localhost");
  if (u.pathname.endsWith(".html")) {
    res.statusCode = 301;
    res.setHeader("Location", (u.pathname === "/index.html" ? "/" : u.pathname.slice(0, -5)) + u.search);
    return res.end();
  }
  if (/^\/product\/[^/]+\/?$/.test(u.pathname)) req.url = "/product.html" + u.search;
  else if (u.pathname !== "/" && !/\.[a-z0-9]+$/i.test(u.pathname) && existsSync(join(root, u.pathname + ".html"))) req.url = u.pathname + ".html" + u.search;
  next();
}

liveServer.start({ port: Number(process.env.PORT) || 3000, open: false, logLevel: 1, middleware: [routes] });
