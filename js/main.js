document.addEventListener('DOMContentLoaded', function() {
    const imagenProyecto = document.querySelector('.imagen_proyecto');
    const infoImagen = document.querySelector('.info_imagen');

    imagenProyecto.addEventListener('click', function() {
        infoImagen.classList.toggle('active');
    });
});