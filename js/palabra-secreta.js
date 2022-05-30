var palabrasSecretas = ["PAPAS","FIDEOS","HISTORIA","GALLINA"];
var palabra = "";
var palabrasSorteadas = [];


function agregarPalabra(palabra){
    palabrasSecretas.push(palabra);  
}

function sortear(){
    var elementos = (palabrasSecretas.length - 1);
    var posicion = Math.round(Math.random()*elementos);
    palabra = palabrasSecretas[posicion];
}
function sortearPalabra(){
      
    sortear();
    var repetida = false;
    for(i = 0; i < palabrasSorteadas.length; i++){
        if(palabra == palabrasSorteadas[i]){
             repetida = true;
        }else{
            repetida = false;
        }
    }
    if(repetida == false){
        palabrasSorteadas.push(palabra);
    }
      
    if (repetida == true) {
        sortear();
    }
    
}

