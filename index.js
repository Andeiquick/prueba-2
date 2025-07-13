// Menú responsive
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

// Slider de servicios
let currentService = 0;

function moveService(step) {
  const slides = document.querySelector('.service-slider');
  const totalSlides = slides.children.length;

  currentService += step;

  if (currentService >= totalSlides) currentService = 0;
  if (currentService < 0) currentService = totalSlides - 1;

  slides.style.transform = `translateX(-${currentService * 100}%)`;
}

// Auto slide servicios cada 5 segundos
setInterval(() => {
  moveService(1);
}, 5000);

// Slider de testimonios
let currentSlide = 0;

function moveTestimonial(step) {
  const slides = document.querySelector('.testimonial-slider');
  const totalSlides = slides.children.length;

  currentSlide += step;

  if (currentSlide >= totalSlides) currentSlide = 0;
  if (currentSlide < 0) currentSlide = totalSlides - 1;

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto slide testimonios cada 6 segundos
setInterval(() => {
  moveTestimonial(1);
}, 6000);
