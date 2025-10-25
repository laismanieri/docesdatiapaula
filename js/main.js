const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  // Alterna o ícone ☰ ↔ ✖
  menuIcon.textContent = menuIcon.textContent === '☰' ? '✖' : '☰';
});

