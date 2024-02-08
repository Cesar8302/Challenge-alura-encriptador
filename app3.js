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
    let captura = [''];
    let seudoCadena = [''];
    
    for (let buscaIndice = 0; buscaIndice < mensajeEncriptado.length; buscaIndice++) {
        if(mensajeEncriptado[buscaIndice]=='a'||mensajeEncriptado[buscaIndice]=='e'||mensajeEncriptado[buscaIndice]=='i'||mensajeEncriptado[buscaIndice]=='o'||mensajeEncriptado[buscaIndice]=='u'){
        captura = queCodigoEs(mensajeEncriptado[buscaIndice]);
        console.log(captura);
        seudoCadena = seudoCadena + captura;
        console.log(seudoCadena);
        }
        seudoCadena = seudoCadena + mensajeEncriptado [buscaIndice];
        console.log(seudoCadena);
    }
}

function queCodigoEs(letra){
    for(let iter=0;iter<codigoDesencriptado.length;iter++){
        if(codigoDesencriptado [iter]==letra){
            return codigoEncriptado [iter];
        }
    }
}
   