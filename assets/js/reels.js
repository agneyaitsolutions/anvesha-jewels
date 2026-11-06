/* Anvesha Jewels: Instagram reels (home).
   Reads the reel list that scripts/instagram-sync.mjs keeps in Cloudflare R2 (AJ.reels.feed) and drifts it
   endlessly to the left. A reel plays silently while it is on screen; its speaker button turns the sound on
   (one reel at a time) and holds the row still. A click opens that reel on Instagram. The row pauses on hover
   or focus, swipes natively on a phone or trackpad, and drags with a mouse. If the list can't be read, the
   photo cards in the page stay.
   Reels whose music is licensed to Instagram only come without a video; they show their cover, drifting
   in slowly, and open on Instagram like the rest. */
(function () {
  "use strict";
  var row = document.querySelector("[data-ig-reels]"); if (!row) return;
  var cfg = (window.AJ && window.AJ.reels) || {}, track = row.querySelector(".ig-track");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SPEED = 26;   /* px per second at rest */
  var icon = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
    off: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="m22 9-6 6M16 9l6 6"/></svg>',
    on: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>'
  };

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }
  function clip(s, n) { s = String(s || "").replace(/\s+/g, " ").trim(); return s.length > n ? s.slice(0, n - 1).trim() + "…" : s; }

  function card(r, base) {
    var src = function (k) { return esc(new URL(k, base).href); }, text = clip(r.caption, 150);
    return '<article class="ig-reel' + (r.video ? "" : " is-still") + '">' +
      (r.video
        ? '<video muted loop playsinline preload="none" disablepictureinpicture data-src="' + src(r.video) + '"' + (r.poster ? ' data-poster="' + src(r.poster) + '"' : "") + '></video>'
        : '<img data-src="' + src(r.poster) + '" alt="" draggable="false">') +
      '<span class="ig-type-badge" aria-hidden="true">' + icon.play + '</span>' +
      '<a class="ig-reel-link" href="' + esc(r.permalink) + '" target="_blank" rel="noopener" aria-label="' + esc("Watch on Instagram" + (text ? ": " + text : "")) + '">' +
        (text ? '<span class="ig-reel-cap">' + esc(text) + '</span>' : "") +
        '<span class="ig-action-cta">Watch on Instagram ↗</span></a>' +
      /* uploaded clips of licensed-music reels have no sound, so no speaker button */
      (r.video && r.audio !== false ? '<button type="button" class="ig-reel-sound" aria-pressed="false" aria-label="Turn sound on">' + icon.off + '</button>' : "") +
    '</article>';
  }

  /* ── playback: load a reel as it comes into the row, play it while most of it shows ── */
  var loud = null, io = null;
  function load(v) { if (!v.src && v.dataset.src) v.src = v.dataset.src; }
  function play(v) { load(v); var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  function quiet() {
    if (!loud) return;
    var b = loud.parentNode.querySelector(".ig-reel-sound");
    loud.muted = true; loud.parentNode.classList.remove("is-loud");
    b.setAttribute("aria-pressed", "false"); b.setAttribute("aria-label", "Turn sound on"); b.innerHTML = icon.off;
    if (reduce) loud.pause();
    loud = null;
  }
  if ("IntersectionObserver" in window) {
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        var v = e.target;
        if (e.isIntersecting && !reduce) load(v);
        if (e.intersectionRatio >= 0.6 && !reduce) play(v);
        else { if (v === loud) quiet(); v.pause(); }
      });
    }, { threshold: [0, 0.6] });
  }
  /* covers load a little before their card reaches the row, so a long list costs nothing until it's seen */
  var near = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      if (el.tagName === "IMG") el.src = el.dataset.src; else el.poster = el.dataset.poster;
      near.unobserve(el);
    });
  }, { root: row, rootMargin: "0px 120%" }) : null;
  function watch() {
    track.querySelectorAll("img[data-src]:not([src]),video[data-poster]:not([poster])").forEach(function (el) {
      if (near) near.observe(el); else if (el.tagName === "IMG") el.src = el.dataset.src; else el.poster = el.dataset.poster;
    });
    if (io) track.querySelectorAll("video").forEach(function (v) { io.observe(v); });
  }

  row.addEventListener("click", function (e) {
    var b = e.target.closest(".ig-reel-sound"); if (!b) return;
    var v = b.parentNode.querySelector("video"), was = v === loud;
    quiet();
    if (was) return;
    loud = v; v.muted = false; play(v);
    v.parentNode.classList.add("is-loud");
    b.setAttribute("aria-pressed", "true"); b.setAttribute("aria-label", "Turn sound off"); b.innerHTML = icon.on;
  });

  /* ── the drift: the row is a real scroller, so a phone swipes it with its own momentum and a trackpad
     scrolls it sideways; a mouse can drag it. A slow drift moves it on its own and waits while anyone is
     touching, dragging, hovering or scrolling. Copies of the set sit either side and the position is kept in
     the middle copy, so it loops without a seam. ── */
  var W = 0, x = 0, f = 1, skip = true, hold = false, focus = false, touch = false, drag = false;
  var until = 0, glide = 0, user = 0;   /* user: when the person last moved the row */
  function fit() {
    var set = track.firstElementChild;
    W = set.getBoundingClientRect().width; skip = !W;
    if (skip) return;
    var need = 2 + Math.ceil(row.clientWidth / W);
    while (track.children.length < need) {
      var c = set.cloneNode(true);
      /* copies stay clickable (they are most of what shows) but are skipped by keyboard and screen readers */
      c.setAttribute("aria-hidden", "true");
      c.querySelectorAll("a,button").forEach(function (a) { a.tabIndex = -1; });
      track.appendChild(c);
    }
    while (track.children.length > need) {
      track.lastChild.querySelectorAll("video,img").forEach(function (v) { if (io) io.unobserve(v); if (near) near.unobserve(v); });
      track.removeChild(track.lastChild);
    }
    x = W + (((x - W) % W) + W) % W;
    row.scrollLeft = x;
    watch();
  }

  /* Keep a focused card in view (the row is paused while it holds focus). */
  function show(c) {
    if (!c || skip) return;
    var pad = 80, vw = row.clientWidth, a = c.offsetLeft, b = a + c.offsetWidth;
    if (a - pad < x) x = Math.max(0, a - pad);
    else if (b + pad > x + vw) x = b + pad - vw;
    row.scrollLeft = x;
  }

  function motion() {
    row.addEventListener("pointerover", function (e) { if (e.pointerType !== "touch") hold = !!e.target.closest(".ig-reel"); });
    row.addEventListener("pointerleave", function () { hold = false; });
    row.addEventListener("focusin", function (e) { focus = true; f = 0; show(e.target.closest(".ig-reel")); });
    row.addEventListener("focusout", function (e) { focus = row.contains(e.relatedTarget); });

    /* a swipe, trackpad or the scrollbar: follow it, and let the drift wait */
    row.addEventListener("scroll", function () {
      if (Math.abs(row.scrollLeft - x) < 1.5) return;   /* our own move */
      x = row.scrollLeft; user = performance.now(); until = user + 1500; glide = 0;
    }, { passive: true });
    row.addEventListener("touchstart", function () { touch = true; glide = 0; }, { passive: true });
    function lift() { touch = false; user = performance.now(); until = user + 1500; }
    row.addEventListener("touchend", lift, { passive: true });
    row.addEventListener("touchcancel", lift, { passive: true });

    /* mouse: hold and drag the row, with a short glide on release; a drag never opens a reel */
    var sx = 0, sl = 0, moved = 0, pt = 0, vel = 0;
    row.addEventListener("pointerdown", function (e) {
      if (e.pointerType !== "mouse" || e.button || skip || e.target.closest(".ig-reel-sound")) return;
      drag = true; moved = 0; vel = 0; glide = 0; sx = e.clientX; sl = x; pt = e.timeStamp;
    });
    window.addEventListener("pointermove", function (e) {
      if (!drag) return;
      var nx = sl - (e.clientX - sx), dt = Math.max(1, e.timeStamp - pt);
      vel = (nx - x) / dt * 1000; pt = e.timeStamp;
      moved = Math.max(moved, Math.abs(e.clientX - sx));
      if (moved > 4) row.classList.add("is-dragging");
      x = nx; row.scrollLeft = x; user = performance.now();
    });
    window.addEventListener("pointerup", function (e) {
      if (!drag) return;
      drag = false; row.classList.remove("is-dragging");
      if (e.timeStamp - pt < 80) glide = Math.max(-1400, Math.min(1400, vel * 0.3));
      until = performance.now() + 1500;
    });
    row.addEventListener("click", function (e) { if (moved > 6) { e.preventDefault(); e.stopPropagation(); } moved = 0; }, true);
    row.addEventListener("dragstart", function (e) { e.preventDefault(); });

    var on = false, raf = 0, last = 0;
    function frame(now) {
      var dt = last ? Math.min(0.05, (now - last) / 1000) : 0; last = now;
      /* while a finger or a fling is moving the row, leave it alone so its momentum isn't cut short */
      if (!skip && !touch && !drag && now - user > 250) {
        var held = hold || focus || loud || now < until;
        f += ((held ? 0 : 1) - f) * (1 - Math.exp(-dt * 6));
        if (focus) f = 0;
        /* an arrow press or a mouse fling: ease the rest of the way over, a little each frame */
        var g = Math.abs(glide) < 0.5 ? glide : glide * (1 - Math.exp(-dt * 7));
        glide -= g;
        x += SPEED * f * dt + g;
        if (x < W) x += W; else if (x >= 2 * W) x -= W;
        if (Math.abs(row.scrollLeft - x) >= 0.5) row.scrollLeft = x;
      }
      raf = on ? requestAnimationFrame(frame) : 0;
    }
    /* run only while the row is on screen */
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        on = es[0].isIntersecting;
        if (on && !raf) { last = 0; raf = requestAnimationFrame(frame); }
      }).observe(row);
    } else { on = true; raf = requestAnimationFrame(frame); }

    var queued = false;
    window.addEventListener("resize", function () {
      if (queued) return; queued = true;
      requestAnimationFrame(function () { queued = false; fit(); });
    });
    window.addEventListener("load", fit);
  }

  /* arrows: one card along (card width + its gap); the drift waits a moment after each press */
  function step() { var c = track.querySelector(".ig-reel"); return c ? c.offsetWidth + parseFloat(getComputedStyle(c).marginRight) : 0; }
  function arrow(dir) {
    if (reduce) { row.scrollBy({ left: dir * step(), behavior: "smooth" }); return; }
    user = 0; glide += dir * step(); f = 0; until = performance.now() + 2600;
  }
  [["[data-ig-prev]", -1], ["[data-ig-next]", 1]].forEach(function (a) {
    var b = document.querySelector(a[0]); if (b) b.addEventListener("click", function () { arrow(a[1]); });
  });

  function start() {
    if (reduce) { watch(); return; }
    fit(); motion();
  }

  /* The live list replaces the photo cards; "no-cache" asks R2 each time, so a new reel shows straight away. */
  if (!cfg.feed || !window.fetch) return start();
  var base = new URL(cfg.feed, location.href);
  fetch(base.href, { cache: "no-cache" })
    .then(function (res) { if (!res.ok) throw res.status; return res.json(); })
    .then(function (d) {
      var list = (d.reels || []).filter(function (r) { return r.video || r.poster; });
      if (cfg.show) list = list.slice(0, cfg.show);
      if (list.length) track.innerHTML = '<div class="ig-set">' + list.map(function (r) { return card(r, base); }).join("") + '</div>';
    })
    .catch(function () {})
    .then(start);
})();
