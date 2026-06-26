(function () {
  'use strict';

  /* ── Elements ───────────────────────────────────────── */
  var wrapper    = document.getElementById('sliderWrapper');
  var container  = document.getElementById('sliderContainer');
  var divider    = document.getElementById('sliderDivider');
  var panelAfter = document.getElementById('panelAfter');

  if (!container || !panelAfter || !divider) return;

  /* ── State ──────────────────────────────────────────── */
  var isDragging  = false;
  var isAnimating = false;
  var rafId       = null;

  /* ── Helpers ────────────────────────────────────────── */

  function clamp(v, lo, hi) {
    return Math.max(lo, Math.min(hi, v));
  }

  /**
   * Move the divider to `pct` percent from the left edge.
   * pct = 0  → divider at far left  → all "after" visible
   * pct = 100 → divider at far right → all "before" visible
   */
  function setPosition(pct) {
    pct = clamp(pct, 2, 98);
    divider.style.left             = pct + '%';
    panelAfter.style.clipPath      = 'inset(0 0 0 ' + pct + '%)';
    panelAfter.style.webkitClipPath = 'inset(0 0 0 ' + pct + '%)';
  }

  function stopAnimation() {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    isAnimating = false;
  }

  function getPct(clientX) {
    var rect = container.getBoundingClientRect();
    return ((clientX - rect.left) / rect.width) * 100;
  }

  /* ── Easing ─────────────────────────────────────────── */

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  /* ── Animation engine ───────────────────────────────── */

  function animateTo(from, to, ms, easeFn, onDone) {
    stopAnimation();
    isAnimating = true;
    var t0 = performance.now();

    function tick(now) {
      if (!isAnimating) return;
      var p = Math.min((now - t0) / ms, 1);
      setPosition(from + (to - from) * easeFn(p));
      if (p < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        isAnimating = false;
        rafId = null;
        if (onDone) onDone();
      }
    }

    rafId = requestAnimationFrame(tick);
  }

  /* ── Intro sequence ─────────────────────────────────── */

  function playIntro() {
    /* Phase 1 – hold at 80% (mostly "before") briefly,
       then sweep across to 22% (mostly "after")          */
    setPosition(80);

    setTimeout(function () {
      animateTo(80, 22, 2000, easeInOutCubic, function () {
        /* Phase 2 – pause, then settle to center          */
        setTimeout(function () {
          animateTo(22, 50, 950, easeOutCubic, null);
        }, 650);
      });
    }, 450);
  }

  /* ── Mouse interaction ──────────────────────────────── */

  container.addEventListener('mousedown', function (e) {
    stopAnimation();
    isDragging = true;
    wrapper.classList.add('is-dragging');
    setPosition(getPct(e.clientX));
    e.preventDefault();
  });

  document.addEventListener('mousemove', function (e) {
    if (!isDragging) return;
    setPosition(getPct(e.clientX));
  });

  document.addEventListener('mouseup', function () {
    if (!isDragging) return;
    isDragging = false;
    wrapper.classList.remove('is-dragging');
  });

  /* ── Touch interaction ──────────────────────────────── */

  container.addEventListener('touchstart', function (e) {
    stopAnimation();
    isDragging = true;
    setPosition(getPct(e.touches[0].clientX));
    e.preventDefault();
  }, { passive: false });

  document.addEventListener('touchmove', function (e) {
    if (!isDragging) return;
    setPosition(getPct(e.touches[0].clientX));
  }, { passive: true });

  document.addEventListener('touchend', function () {
    isDragging = false;
  });

  /* ── Init ───────────────────────────────────────────── */

  var isMobile = window.innerWidth <= 480;

  /* Set the position synchronously before the first paint.     */
  setPosition(isMobile ? 2 : 80);

  /* On mobile: stay at the left edge (Después visible by default).
     On desktop: run the full intro sweep animation.            */
  if (!isMobile) {
    if (document.readyState === 'complete') {
      setTimeout(playIntro, 120);
    } else {
      window.addEventListener('load', playIntro);
    }
  }

}());
