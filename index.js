/*
 * index.js
 * Lógica de interactividad para SmileCare
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica para el Menú Móvil ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
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

    // --- LÓGICA DE ANIMACIÓN DEL BANNER PRINCIPAL ---
    const animatedSection = document.querySelector('.animated-section');
    if (animatedSection) {
        const bannerObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    bannerObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.4 
        });
        bannerObserver.observe(animatedSection);
    }

    // --- LÓGICA DE ANIMACIÓN PARA SECCIONES (FADE-IN) ---
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    if (fadeInSections.length > 0) {
        const sectionObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        fadeInSections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // --- LÓGICA DEL ENCABEZADO (HEADER) AL HACER SCROLL ---
    const header = document.getElementById('header');
    if (header) {
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
    }
});
