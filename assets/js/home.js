/* Home page: category tiles reveal on scroll, and the festive specials row. */
(function () {
  "use strict";
  var D = window.AJ || {};
  if (typeof D.slug !== "function") {
    D.slug = function (p) {
      if (!p) return "";
      var name = p.name || p.code || "";
      return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    };
  }
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* ── category tiles: each opens from the bottom as it comes into view and closes as it leaves
        (plays once); the photo settles and drifts slightly ── */
  var tiles = [].slice.call(document.querySelectorAll("[data-mt]"));
  if (tiles.length) {
    if (reduce || !("IntersectionObserver" in window)) tiles.forEach(function (t) { t.classList.add("in"); });
    else {
      var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.18 });
      tiles.forEach(function (t) { io.observe(t); });
      (function frame() {
        var vh = window.innerHeight;
        tiles.forEach(function (t) {
          var r = t.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return;
          t.style.setProperty("--mt-y", (((r.top + r.height / 2) - vh / 2) / vh * -28).toFixed(1) + "px");
        });
        requestAnimationFrame(frame);
      })();
    }
  }

  /* ── festive specials ── */
  var row = document.querySelector("[data-festive]");
  if (row && D.products) {
    var items = D.products.filter(function (p) { return p.festive; });
    var diag = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M3 9 9 3M4 3h5v5"/></svg>';
    row.innerHTML = items.map(function (p) {
      var href = "/product/" + D.slug(p);
      return '<article class="pcard fs-card">' +
        '<a class="figwrap" href="' + href + '" aria-label="' + esc(p.name) + '">' +
          '<img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy"><span class="fs-tag">Festive</span>' +
          '<span class="go">' + diag + '</span></a>' +
        '<div class="row"><h3><a href="' + href + '">' + esc(p.name) + '</a></h3><span class="code">' + p.code + '</span></div>' +
        '<p class="meta">' + esc(p.meta) + '</p>' +
        '<a class="mlink" href="' + href + '">Request a quote</a></article>';
    }).join("");
    function step(dir) { var c = row.querySelector(".fs-card"); if (!c) return; row.scrollBy({ left: dir * (c.getBoundingClientRect().width + 24) * 2, behavior: reduce ? "auto" : "smooth" }); }
    var prev = document.querySelector("[data-fs-prev]"), next = document.querySelector("[data-fs-next]");
    if (prev) prev.addEventListener("click", function () { step(-1); });
    if (next) next.addEventListener("click", function () { step(1); });
  }
})();
