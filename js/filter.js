/**
 * filter.js
 * Project card filtering with 3D entrance animation.
 * Cards animate in with a staggered cardIn keyframe
 * when switching between categories.
 */

(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      /* Update active button */
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      let visibleIndex = 0;

      cards.forEach((card) => {
        const match = filter === 'all' || card.dataset.cat === filter;

        if (match) {
          card.style.display = 'block';
          /* Reset animation then re-trigger */
          card.classList.remove('entering');
          const delay = visibleIndex * 70; // ms stagger
          setTimeout(() => card.classList.add('entering'), delay + 10);
          visibleIndex++;
        } else {
          card.style.display = 'none';
          card.classList.remove('entering');
        }
      });
    });
  });
})();
