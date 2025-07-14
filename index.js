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

    // --- Lógica para la Animación de Scroll ---
    const sections = document.querySelectorAll('.fade-in-section');

    // Opciones para el Intersection Observer
    const observerOptions = {
        root: null, // Observa en relación al viewport
        rootMargin: '0px',
        threshold: 0.1 // Se activa cuando el 10% del elemento es visible
    };

    // Callback que se ejecuta cuando un elemento observado entra o sale del viewport
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está intersectando (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: deja de observar el elemento una vez que la animación ha ocurrido
                // observer.unobserve(entry.target); 
            }
        });
    };

    // Crear una nueva instancia del Intersection Observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar cada una de las secciones
    sections.forEach(section => {
        observer.observe(section);
    });

});
// Script para activar las animaciones cuando la sección es visible
const animatedSection = document.querySelector('.animated-section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Dejar de observar después de la primera vez
        }
    });
}, {
    threshold: 0.3 
});

// Empieza a observar la sección
observer.observe(animatedSection);
