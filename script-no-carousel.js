document.addEventListener('DOMContentLoaded', () => {
    // Menú Hamburguesa
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu'); // Seleccionamos la nueva clase de la nav

    // Consola para depuración (puedes quitarlos una vez que todo funcione)
    console.log('Botón Hamburguesa encontrado:', hamburgerMenu);
    console.log('Menú de Navegación encontrado:', navMenu);

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
        if (navMenu && hamburgerMenu && !navMenu.contains(event.target) && !hamburgerMenu.contains(event.target) && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });

    // Opcional: Cerrar el menú si se redimensiona la ventana a un tamaño más grande
    // Esto es importante para que el menú no se quede abierto al pasar de móvil a desktop
    window.addEventListener('resize', () => {
        if (navMenu && hamburgerMenu && window.innerWidth >= 700) { // Usa el mismo breakpoint de tu CSS
            navMenu.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});