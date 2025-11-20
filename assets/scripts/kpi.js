const counters = document.querySelectorAll('.kpi-number');
let hasRun = false;

function animateCounter(counter) {
  const target = +counter.getAttribute('data-target');
  const duration = 1500;
  const step = target / (duration / 16);

  let current = 0;

  const update = () => {
    current += step;
    if (current < target) {
      counter.textContent = Math.floor(current);
      requestAnimationFrame(update);
    } else {
      counter.textContent = target;
    }
  };

  requestAnimationFrame(update);
}

const kpiObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !hasRun) {
        counters.forEach((counter) => animateCounter(counter));
        hasRun = true;
      }
    });
  },
  {
    threshold: 0.3,
  }
);

kpiObserver.observe(document.querySelector('.kpi-section'));
