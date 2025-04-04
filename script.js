// Smooth scroll for navigation
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const section = document.getElementById(targetId);
      section.scrollIntoView({ behavior: 'smooth' });
    });
  });
  