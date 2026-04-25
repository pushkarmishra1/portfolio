/**
 * cursor.js
 * Custom magnetic neon cursor with smooth lag ring.
 * Uses requestAnimationFrame for 60fps smooth following.
 */

(function () {
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');

  let mouseX = 0, mouseY = 0; // actual mouse position
  let ringX  = 0, ringY  = 0; // lagged ring position
  const LERP = 0.12;           // interpolation speed (0 = no follow, 1 = instant)

  /* Track mouse position */
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  /* Smooth ring follow */
  function animateRing() {
    ringX += (mouseX - ringX) * LERP;
    ringY += (mouseY - ringY) * LERP;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  /* Hover state — enlarge cursor on interactive elements */
  const hoverTargets = 'a, button, .filter-btn, .skill-item, .project-card, .pill, .plink';
  document.querySelectorAll(hoverTargets).forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorRing.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorRing.classList.remove('hover');
    });
  });

  /* Hide cursor when leaving window */
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    cursorRing.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorRing.style.opacity = '1';
  });
})();
