
document.addEventListener("DOMContentLoaded", function() {
    const imagenesMovibles = document.querySelectorAll(".imagen-movible");

    imagenesMovibles.forEach(function(imagen) {
        imagen.addEventListener("click", function() {
            // Al hacer clic en una imagen, se obtiene la URL de la imagen grande
            const bigImageURL = imagen.getAttribute("data-big-image");

            // Crea una ventana emergente o un visor de imágenes
            const visor = window.open(bigImageURL, "_blank");

            // Puedes personalizar el visor y agregar más funcionalidades
            // como un botón para cerrar, controles de navegación, etc.
        });
    });
});
