/**
 * scroll.js
 * Handles: progress bar, nav scroll state,
 * parallax blooms + grid, active nav link,
 * and Intersection Observer fade-up reveals.
 */

(function () {
  const progressBar = document.getElementById('progress-bar');
  const navbar      = document.getElementById('navbar');
  const grid        = document.getElementById('grid-bg');
  const blooms      = document.querySelectorAll('.bloom');
  const navLinks    = document.querySelectorAll('.nav-links a');
  const sections    = document.querySelectorAll('section[id]');

  /* ── SCROLL HANDLER ── */
  window.addEventListener('scroll', () => {
    const scrollY  = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    /* Progress bar */
    progressBar.style.width = ((scrollY / maxScroll) * 100) + '%';

    /* Nav glass effect */
    navbar.classList.toggle('scrolled', scrollY > 60);

    /* Parallax: blooms */
    blooms.forEach((bloom, i) => {
      const speed = (i + 1) * 0.05;
      bloom.style.transform = `translateY(${scrollY * speed}px)`;
    });

    /* Parallax: grid lines drift */
    grid.style.backgroundPositionY = (scrollY * 0.28) + 'px';

    /* Active nav link highlighting */
    let current = '';
    sections.forEach((sec) => {
      if (scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }, { passive: true });

  /* ── MOUSE PARALLAX (grid + blooms) ── */
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 18;
    const y = (e.clientY / window.innerHeight - 0.5) * 18;
    grid.style.transform = `translate(${x}px, ${y}px)`;
  });

  /* ── INTERSECTION OBSERVER — FADE UP ── */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          /* Stagger children if present */
          entry.target.querySelectorAll('.skill-col, .project-card, .contact-detail').forEach((child, i) => {
            child.style.transitionDelay = (i * 0.08) + 's';
          });
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

  /* ── MOBILE NAV TOGGLE ── */
  const toggle   = document.getElementById('navToggle');
  const navList  = document.getElementById('navLinks');
  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
    /* Close on link click */
    navList.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();
