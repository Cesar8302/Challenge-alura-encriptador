let mensajeEncriptado = [];
let codigo = [['a' , 'ai'],
            ['e' , 'enter'],
            ['i' , 'imes'],
            ['o' , 'ober'],
            ['u' , 'ufat']];
let codigoDesencriptado = ['a', 'e', 'i', 'o', 'u'];
let codigoEncriptado = ['ai', 'enter', 'imes', 'ober', 'ufat']


function capturaTexto(){
    mensajeEncriptado = document.querySelector(".msgEncriptado").value;
    let captura = [];
    
    for (let buscaIndice = 0; buscaIndice < mensajeEncriptado.length; buscaIndice++) {
        if(mensajeEncriptado[buscaIndice]=='a'||mensajeEncriptado[buscaIndice]=='e'||mensajeEncriptado[buscaIndice]=='i'||mensajeEncriptado[buscaIndice]=='o'||mensajeEncriptado[buscaIndice]=='u'){
        captura = queCodigoEs(mensajeEncriptado[buscaIndice]);
        console.log(captura);
             
        }
    }
}

function queCodigoEs(letra){
    for(let iter=0;iter<codigoDesencriptado.length;iter++){
        if(codigoDesencriptado [iter]==letra){
            return codigoDesencriptado [iter];
        }
    }
}
   