document.addEventListener('DOMContentLoaded', function() {
    
    // --- Lógica del Menú Hamburguesa ---
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Evento para mostrar/ocultar el menú móvil
    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- Lógica de Sliders Reutilizable ---
    /**
     * Crea y controla un carrusel de imágenes o contenido.
     * @param {string} sliderId - El ID del contenedor principal del slider.
     * @param {string} slideClass - La clase CSS que identifica cada slide.
     * @param {number} [autoSlideInterval=5000] - El intervalo en ms para el cambio automático. 0 para deshabilitar.
     */
    function createSlider(sliderId, slideClass, autoSlideInterval = 5000) {
        const slider = document.getElementById(sliderId);
        if (!slider) {
            console.error(`Slider con ID "${sliderId}" no encontrado.`);
            return;
        }

        const slides = slider.querySelectorAll(`.${slideClass}`);
        const prevButton = slider.querySelector('.slider-prev');
        const nextButton = slider.querySelector('.slider-next');
        let currentIndex = 0;
        let intervalId = null;

        // Muestra el slide correspondiente al índice y oculta los demás
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('hidden', i !== index);
            });
        }

        // Avanza al siguiente slide
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        // Retrocede al slide anterior
        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        // Inicia el carrusel automático
        function startAutoSlide() {
            if (autoSlideInterval > 0) {
               intervalId = setInterval(nextSlide, autoSlideInterval);
            }
        }

        // Detiene el carrusel automático
        function stopAutoSlide() {
            clearInterval(intervalId);
        }

        // Reinicia el temporizador del carrusel (útil después de una navegación manual)
        function resetAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }
        
        // Asignar eventos a los botones de control
        if(nextButton) {
            nextButton.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
        }

        if(prevButton) {
            prevButton.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
        }

        // Iniciar el slider al cargar la página
        showSlide(currentIndex);
        startAutoSlide();
    }

    // Inicializar ambos sliders con sus respectivas configuraciones
    createSlider('service-slider', 'service-slide', 5000); // Auto-slide cada 5 segundos
    createSlider('testimonial-slider', 'testimonial-slide', 6000); // Auto-slide cada 6 segundos

    // --- Actualizar año en el footer ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
