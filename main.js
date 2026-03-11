/**
 * PADEL VISION AI — main.js
 * Non-blocking, dependency-free vanilla JS
 * Features: nav scroll, hamburger, scroll reveal, form handling, FAQ accordion
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────
     0. JS-READY — activate reveal animations
     ───────────────────────────────────── */
  // Add class immediately so CSS can hide .reveal elements
  // before the observer fires. Without this, elements flash visible then hide.
  document.documentElement.classList.add('js-ready');

  /* ─────────────────────────────────────
     1. NAV — scroll-aware background
     ───────────────────────────────────── */
  const header = document.getElementById('site-header');

  if (header) {
    const updateHeader = () => {
      header.classList.toggle('header--scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  /* ─────────────────────────────────────
     2. HAMBURGER — mobile nav toggle
     ───────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.classList.toggle('is-open', !isOpen);
      mobileMenu.setAttribute('aria-hidden', String(isOpen));
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });

    function closeMobileMenu() {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('is-open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  /* ─────────────────────────────────────
     3. SCROLL REVEAL — IntersectionObserver
     ───────────────────────────────────── */
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );
    revealElements.forEach(el => revealObserver.observe(el));
  }

  /* ─────────────────────────────────────
     4. SMOOTH SCROLL — anchor links
     ───────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ─────────────────────────────────────
     5. FAQ ACCORDION
     ───────────────────────────────────── */
  document.querySelectorAll('.faq-item__btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      // Collapse all others in same list
      const parentList = btn.closest('.faq-list');
      if (parentList) {
        parentList.querySelectorAll('.faq-item__btn').forEach(otherBtn => {
          if (otherBtn !== btn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            const otherAnswer = otherBtn.closest('.faq-item').querySelector('.faq-item__answer');
            if (otherAnswer) otherAnswer.hidden = true;
          }
        });
      }
      // Toggle current
      btn.setAttribute('aria-expanded', String(!isExpanded));
      const answer = btn.closest('.faq-item').querySelector('.faq-item__answer');
      if (answer) answer.hidden = isExpanded;
    });
  });

  /* ─────────────────────────────────────
     6. CONTACT FORM — validation + mailto
     ───────────────────────────────────── */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formContainer = document.getElementById('form-container');
  const formFields = contactForm ? contactForm.querySelectorAll('[required]') : [];

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      let valid = true;
      formFields.forEach(field => {
        const group = field.closest('.form__group');
        const error = group ? group.querySelector('.form__error') : null;
        const isEmpty = !field.value.trim();
        const isInvalidEmail = field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);

        if (isEmpty || isInvalidEmail) {
          valid = false;
          field.setAttribute('aria-invalid', 'true');
          field.style.borderColor = 'var(--color-red)';
          if (error) error.removeAttribute('hidden');
        } else {
          field.removeAttribute('aria-invalid');
          field.style.borderColor = '';
          if (error) error.setAttribute('hidden', '');
        }
      });

      if (!valid) return;

      // Build mailto
      const club   = (document.getElementById('f-club')    || {}).value || '';
      const name    = (document.getElementById('f-name')    || {}).value || '';
      const email   = (document.getElementById('f-email')   || {}).value || '';
      const courts  = (document.getElementById('f-courts')  || {}).value || '';
      const message = (document.getElementById('f-message') || {}).value || '';

      const subject = encodeURIComponent('Demande de démo — Padel Vision AI');
      const body    = encodeURIComponent(
        `Nom : ${name}
Email : ${email}
Salle : ${club}
Nombre de terrains : ${courts}

Message :
${message}`
      );

      const addr = ['padel', '.', 'vision', '.', 'ai', '@', 'gmail', '.', 'com'].join('');
      window.location.href = `mailto:${addr}?subject=${subject}&body=${body}`;

      // Show success state
      if (formSuccess && formContainer) {
        formContainer.hidden = true;
        formSuccess.removeAttribute('hidden');
        formSuccess.focus();
      }
    });

    // Live inline validation on blur
    formFields.forEach(field => {
      field.addEventListener('blur', () => {
        const group = field.closest('.form__group');
        const error = group ? group.querySelector('.form__error') : null;
        if (field.value.trim()) {
          field.removeAttribute('aria-invalid');
          field.style.borderColor = '';
          if (error) error.setAttribute('hidden', '');
        }
      });
    });
  }

  /* ─────────────────────────────────────
     7. ACTIVE NAV LINK — current page
     ───────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ─────────────────────────────────────
     8. LIVE SCORE BADGE — hero animation
     ───────────────────────────────────── */
  const liveScore = document.getElementById('live-score');
  if (liveScore) {
    const scores = ['0 – 0', '15 – 0', '15 – 15', '30 – 15', '40 – 15', '40 – 30', 'Deuce', '40 – 30'];
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % scores.length;
      liveScore.textContent = scores[idx];
    }, 2800);
  }

  /* ─────────────────────────────────────
     9. STAT COUNTER — animated numbers
     ───────────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length) {
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const start = performance.now();

        const tick = now => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = target * eased;
          el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1)) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  /* ─────────────────────────────────────
     10. HERO BALL — animated bezier trajectory
     ───────────────────────────────────── */
  const courtBall = document.getElementById('court-ball');
  const courtGlow = document.getElementById('court-ball-glow');

  if (courtBall) {
    // Quadratic bezier: M 95 430 Q 170 200 245 120
    const P0 = { x: 95, y: 430 };
    const P1 = { x: 170, y: 200 };
    const P2 = { x: 245, y: 120 };

    function bezier(t) {
      const u = 1 - t;
      return {
        x: u * u * P0.x + 2 * u * t * P1.x + t * t * P2.x,
        y: u * u * P0.y + 2 * u * t * P1.y + t * t * P2.y
      };
    }

    let t = 0.5, dir = 1, lastTs = null;

    function animateBall(ts) {
      if (!lastTs) lastTs = ts;
      const dt = ts - lastTs;
      lastTs = ts;

      t += dir * dt * 0.00022;
      if (t >= 1) { t = 1; dir = -1; }
      if (t <= 0) { t = 0; dir = 1; }

      const { x, y } = bezier(t);
      courtBall.setAttribute('cx', x.toFixed(1));
      courtBall.setAttribute('cy', y.toFixed(1));
      if (courtGlow) {
        courtGlow.setAttribute('cx', x.toFixed(1));
        courtGlow.setAttribute('cy', y.toFixed(1));
      }
      requestAnimationFrame(animateBall);
    }
    requestAnimationFrame(animateBall);
  }

  /* ─────────────────────────────────────
     11. LIVE DATA FEED — rotating events
     ───────────────────────────────────── */
  const dataFeed = document.querySelector('.data-feed');
  if (dataFeed) {
    const feedLabel = dataFeed.querySelector('.data-feed__label');
    const feedEvents = [
      { event: 'Bandeja · 81 km/h · Joueur A2 · Terrain 02', score: '15 – 0' },
      { event: 'Vibora · 88 km/h · Joueur B1 · Terrain 06', score: '30 – 15' },
      { event: 'Lob défensif · 6,8m · Joueur A1 · Terrain 03', score: '40 – 15' },
      { event: 'Faute directe · Joueur B2 · Terrain 01', score: '15 – 30' },
      { event: 'Retour · 77 km/h · Joueur A2 · Terrain 05', score: 'Jeu A' },
      { event: 'Smash · 102 km/h · Joueur B1 · Terrain 04', score: '0 – 15' },
      { event: 'Service ace · 71 km/h · Joueur A1 · Terrain 07', score: '15 – 0' },
      { event: 'Lob · 9,1m · Joueur A2 · Terrain 02', score: 'Deuce' },
      { event: 'Bandeja · 75 km/h · Joueur B2 · Terrain 05', score: '30 – 40' },
      { event: 'Smash · 98 km/h · Joueur A1 · Terrain 03', score: '40 – 30' },
    ];
    let feedIdx = 0;

    function nowHMS() {
      const d = new Date();
      return [d.getHours(), d.getMinutes(), d.getSeconds()]
        .map(n => String(n).padStart(2, '0')).join(':');
    }

    function pushFeedEvent() {
      const evt = feedEvents[feedIdx % feedEvents.length];
      feedIdx++;

      const row = document.createElement('div');
      row.className = 'data-feed__row data-feed__row--new';
      row.innerHTML =
        `<span class="data-feed__time">${nowHMS()}</span>` +
        `<span class="data-feed__event">${evt.event}</span>` +
        `<span class="data-feed__score">${evt.score}</span>` +
        `<span class="data-feed__tag">IA</span>`;

      if (feedLabel) feedLabel.after(row);

      // Trim rows beyond 5
      const rows = dataFeed.querySelectorAll('.data-feed__row');
      if (rows.length > 5) rows[rows.length - 1].remove();

      setTimeout(() => row.classList.remove('data-feed__row--new'), 500);
    }

    setInterval(pushFeedEvent, 3200);
  }

  /* ─────────────────────────────────────
     12. SCORE MOCKUP — live detection log
     ───────────────────────────────────── */
  const detectionTime  = document.getElementById('detection-time');
  const detectionEvent = document.getElementById('detection-event');
  const detectionConf  = document.getElementById('detection-confidence');
  const detectionLog   = detectionTime && detectionTime.closest('.score-mockup__log');

  if (detectionTime && detectionEvent) {
    const detectionEvents = [
      { label: 'Smash A1 · 94 km/h · Fond de court droit', conf: '97,3%' },
      { label: 'Bandeja B2 · 78 km/h · Côté gauche', conf: '96,1%' },
      { label: 'Lob A2 · trajectoire 8,4m · Zone arrière', conf: '98,7%' },
      { label: 'Vibora B1 · 91 km/h · Vitre latérale', conf: '95,8%' },
      { label: 'Service A1 · 68 km/h · Zone T', conf: '99,1%' },
    ];
    let detIdx = 0;

    function nowHMS() {
      const d = new Date();
      return [d.getHours(), d.getMinutes(), d.getSeconds()]
        .map(n => String(n).padStart(2, '0')).join(':');
    }

    function updateDetection() {
      const ev = detectionEvents[detIdx % detectionEvents.length];
      detIdx++;
      detectionTime.textContent  = nowHMS() + ' · Point détecté';
      detectionEvent.textContent = ev.label;
      if (detectionConf) detectionConf.textContent = ev.conf;

      if (detectionLog) {
        detectionLog.classList.remove('score-mockup__log--flash');
        void detectionLog.offsetWidth; // force reflow
        detectionLog.classList.add('score-mockup__log--flash');
      }
    }

    setInterval(updateDetection, 4100);
  }

})();
