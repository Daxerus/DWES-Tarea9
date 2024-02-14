<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DWES - Tarea 9</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <style>
        @import url(css\ reset.css);
        @import url(style.css);
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap')
    </style>

</head>

<body>
    <header>
        <img src="./img/rmlogo.png" alt="Rick and morty logo" id="logo">
    </header>
    <article>
        <?php
        // Peticion a la API que devuelve el JSON por POST
        $personajes_json = file_get_contents('https://rickandmortyapi.com/api/character');
        $personajes = json_decode($personajes_json);
        foreach ($personajes->results as $personaje) {
            echo '<div class="contenedor" onmouseover="imgFocus(this)" onmouseout="imgDeFocus(this)">';
            echo    '<img class="personaje-img" src="' . $personaje->image . '" alt="' . $personaje->name . '">';
            echo    '<div class="cuadro-texto">';
            echo        '<h2>' . $personaje->name . '</h2>';
            echo        '<p><bold>Species:</bold> ' . $personaje->species . '</p>';
            echo        '<p><bold>Gender:</bold> ' . $personaje->gender . '</p>';
            echo        '<p><bold>Type:</bold> ' . $personaje->type . '</p>';
            echo        '<p><bold>Status:</bold> ' . $personaje->status . '</p>';
            echo        '<p><bold>Origin:</bold> ' . $personaje->origin->name . '</p>';
            echo    '</div>';
            echo '</div>';
        }
        ?>
    </article>

    <script src="script.js"></script>
</body>

</html>