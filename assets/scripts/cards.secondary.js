
  const cards = document.querySelectorAll('.scnd-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    {
      threshold: 0.1, // cuando se ve 20% de la sección
    }
  );

  cards.forEach(card => observer.observe(card));
