document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón por su ID
    const button = document.getElementById("button-scroll-to-lineadetiempo");

    // Agrega un event listener para el clic en el botón
    button.addEventListener("click", function() {
        // Selecciona la sección a la que deseas desplazarte por su ID
        const welcomeSection = document.getElementById("lineadetiempo");

        // Desplaza la ventana del navegador hasta la sección "welcome"
        welcomeSection.scrollIntoView({ behavior: "smooth" });
    });
});