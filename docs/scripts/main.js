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

  
// === Universelles Modal-System ===
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.open-modal').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const title = button.dataset.title || 'Kein Titel';
    const text = button.dataset.text || '';
    const img = button.dataset.img || '';

    modalBody.innerHTML = `
      <h3 class="text-2xl font-bold mb-4">${title}</h3>
      <p class="text-gray-700 dark:text-gray-300 mb-4">${text}</p>
      ${img ? `<img src="${img}" alt="${title}" class="w-48 mx-auto mb-4 rounded-lg">` : ''}
    `;

    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');

    setTimeout(() => {
      modalContent.classList.add('modal-open');
      modalContent.classList.remove('scale-95', 'opacity-0');
    }, 10); 
  });
});

const closeModal = () => {
  modalContent.classList.remove('modal-open');
  modalContent.classList.add('scale-95', 'opacity-0');
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
    modalBody.innerHTML = '';
  }, 300);
};

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

});


  