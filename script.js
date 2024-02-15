$(document).ready(function () {
        /**
     * Actualiza el estilo de los elementos de la página.
     *
     * @function
     * @name actualizarEstilo
     * @return {void} No devuelve ningún valor.
     */
    function actualizarEstilo() {
        var numColumnas = Math.floor($(window).width() / $('.contenedor').width());
        $('.contenedor .cuadro-texto').css({
            left: '100%', // Reinicia la posición
            right: 'auto',
        });
        $('.contenedor:nth-child(' + numColumnas + 'n) .cuadro-texto').css({
            left: 'auto',
            right: '100%', // Cambia el cuadro de texto a la izquierda
        });
    }

    /**
     * Realiza cambios de opacidad al resto de imágenes y cambia el color de fondo del body para el enfoque al pasar el ratón sobre la imagen.
     *
     * @function
     * @name imgFocus
     * @param {HTMLElement} focusImg - El elemento que ha recibido el enfoque.
     * @return {void} No devuelve ningún valor.
     */
    window.imgFocus = function(focusImg) {
        $('.personaje-img').css({
            opacity: 0.5
        })
        $(focusImg).find('.personaje-img').css({
            opacity: 1
        })
        $('body').css({
            "background-color": "rgb(12, 12, 12)"
        });
    };

        /**
     * Restablece la apariencia inicial, restaurando la opacidad de las imágenes y el color de fondo del body.
     *
     * @function
     * @name imgDeFocus
     * @param {HTMLElement} focusImg - El elemento que ha perdido el enfoque.
     * @return {void} No devuelve ningún valor.
     */
    window.imgDeFocus = function(focusImg) {
        $('.personaje-img').css({
            opacity: 0.8
        })
        $('body').css({
            "background-color": "black"
        });
    }

    // Llama a la función en la carga inicial
    actualizarEstilo();

    // Actualiza el estilo al redimensionar la ventana
    $(window).resize(function () {
        actualizarEstilo();
    });


});