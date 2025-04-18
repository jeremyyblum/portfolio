document.addEventListener("DOMContentLoaded", () => {
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

  // === Dark Mode ===
  const root = document.documentElement;
  const darkToggleDesktop = document.getElementById('dark-toggle');
  const darkToggleMobile = document.getElementById('dark-toggle-mobile');

  const savedMode = localStorage.getItem('theme');
  if (savedMode === 'dark') {
    root.classList.add('dark');
  }

  function toggleDarkMode() {
    root.classList.toggle('dark');
    const isDark = root.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  darkToggleDesktop?.addEventListener('click', toggleDarkMode);
  darkToggleMobile?.addEventListener('click', toggleDarkMode);

  // === Mobile Overlay Menü ===
  const menuToggleBtn = document.getElementById('menu-toggle');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const closeOverlayBtn = document.getElementById('close-overlay');

  menuToggleBtn?.addEventListener('click', () => {
    mobileOverlay?.classList.toggle('hidden');
  });

  closeOverlayBtn?.addEventListener('click', () => {
    mobileOverlay?.classList.add('hidden');
  });

  // === Jahr im Footer anzeigen ===
  document.getElementById("year").textContent = new Date().getFullYear();

  
  // === NOCTE Modal ===
  const nocteModal = document.getElementById('nocte-modal');
const openNocteModal = document.getElementById('open-nocte-modal');
const closeNocteModal = document.getElementById('close-nocte-modal');
const nocteModalContent = document.getElementById('nocte-modal-content');

if (nocteModal && openNocteModal && closeNocteModal && nocteModalContent) {
  openNocteModal.addEventListener('click', (e) => {
    e.preventDefault();
    nocteModal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    setTimeout(() => {
      nocteModalContent.classList.add('scale-100', 'opacity-100');
      nocteModalContent.classList.remove('scale-95', 'opacity-0');
    }, 10);
  });

  const closeModal = () => {
    nocteModalContent.classList.remove('scale-100', 'opacity-100');
    nocteModalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
      nocteModal.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }, 300);
  };

  closeNocteModal.addEventListener('click', closeModal);
  nocteModal.addEventListener('click', (e) => {
    if (e.target === nocteModal) {
      closeModal();
    }
  });
}

  

});


  