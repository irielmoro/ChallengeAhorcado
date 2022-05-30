//logica implentada con la colaboracion de mi compañero Eduen Sarceno

var tableroLetras = document.querySelector("#tablero-letras");
var tableroIncorrecto = document.querySelector("#tablero-letras-incorrectas");
var adivinado = [];
var errado = [];
var estado = 0;
var anterior = 0;
  
function crearGuion(colocarLetra){
    var letra = document.createElement("span");
    letra.setAttribute("class", "letra");
    if (adivinado.indexOf(colocarLetra) >= 0){
        letra.innerHTML = colocarLetra;
    }else{
        letra.innerHTML = '';
    }
    
 return letra;
}


function mostrarGuiones(palabra){
    //limpiar el tablero
    var letras = tableroLetras.querySelectorAll(".letra");

    //eliminar las letras anteriores
    for(let letra of letras){
       tableroLetras.removeChild(letra);
    }

    //agregar las letras nuevas
    for(let i of palabra){
        var guion = crearGuion(i);
        tableroLetras.appendChild(guion);
    }
}

function mostrarLetrasIncorrectas(){
    tableroIncorrecto.innerHTML = '';
    for (let letra of errado) {
        let span = document.createElement('span');
        let txt = document.createTextNode(letra);
        span.setAttribute('class', 'letra-incorrecta');
        span.appendChild(txt);
        tableroIncorrecto.appendChild(span);
    }
}

function actualizarImagen(){
    if(anterior != undefined){
        var img = document.getElementById('horca-' + anterior);

        //ocultar img anterior
        img.classList.add('invisible');
    }
    //mostrar nueva img
    img = document.getElementById('horca-' + estado);
    img.classList.remove('invisible');
}

function verificarLetra(event){
   
    
    var teclaPresionada = event.key.toUpperCase(); 		  
       
    if(!(/[A-ZÑ]/i.test(teclaPresionada))){
        return;      
    } 
    
    if (estado === "lost" || estado === "win") {
        return;
    }
    //evitar mostrar letras repetidas
    if (adivinado.indexOf(teclaPresionada) >= 0 ||
        errado.indexOf(teclaPresionada) >=0) {
        
        return;
    }
    //agregar si la letra la adivino
    if (palabra.indexOf(teclaPresionada) >=0) {
        adivinado.push(teclaPresionada);

        var ganado = true;
        //verificar si cada letra de la palabra fue adivinada
        for(let letra of palabra){
            //si dicha letra no es parte del array de letras adivinadas:
            if (adivinado.indexOf(letra) < 0) {
               ganado = false; 
               break;
            }
        }

        //si adivino toda, gana
        if (ganado){
            anterior = estado;
            estado = "win";
        }

    }else{  //si no, agregar las letras incorrectas
            anterior = estado++;
            errado.push(teclaPresionada);
    
            if(estado === 8){
                setTimeout(finDelJuego, 0);
            }
        }


    actualizarImagen(anterior);
    mostrarGuiones(palabra);
    mostrarLetrasIncorrectas();    
}

function finDelJuego(){
    anterior = estado;
    estado = "lost";
    actualizarImagen();
}




