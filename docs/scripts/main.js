// === Skillbar Animation ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-skillbar');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  document.querySelectorAll('.skill-fill').forEach(el => {
    observer.observe(el);
  });
  
  // === Darkmode Toggle mit Speicherfunktion ===
  const toggle = document.getElementById('dark-toggle');
  const root = document.documentElement;
  
  // Zustand aus localStorage lesen
  const savedMode = localStorage.getItem('theme');
  if (savedMode === 'dark') {
    root.classList.add('dark');
  }
  
  // Toggle-Button klickt zwischen "dark" und "light" hin und her
  toggle.addEventListener('click', () => {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
  
  // === Footer: Jahr & Version anzeigen ===
  document.getElementById("year").textContent = new Date().getFullYear();


  