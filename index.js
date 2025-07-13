function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

let currentSlide = 0;

function moveTestimonial(step) {
  const slides = document.querySelector('.testimonial-slider');
  const totalSlides = slides.children.length;

  currentSlide += step;

  if (currentSlide >= totalSlides) currentSlide = 0;
  if (currentSlide < 0) currentSlide = totalSlides - 1;

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto slide cada 5 segundos
setInterval(() => {
  moveTestimonial(1);
}, 5000);
