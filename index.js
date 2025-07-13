let currentSlide = 0;

function moveSlide(step) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  currentSlide += step;

  if (currentSlide >= totalSlides) currentSlide = 0;
  if (currentSlide < 0) currentSlide = totalSlides - 1;

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto slide cada 5 segundos
setInterval(() => {
  moveSlide(1);
}, 5000);

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

function submitForm(e) {
  e.preventDefault();
  alert("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.");
}
