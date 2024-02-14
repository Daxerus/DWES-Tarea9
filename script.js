$(document).ready(function () {
    function actualizarEstilo() {
        var numColumnas = Math.floor($(window).width() / $('.contenedor').width());
        $('.contenedor .cuadro-texto').css({
            left: '100%', // Reinicia la posición
            right: 'auto',
        });
        $('.contenedor:nth-child(' + numColumnas + 'n) .cuadro-texto').css({
            left: 'auto',
            right: '100%',
        });
    }

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