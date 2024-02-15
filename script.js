$(document).ready(function () {
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

    // Cambios de opacidad al resto de imágenes y cambio de color de fondo de body para focus en el hover
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

    // Restablece la apariencia a la inicial
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