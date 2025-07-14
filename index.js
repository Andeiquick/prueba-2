/*
 * index.js
 * Lógica de interactividad para SmileCare
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el Menú Móvil ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Asegurarse de que los elementos existen antes de añadir listeners
    if (mobileMenuButton && mobileMenu) {
        const navLinks = mobileMenu.querySelectorAll('a');

        // Alternar la visibilidad del menú móvil
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Cierra el menú móvil cuando se hace clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }




    document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA DEL MENÚ MÓVIL ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- LÓGICA DE LA ANIMACIÓN DEL BANNER AL HACER SCROLL ---
    const animatedSection = document.querySelector('.animated-section');
    if (animatedSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.4
        });
        observer.observe(animatedSection);
    }

    // --- LÓGICA DEL ENCABEZADO (HEADER) ---
    const header = document.getElementById('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scroll hacia abajo
            header.style.top = '-100px';
        } else {
            // Scroll hacia arriba
            header.style.top = '0';
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});

