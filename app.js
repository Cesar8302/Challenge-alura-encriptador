let mensajeEncriptado = [];
let codigo = [['a' , 'ai'],
            ['e' , 'enter'],
            ['i' , 'imes'],
            ['o' , 'ober'],
            ['u' , 'ufat']];


function cortaPalabra(posicion, mensajeCompleto, codigo){
    let palabraCortadaIzquierda = [];
    let palabraCortadaDerecha = [];
    let inicio = 0;

    for (inicio; inicio < posicion; inicio++) {
        palabraCortadaIzquierda = palabraCortadaIzquierda + mensajeCompleto[inicio];        
    }
    for (posicion+1; posicion < mensajeCompleto.length; posicion++) {
        palabraCortadaDerecha = palabraCortadaDerecha + mensajeCompleto[posicion];
    }
    /*console.log(palabraCortadaIzquierda);
    console.log(palabraCortadaDerecha);*/

}

function encriptar (letra){
    /*console.log(letra);
    console.log(posicion);*/

    for(let iter=0;iter<codigo.length;iter++){
        if(codigo[iter][0]==letra){
            return codigo[iter][1];
        }
    }
}

function capturaTexto(){
    mensajeEncriptado = document.querySelector(".msgEncriptado").value;
    let captura = [];  

    for (let inicio = 0; inicio < mensajeEncriptado.length; inicio++) {
        if(mensajeEncriptado[inicio]=='a'||mensajeEncriptado[inicio]=='e'||mensajeEncriptado[inicio]=='i'||mensajeEncriptado[inicio]=='o'||mensajeEncriptado[inicio]=='u'){
            captura = encriptar(mensajeEncriptado[inicio]);
            cortaPalabra(inicio,mensajeEncriptado);
           /* console.log(captura); 
            console.log(mensajeEncriptado); */
         }          
   }
/* for (let i = 0; i < codigo.length; i++) {
        for (let j = 0; j < 2; j++) {
            console.log(codigo[i][j]);            
        }
    }     /*comprobar matriz codigo*/
    /*console.log(mensajeEncriptado);
    console.log(codigo);*/
    
}
