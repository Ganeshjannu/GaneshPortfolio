/**
 * case-study.js — Portfolio design system animations
 * Applies to: activproperties-v4.html & medical-share.html
 * Vanilla JS · IntersectionObserver · No dependencies
 */

(function () {
  'use strict';

  /* ── SCROLL REVEAL ─────────────────────────────────────── */
  function setupReveal() {
    // Mark all relevant elements for reveal animation
    const selectors = [
      'section',
      '.overview-card',
      '.persona-card',
      '.pain-card',
      '.stat-pill',
      '.stat-card',
      '.hmw-item',
      '.ia-row',
      '.screen-section',
      '.screen-block',
      '.finding-card',
      '.reflection-card',
      '.l-card',
      '.vf-step',
      '.insight',
      '.insight-box',
      '.role-banner',
      '.comp-table',
      '.wf-window',
      '.phase-step',
      '.tl-step',
    ];

    const elements = document.querySelectorAll(selectors.join(', '));

    elements.forEach((el) => {
      el.classList.add('cs-reveal');
    });

    // Group-stagger parent elements
    const groupSelectors = [
      '.overview-grid',
      '.persona-grid',
      '.pain-grid',
      '.stat-row',
      '.phase-steps',
      '.finding-grid',
      '.reflection-grid',
      '.hmw-grid',
      '.ia-list',
      '.timeline',
      '.wf-grid',
      '.ds-grid',
      '.card-grid',
      '.role-compare',
      '.flow-cols',
      '.empathy-grid',
      '.stats-row',
    ];

    const groups = document.querySelectorAll(groupSelectors.join(', '));
    groups.forEach((g) => {
      g.classList.add('cs-reveal-group');
      // Remove individual reveal from direct children so group controls timing
      Array.from(g.children).forEach((child) => {
        child.classList.add('cs-reveal');
      });
    });

    // IntersectionObserver — fire once, fade up
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cs-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.cs-reveal').forEach((el) => io.observe(el));
  }

  /* ── HERO ELEMENT ENTRANCE ──────────────────────────────── */
  function setupHeroEntrance() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const heroChildren = hero.querySelectorAll(
      'h1, .hero-sub, .meta-row, .meta-grid, .hero-tag, .hero-screens'
    );
    heroChildren.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 500ms ease ${i * 100}ms, transform 500ms ease ${i * 100}ms`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }

  /* ── HOVER: CARD LIFT MICRO-ANIMATION ───────────────────── */
  function setupCardHover() {
    const cards = document.querySelectorAll(
      '.pain-card, .overview-card, .finding-card, .reflection-card, .persona-card, .wf-window, .stat-pill, .stat-card'
    );
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        card.style.willChange = 'transform';
      });
      card.addEventListener('mouseleave', () => {
        card.style.willChange = 'auto';
      });
    });
  }

  /* ── BOOT ────────────────────────────────────────────────── */
  function init() {
    setupHeroEntrance();
    setupReveal();
    setupCardHover();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
