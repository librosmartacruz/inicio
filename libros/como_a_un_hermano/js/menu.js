document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const body = document.body;

    // Función para verificar el tamaño de la pantalla y ajustar el menú
    function checkScreenSize() {
        if (window.innerWidth >= 769) {
            // En pantallas grandes, mostramos el menú horizontalmente sin el ícono
            menu.classList.remove("active");
            menuToggle.style.display = 'none'; // Ocultamos el ícono ☰
        } else {
            // En pantallas pequeñas, mostramos el ícono y el menú desplegable
            menuToggle.style.display = 'block'; // Aseguramos que el ícono se muestre
        }
    }

    // Llamamos a la función al cargar la página y al cambiar el tamaño de la ventana
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Muestra u oculta el menú al hacer clic en el icono ☰
    menuToggle.addEventListener("click", function (event) {
        const isActive = menu.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isActive);

        // Si el menú está activo, desplazamos el ícono hacia la izquierda
        if (isActive) {
            menuToggle.style.left = "-50px"; // Desplazamos el ícono hacia la izquierda
        } else {
            menuToggle.style.left = "30px"; // Vuelve a su posición original
        }

        // Prevenimos que el evento de clic también cierre el menú al hacer clic en el propio botón
        event.stopPropagation();
    });

    // Cierra el menú al hacer clic fuera de él
    body.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.style.left = "30px"; // El ícono vuelve a su posición
        }
    });
});
