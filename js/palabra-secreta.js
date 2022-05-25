var palabrasSecretas = ["PAPAS", "CHOCOLAT"/* ,"FIDEOS","HISTORIA","GALLINA" */];
var palabra = "";
var palabrasSorteadas = [];


function agregarPalabra(palabra){
    palabrasSecretas.push(palabra);  
}

function sortear(){
    var elementos = (palabrasSecretas.length - 1);
    var posicion = Math.round(Math.random()*elementos);
    palabra = palabrasSecretas[posicion];
    console.log(palabra);
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
        console.log("*NO SE HA REPETIDO y se agrega:")
        console.log("*LISTA PALABRAS SORTEADAS: "+palabrasSorteadas);
    }
      
    if (repetida == true) {
        console.log("*PALABRA REPETIDA,se sortea de nuevo:")
        sortear();
    }
    
}

