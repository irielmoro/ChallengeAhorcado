//TABLERO LETRAS
var tableroLetras = document.querySelector("#tablero-letras");
var letra;


    
function crearGuion(colocarLetra){
    letra = document.createElement("span");
    letra.setAttribute("id", "letra");
    tableroLetras.appendChild(letra);
    letra.innerHTML = colocarLetra;
    letra.innerHTML = '';
    
 return letra;
}


function mostrarGuiones(palabra){
   for(let i of palabra){
       crearGuion(i)
   }
}

function verificarLetra(event){
   
    
    var teclaPresionada = event.key.toUpperCase(); 		
    /* var index = palabra.indexOf(teclaPresionada); */
    
        
       
    if(/[A-ZÑ]/.test(teclaPresionada)){
        console.log(teclaPresionada)

       /*  if(index!=-1){
            console.log(teclaPresionada + " found at " + index + " position.<br>");
           
        }else{
            console.log(teclaPresionada + " does not exist in the " + palabra + ".<br>");
        } */

        for(let l of palabra){
            if(teclaPresionada == l){
                console.log("CORRECTO!!: "+teclaPresionada)
            }else{
                console.log(teclaPresionada, "no se encuentra en ", palabra)
            }
        }
        
    }   
     
}



