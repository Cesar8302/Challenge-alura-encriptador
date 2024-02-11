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
    let longitud = 0;
    let seudoCadena = [''];

    for (let buscaIndice = 0; buscaIndice < mensajeEncriptado.length; buscaIndice++) {
        if(mensajeEncriptado[buscaIndice]=='a'||mensajeEncriptado[buscaIndice]=='e'||mensajeEncriptado[buscaIndice]=='i'||mensajeEncriptado[buscaIndice]=='o'||mensajeEncriptado[buscaIndice]=='u'){
            [captura, longitud] = queCodigoEs(mensajeEncriptado[buscaIndice], buscaIndice);
            console.log(typeof captura);
            console.log(typeof longitud);
            /*if(mensajeEncriptado.length>1){
                seudoCadena = seudoCadena + captura[0];
                buscaIndice+=captura.length;
            }else{
                seudoCadena = captura[0];
                buscaIndice+=captura.length;
            }*/
            
        }/*else{
            seudoCadena = seudoCadena + mensajeEncriptado[buscaIndice];
        }*/
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
    console.log(cadena);
    for (let caracter = 0; caracter < cadena.length; caracter++, indice++) {
        cadenaEnviada = cadenaEnviada + mensajeEncriptado[indice];    
        
    }
    console.log(iterindice);
    console.log(cadenaEnviada);
    console.log(cadenaEnviada==cadena);
    if (cadena==cadenaEnviada){
        return [codigoDesencriptado[iterindice], cadena.length];
    }else{
        return ['no',0];
    }
}