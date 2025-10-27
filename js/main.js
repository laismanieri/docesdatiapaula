const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  menuIcon.textContent = menuIcon.textContent === '☰' ? '✖' : '☰';
});

const prevBtn = document.querySelector('.carousel-button-prev');
const nextBtn = document.querySelector('.carousel-button-next');
const carousel = document.querySelector('.carousel');

let index = 0;

function updateCarousel() {
  const itemWidth = carousel.querySelector('.carousel-slide').offsetWidth;
  carousel.style.transform = `translateX(-${index * itemWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  const items = carousel.querySelectorAll('.carousel-slide').length;
  const visible = Math.floor(carousel.parentElement.offsetWidth / carousel.querySelector('.carousel-slide').offsetWidth);
  if (index < items - visible) {
    index++;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
  }
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
window.addEventListener('load', updateCarousel);
