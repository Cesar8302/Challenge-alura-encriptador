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

    inicio = inicio+1;

    for (inicio; inicio < mensajeCompleto.length; inicio++) {
        palabraCortadaDerecha = palabraCortadaDerecha + mensajeCompleto[inicio];
    }
    console.log(palabraCortadaDerecha);
    console.log(palabraCortadaIzquierda);
    mensajeEncriptado = palabraCortadaIzquierda + codigo + palabraCortadaDerecha;
    return codigo.length;
}

function encriptar (letra){
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
            inicio = inicio + cortaPalabra(inicio, mensajeEncriptado, captura);
            console.log(mensajeEncriptado); 
        }          
   }

    /*for (let inicio = 0; inicio < mensajeEncriptado.length; inicio++) {
            if(mensajeEncriptado[inicio]=='a'||mensajeEncriptado[inicio]=='e'||mensajeEncriptado[inicio]=='i'||mensajeEncriptado[inicio]=='o'||mensajeEncriptado[inicio]=='u'){
                captura = desencriptar(mensajeEncriptado[inicio]);
            }   
        }**/
}

   function desencriptar(letra){
        for(let iter=0;iter<codigo.length;iter++){
            if(codigo[iter][0]==letra){
                return codigo[iter][1];
            }
        }
   }
