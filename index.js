function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

function submitForm(e) {
  e.preventDefault();
  alert("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.");
}
