document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reducedMotion) {
    return;
  }

  const revealTargets = [
    '.page-intro',
    'h2',
    '.project-card',
    '.timeline-item',
    '.publication-item',
    '.certification-list li',
    '.skills-grid .skill-badge'
  ];

  const elements = document.querySelectorAll(revealTargets.join(','));

  elements.forEach((el, index) => {
    el.classList.add('reveal-on-scroll');
    el.classList.add('reveal-stagger');
    el.style.setProperty('--stagger-delay', `${Math.min(index * 45, 360)}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  elements.forEach((el) => observer.observe(el));
});
