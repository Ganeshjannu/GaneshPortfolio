/**
 * script.js — Ganesh Jannu Portfolio
 * Scroll reveal · Work timeline bar
 * Zero dependencies · Vanilla JS · GitHub Pages ready
 */

(function () {
  'use strict';

  /* ── 1. SCROLL REVEAL ─────────────────────────────────── */
  function setupReveal() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target); // fire once only
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal, .reveal-group')
            .forEach(el => io.observe(el));
  }

  /* ── 2. WORK TIMELINE BAR ─────────────────────────────── */
  function setupWorkTimeline() {
    const entries = document.querySelector('.work-entries');
    if (!entries) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entries.classList.add('is-visible');
          io.unobserve(entries);
        }
      },
      { threshold: 0.08 }
    );

    io.observe(entries);
  }



  /* ── BOOT ─────────────────────────────────────────────── */
  function init() {
    setupReveal();
    setupWorkTimeline();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
