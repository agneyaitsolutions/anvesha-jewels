/* Anvesha Jewels: client words.
   Home: two rows drift endlessly (top to the left, bottom to the right). They pause on hover,
   focus or touch, can be swiped on a phone, and quicken a little while the page scrolls.
   Stories page: every testimonial in a masonry grid, with category filters.
   Loaded before site.js, so the grid cards are in place when the .rv reveal starts. */
(function () {
  "use strict";
  var T = window.TESTIMONIALS || [], D = window.AJ;
  if (!T.length) return;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var diag = '<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5"/></svg>';

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function product(code) { return D.products.filter(function (p) { return p.code === code; })[0]; }

  function card(t, rv) {
    var p = product(t.product), href = p ? "product.html?id=" + encodeURIComponent(p.code) : "";
    return '<figure class="tm-card' + (rv ? " rv" : "") + '" data-cat="' + esc(t.category || (p ? p.cat : "")) + '">' +
      '<blockquote><p class="script">“' + esc(t.quote) + '”</p></blockquote>' +
      '<figcaption><hr class="tm-rule"><div class="tm-meta"><div>' +
        '<p class="eyebrow eyebrow--ink">' + esc(t.name) + " · " + esc(t.city) + '</p>' +
        (p ? '<a class="tm-piece" href="' + href + '">' + esc(p.name) + " " + diag + '</a>' : "") +
      '</div>' +
      (p ? '<a class="tm-thumb" href="' + href + '" tabindex="-1" aria-hidden="true"><img src="' + p.img + '" alt="" width="52" height="52" loading="lazy" draggable="false"></a>' : "") +
      '</div></figcaption></figure>';
  }

  /* ── Stories page: grid + filters ───────────────────── */
  var grid = document.querySelector("[data-tm-grid]");
  if (grid) {
    var tabs = document.querySelector("[data-tm-filter]"), empty = document.querySelector("[data-tm-empty]"), swap;
    grid.innerHTML = T.map(function (t) { return card(t, true); }).join("");
    tabs.innerHTML = [["all", "All"]].concat(["rings", "bracelets", "necklaces", "earrings"].map(function (k) {
      return [k, D.categories[k].name];
    })).map(function (c, i) {
      return '<button type="button" data-cat="' + c[0] + '" aria-pressed="' + !i + '"' + (i ? "" : ' class="is-active"') + '>' + c[1] + '</button>';
    }).join("");
    tabs.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b || b.classList.contains("is-active")) return;
      tabs.querySelectorAll("button").forEach(function (x) {
        x.classList.toggle("is-active", x === b); x.setAttribute("aria-pressed", String(x === b));
      });
      /* fade the grid out, swap the cards, fade back in */
      grid.classList.add("is-switching"); clearTimeout(swap);
      swap = setTimeout(function () {
        var n = 0;
        grid.querySelectorAll(".tm-card").forEach(function (c) {
          var on = b.dataset.cat === "all" || c.dataset.cat === b.dataset.cat;
          c.hidden = !on; if (on) n++;
        });
        empty.hidden = n > 0;
        grid.classList.remove("is-switching");
      }, reduce ? 0 : 300);
    });
  }

  /* ── Home: the drifting rows ───────────────────────── */
  var rows = [].slice.call(document.querySelectorAll("[data-tm-row]")).map(function (el, i) {
    return { el: el, track: el.querySelector(".tm-track"), i: i, dir: el.dataset.tmRow === "right" ? -1 : 1,
             x: 0, W: 0, f: 1, fling: 0, until: 0, hold: false, focus: false, drag: false, skip: true };
  });
  if (!rows.length) return;
  var phone = window.matchMedia("(max-width: 640px)");
  var SPEED = 22;   /* px per second at rest */

  /* Desktop: half the words in each row. Phone or reduced motion: one row with all of them. */
  function build() {
    var single = reduce || phone.matches, half = Math.ceil(T.length / 2);
    rows.forEach(function (r) {
      var list = single ? (r.i ? [] : T) : (r.i ? T.slice(half) : T.slice(0, half));
      r.track.innerHTML = '<div class="tm-set">' + list.map(function (t) { return card(t); }).join("") + '</div>';
      r.set = r.track.firstElementChild;
      r.el.hidden = !list.length;
      r.x = null;
    });
    if (!reduce) fit();
  }

  /* One set must cover the row; clones (inert, hidden from assistive tech) fill the rest, so a
     shift of exactly one set width (-50% when there is one clone) loops without a seam. */
  function fit() {
    rows.forEach(function (r) {
      var W = r.el.hidden ? 0 : r.set.getBoundingClientRect().width;
      r.skip = !W;
      if (!W) return;
      var need = 1 + Math.ceil(r.el.clientWidth / W);
      while (r.track.children.length < need) {
        var c = r.set.cloneNode(true);
        c.setAttribute("aria-hidden", "true"); c.inert = true;
        c.querySelectorAll("a").forEach(function (a) { a.tabIndex = -1; });
        r.track.appendChild(c);
      }
      while (r.track.children.length > need) r.track.removeChild(r.track.lastChild);
      /* the second row starts half a card along, so the two rows sit like brickwork */
      if (r.x == null) r.x = r.i ? r.set.firstElementChild.offsetWidth / 2 : 0;
      r.W = W;
      r.x = ((r.x % W) + W) % W;
      paint(r);
    });
  }
  function paint(r) { r.track.style.transform = "translate3d(" + (-r.x).toFixed(2) + "px,0,0)"; }

  /* Keep a focused card in view (the row is paused while it holds focus). */
  function show(r, c) {
    r.el.scrollLeft = 0;
    if (!c || r.skip) return;
    var pad = 80, vw = r.el.clientWidth, a = c.offsetLeft, b = a + c.offsetWidth;
    if (a - pad < r.x) r.x = Math.max(0, a - pad);
    else if (b + pad > r.x + vw) r.x = b + pad - vw;
    paint(r);
  }

  build();
  if (reduce) return;

  rows.forEach(function (r) {
    var el = r.el, px = 0, pt = 0, vel = 0, moved = 0;
    el.addEventListener("pointerover", function (e) { if (e.pointerType !== "touch") r.hold = !!e.target.closest(".tm-card"); });
    el.addEventListener("pointerleave", function () { r.hold = false; });
    el.addEventListener("focusin", function (e) { r.focus = true; r.f = 0; show(r, e.target.closest(".tm-card")); });
    el.addEventListener("focusout", function (e) { r.focus = el.contains(e.relatedTarget); });
    /* focus can scroll an overflow:hidden box; the transform does the moving here */
    el.addEventListener("scroll", function () { el.scrollLeft = 0; });

    /* touch: hold to pause, swipe to move, a short glide on release */
    el.addEventListener("pointerdown", function (e) {
      if (e.pointerType === "mouse" || r.skip) return;
      r.drag = true; r.fling = 0; vel = 0; moved = 0; px = e.clientX; pt = e.timeStamp;
    });
    el.addEventListener("pointermove", function (e) {
      if (!r.drag) return;
      var dx = e.clientX - px;
      r.x -= dx; moved += Math.abs(dx);
      vel = -dx / Math.max(1, e.timeStamp - pt) * 1000;
      px = e.clientX; pt = e.timeStamp;
    });
    function release(e) {
      if (!r.drag) return;
      r.drag = false;
      r.fling = e.type === "pointerup" && e.timeStamp - pt < 80 ? Math.max(-2400, Math.min(2400, vel)) : 0;
      r.until = performance.now() + 1600;
    }
    el.addEventListener("pointerup", release);
    el.addEventListener("pointercancel", release);
    el.addEventListener("click", function (e) { if (moved > 8) { e.preventDefault(); e.stopPropagation(); } moved = 0; }, true);
  });

  var on = false, raf = 0, last = 0, lastY = 0, boost = 0;
  function frame(now) {
    var dt = last ? Math.min(0.05, (now - last) / 1000) : 0; last = now;
    /* follow the scroll speed gently, then ease back to the resting drift */
    var y = window.scrollY, v = dt ? Math.abs(y - lastY) / dt : 0; lastY = y;
    var target = Math.min(1.6, v / 900);
    boost += (target - boost) * (1 - Math.exp(-dt * (target > boost ? 4 : 1.4)));
    rows.forEach(function (r) {
      if (r.skip) return;
      var held = r.hold || r.focus || r.drag || now < r.until;
      r.f += ((held ? 0 : 1) - r.f) * (1 - Math.exp(-dt * 6));
      if (r.focus || r.drag) r.f = 0;
      r.x += (r.dir * SPEED * (1 + boost) * r.f + r.fling) * dt;
      r.fling *= Math.exp(-dt * 3.5);
      if (Math.abs(r.fling) < 2) r.fling = 0;
      r.x = ((r.x % r.W) + r.W) % r.W;
      paint(r);
    });
    raf = on ? requestAnimationFrame(frame) : 0;
  }
  function start() {
    on = true;
    if (!raf) { last = 0; lastY = window.scrollY; raf = requestAnimationFrame(frame); }
  }

  /* run only while the section is on screen */
  var sec = rows[0].el.closest("section") || rows[0].el;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (es) { if (es[0].isIntersecting) start(); else on = false; }).observe(sec);
  } else start();

  var queued = false;
  window.addEventListener("resize", function () {
    if (queued) return; queued = true;
    requestAnimationFrame(function () { queued = false; fit(); });
  });
  window.addEventListener("load", fit);
  if (phone.addEventListener) phone.addEventListener("change", build);
})();
