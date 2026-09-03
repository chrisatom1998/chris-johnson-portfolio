(() => {
  'use strict';

  document.documentElement.classList.add('js');

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  const setMenu = (open, returnFocus = false) => {
    if (!(toggle instanceof HTMLButtonElement) || !(links instanceof HTMLElement)) return;

    links.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Close' : 'Menu';

    if (returnFocus) toggle.focus();
  };

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });

    links.addEventListener('click', (event) => {
      if (event.target instanceof HTMLAnchorElement) setMenu(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false, true);
      }
    });

    window.addEventListener('resize', () => {
      if (window.matchMedia('(min-width: 721px)').matches) setMenu(false);
    });
  }

  const revealItems = [...document.querySelectorAll('[data-reveal]')];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );

  revealItems.forEach((item) => observer.observe(item));
})();
