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

// === Dark Mode Toggle (Desktop) ===
const darkToggleDesktop = document.getElementById('dark-toggle');

// === Dark Mode Toggle (Mobile)
const darkToggleMobile = document.getElementById('dark-toggle-mobile');

// === Root-Element (für classList)
const root = document.documentElement;

// === LocalStorage Zustand lesen
const savedMode = localStorage.getItem('theme');
if (savedMode === 'dark') {
  root.classList.add('dark');
}

// === Darkmode-Toggle Funktion
function toggleDarkMode() {
  root.classList.toggle('dark');
  const isDark = root.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

darkToggleDesktop?.addEventListener('click', toggleDarkMode);
darkToggleMobile?.addEventListener('click', toggleDarkMode);

// === Mobile Overlay Menü
const menuToggleBtn = document.getElementById('menu-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');

menuToggleBtn.addEventListener('click', () => {
  mobileOverlay.classList.toggle('hidden');
});

// === Jahr im Footer anzeigen
document.getElementById("year").textContent = new Date().getFullYear();

const closeOverlayBtn = document.getElementById('close-overlay');

closeOverlayBtn.addEventListener('click', () => {
  mobileOverlay.classList.add('hidden');
});


  