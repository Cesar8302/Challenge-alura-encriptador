let mensajeEncriptado = [];
let codigoDesencriptado = ['a', 'e', 'i', 'o', 'u'];
let codigoEncriptado = ['ai', 'enter', 'imes', 'ober', 'ufat']


function capturaTexto(){
    mensajeEncriptado = document.querySelector(".msgEncriptado").value;
    let captura = [''];
    let longitud = 0;
    let seudoCadena = [''];

    for (let buscaIndice = 0; buscaIndice < mensajeEncriptado.length; buscaIndice++) {
        if(mensajeEncriptado[buscaIndice]=='a'||mensajeEncriptado[buscaIndice]=='e'||mensajeEncriptado[buscaIndice]=='i'||mensajeEncriptado[buscaIndice]=='o'||mensajeEncriptado[buscaIndice]=='u'){
            [captura, longitud] = queCodigoEs(mensajeEncriptado[buscaIndice], buscaIndice);
            if(mensajeEncriptado.length>1){
                seudoCadena = seudoCadena + captura;
                buscaIndice+=longitud;
            }else{
                seudoCadena = captura;
                buscaIndice+=longitud;
            }
            console.log(seudoCadena); 
        }else{
            seudoCadena = seudoCadena + mensajeEncriptado[buscaIndice];
        }
    }
    console.log(seudoCadena);
}
/*correcto*/
function queCodigoEs(letra, indice){
    let cadena = [''];
    let cadenaEnviada = [''];
    let iterindice = 0;
    for(let iter=0;iter<codigoDesencriptado.length;iter++){
        if(codigoDesencriptado [iter]==letra){
            cadena = codigoEncriptado [iter];
            iterindice=iter;
        }
    }
    
    for (let caracter = 0; caracter < cadena.length; caracter++, indice++) {
        cadenaEnviada = cadenaEnviada + mensajeEncriptado[indice];        
    }
    if (cadena==cadenaEnviada){
        return [codigoDesencriptado[iterindice], cadena.length-1];
    }else{
        return ['',0];
    }
}