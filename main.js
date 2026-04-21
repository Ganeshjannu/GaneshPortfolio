/**
 * main.js — Portfolio interactions
 * Scroll reveal · Work timeline
 * Zero dependencies · Vanilla JS only
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────
     1. SCROLL REVEAL (Intersection Observer)
  ───────────────────────────────────────────────────────── */

  function setupReveal() {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target); // trigger once
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal, .reveal-group').forEach(el => io.observe(el));
  }

  /* ─────────────────────────────────────────────────────────
     2. WORK TIMELINE BAR (trigger on entries entering view)
  ───────────────────────────────────────────────────────── */

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

  /* ─────────────────────────────────────────────────────────
     3. BOOT
  ───────────────────────────────────────────────────────── */

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
