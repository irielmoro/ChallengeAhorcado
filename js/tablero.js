//TABLERO LETRAS
var tableroLetras = document.querySelector("#tablero-letras");
var tableroIncorrecto = document.querySelector('#tablero-letras-incorrectas');
var adivinado = [];
var errado = [];
var estado = 0;
var anterior = 0;

function crearGuion(colocarLetra){
    var letra = document.createElement("span");
    letra.setAttribute("class", "letra");
    if (adivinado.indexOf(colocarLetra) >= 0) {
        letra.innerHTML = colocarLetra;
    } else {
        letra.innerHTML = '';
    }
    return letra;
}


function mostrarGuiones(palabra){
   // limpiamos el tablero
    let letras = tableroLetras.querySelectorAll('.letra');
    // eliminas las letras antiguas
    for (let letra of letras) {
        tableroLetras.removeChild(letra);
    }

   // agregas las nuevas letras
   for(let i of palabra){
        let guion = crearGuion(i);
        tableroLetras.appendChild(guion);
   }
}

function mostrarLetrasIncorrectas() {
    tableroIncorrecto.innerHTML = '';
    for (let letra of errado) {
        let span = document.createElement('span');
        let txt = document.createTextNode(letra);
        span.setAttribute('class', 'letra-incorrecta');
        span.appendChild(txt);
        tableroIncorrecto.appendChild(span);
    }
}

function actualizarImagen() {
    if (anterior != undefined) {
        var img = document.getElementById('horca-' + anterior);
        // ocultamos la imagen anterior
        img.classList.add('invisible');
    }

    // mostramos la nueva imagen
    img = document.getElementById('horca-' + estado);
    img.classList.remove('invisible');
}

function verificarLetra(event){
    var teclaPresionada = event.key.toUpperCase();
    if (!(/[A-ZÑ]/.test(teclaPresionada))) {
        return;
    }

    // si ya se ha ganado o ya se ha perdido, no hacemos nada
    if (estado === "lost" || estado === "win") {
        return;
    }

    /* Si la letra ya la ha adivinado, o bien ya la ha errado */
    if (adivinado.indexOf(teclaPresionada) >= 0 ||
        errado.indexOf(teclaPresionada) >= 0) {
        return
    }

    /* Si la letra está en la palabra, agregamos la letra a la lista de letras adivinadas */
    if (palabra.indexOf(teclaPresionada) >= 0) {
        adivinado.push(teclaPresionada)
        let ganado = true
        for (let letra of palabra) {
            if (adivinado.indexOf(letra) < 0) {
                ganado = false
                break
            }
        }
        if (ganado) {
            anterior = estado
            estado = "win"
            setTimeout(juegoGanado, 0);
        }
    } else { /* Si no agregamos a la lista de letras erradas */
        anterior = estado++;
        errado.push(teclaPresionada);
        if (estado === 8) {
            setTimeout(finDelJuego, 0);
        }
    }

    actualizarImagen(anterior)
    mostrarGuiones(palabra)
    mostrarLetrasIncorrectas()
}

function finDelJuego() {
    alert('Perdiste, la palabra correcta, era: ' + palabra)
    anterior = estado
    estado = "lost"
    actualizarImagen()
}

function juegoGanado() {
    alert('Felicidades, ganaste!')
}