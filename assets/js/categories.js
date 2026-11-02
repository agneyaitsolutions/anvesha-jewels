/* Home · categories: the line fills in word by word, then its four small photos glide
   into the category boxes. It follows the scroll, so it plays again scrolling up or down. */
(function () {
  "use strict";
  var sec = document.getElementById("cw"); if (!sec) return;
  var stage = document.getElementById("cwStage"), text = document.getElementById("cwText"), head = document.getElementById("cwHead");
  var row = document.getElementById("cwRow"), line = document.getElementById("cwLine");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { row.classList.add("ready"); return; }

  var words = [];
  [].slice.call(line.childNodes).forEach(function (n) {
    if (n.nodeType === 3) {
      var f = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(function (w) {
        if (!w) return;
        if (/^\s+$/.test(w)) { f.appendChild(document.createTextNode(" ")); return; }
        var s = document.createElement("span"); s.className = "w"; s.textContent = w; f.appendChild(s); words.push(s);
      });
      n.parentNode.replaceChild(f, n);
    } else if (n.tagName === "EM") { n.classList.add("w"); words.push(n); }
  });

  var ph = [].slice.call(row.querySelectorAll(".figwrap")), slots = [].slice.call(line.querySelectorAll(".slot")), M = null;
  function measure() {
    row.classList.remove("ready"); ph.forEach(function (c) { c.style.transform = "none"; }); text.style.transform = "none";
    var sr = stage.getBoundingClientRect();
    var A = ph.map(function (c) { var r = c.getBoundingClientRect(); return { x: r.left - sr.left, y: r.top - sr.top, w: r.width, h: r.height }; });
    if (!A.length || !A[0].h) return;
    var ar = A[0].w / A[0].h; slots.forEach(function (s) { s.style.width = (0.88 * ar).toFixed(3) + "em"; });
    M = { A: A, S: slots.map(function (s) { var r = s.getBoundingClientRect(); return { x: r.left - sr.left, y: r.top - sr.top, w: r.width }; }) };
  }
  window.addEventListener("resize", function () { requestAnimationFrame(measure); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  window.addEventListener("load", measure);
  measure();

  var clamp = function (x) { return Math.max(0, Math.min(1, x)); };
  var ease = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
  var smooth = null, last = performance.now();
  function frame(now) {
    var dt = Math.min(0.05, (now - last) / 1000); last = now;
    var r = sec.getBoundingClientRect();
    if (M && r.bottom > 0 && r.top < window.innerHeight) {
      var stH = stage.offsetHeight;
      var target = clamp(-(r.top - (window.innerHeight - stH)) / Math.max(1, sec.offsetHeight - stH));
      if (smooth == null) smooth = target;
      smooth += (target - smooth) * (1 - Math.exp(-dt * 8));
      var p = smooth;
      var lit = Math.round(clamp(p / 0.26) * words.length);
      words.forEach(function (w, i) { w.classList.toggle("on", i < lit); });
      var fade = clamp((p - 0.4) / 0.18);
      text.style.opacity = (1 - fade).toFixed(3);
      text.style.transform = "translate3d(0," + (-30 * fade).toFixed(1) + "px,0)";
      head.style.opacity = clamp((p - 0.62) / 0.15).toFixed(3);
      ph.forEach(function (c, i) {
        var A = M.A[i], S = M.S[i]; if (!A || !S) return;
        var e = ease(clamp((p - 0.28 - i * 0.05) / 0.4)), k0 = S.w / A.w, k = k0 + (1 - k0) * e;
        c.style.transform = e >= 1 ? "none" : "translate3d(" + ((S.x - A.x) * (1 - e)).toFixed(1) + "px," + ((S.y - 30 * fade - A.y) * (1 - e)).toFixed(1) + "px,0) scale(" + k.toFixed(4) + ")";
      });
      row.classList.toggle("ready", p > 0.86);
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
