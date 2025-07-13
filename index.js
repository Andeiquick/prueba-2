document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica del Menú Hamburguesa ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Evento para mostrar/ocultar el menú móvil
    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Lógica de Sliders Reutilizable ---
    function createSlider(sliderId, slideClass, autoSlideInterval = 5000) {
        const slider = document.getElementById(sliderId);
        if (!slider) {
            return; // No hacer nada si el slider no existe en la página
        }

        const slides = slider.querySelectorAll(`.${slideClass}`);
        if (slides.length === 0) return;

        const prevButton = slider.querySelector('.slider-prev');
        const nextButton = slider.querySelector('.slider-next');
        let currentIndex = 0;
        let intervalId = null;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('hidden', i !== index);
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        function startAutoSlide() {
            if (autoSlideInterval > 0) {
               intervalId = setInterval(nextSlide, autoSlideInterval);
            }
        }

        function stopAutoSlide() {
            clearInterval(intervalId);
        }

        function resetAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
        }

        showSlide(currentIndex);
        startAutoSlide();
    }

    // Inicializar el slider de testimonios
    createSlider('testimonial-slider', 'testimonial-slide', 6000);

    // --- Actualizar año en el footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

