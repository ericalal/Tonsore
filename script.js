document.addEventListener('DOMContentLoaded', () => {
    // Carrusel
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    const carouselSlidesContainer = document.querySelector('.carousel-slides');

    // Menú Hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu'); // Seleccionamos la nueva clase de la nav

    // Consola para depuración (puedes quitarlos una vez que todo funcione)
    console.log('Slides encontrados:', slides);
    console.log('Puntos encontrados:', dots);
    console.log('Botón anterior encontrado:', prevBtn);
    console.log('Botón siguiente encontrado:', nextBtn);
    console.log('Contenedor de slides encontrado:', carouselSlidesContainer);
    console.log('Botón Hamburguesa encontrado:', hamburgerMenu); // Nuevo log
    console.log('Menú de Navegación encontrado:', navMenu); // Nuevo log

    let currentIndex = 0;
    let autoPlayInterval;

    // --- Funcionalidad del Carrusel ---
    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }

        carouselSlidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;

        dots.forEach((dot, i) => {
            if (i === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoPlay();
        });
    });

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
        stopAutoPlay();
        startAutoPlay();
    }

    showSlide(currentIndex);
    startAutoPlay();

    // --- Funcionalidad del Menú Hamburguesa ---
    if (hamburgerMenu && navMenu) { // Asegurarse de que los elementos existan
        hamburgerMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active'); // Alterna la visibilidad del menú
            hamburgerMenu.classList.toggle('active'); // Alterna la animación del botón
        });
    }

    // Opcional: Cerrar el menú si se hace clic fuera de él (útil para móviles)
    document.addEventListener('click', (event) => {
        // Si el clic no fue en el menú ni en el botón de hamburguesa
        if (!navMenu.contains(event.target) && !hamburgerMenu.contains(event.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });

    // Opcional: Cerrar el menú si se redimensiona la ventana a un tamaño más grande
    // Esto es importante para que el menú no se quede abierto al pasar de móvil a desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 700) { // Usa el mismo breakpoint de tu CSS
            navMenu.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});