let mensajeEncriptado = [];
let codigoDesencriptado = ['a', 'e', 'i', 'o', 'u'];
let codigoEncriptado = ['ai', 'enter', 'imes', 'ober', 'ufat']

let dibujo = document.querySelector(".contenedordibujo");
let contenedor = document.querySelector(".contenedor-parrafo");
let resultado = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".btn-copiar"); 

function desencriptador(){
    mensajeEncriptado = document.querySelector(".cajatexto").value;
    ocultarImagen();
    let captura = [''];
    let longitud = 0;
    let seudoCadena = [''];

    for (let buscaIndice = 0; buscaIndice < mensajeEncriptado.length; buscaIndice++) {
        if(mensajeEncriptado[buscaIndice]=='a'||mensajeEncriptado[buscaIndice]=='e'||mensajeEncriptado[buscaIndice]=='i'||mensajeEncriptado[buscaIndice]=='o'||mensajeEncriptado[buscaIndice]=='u'){
            [captura, longitud] = queCodigoEsParaDesencriptar(mensajeEncriptado[buscaIndice], buscaIndice);
            if(mensajeEncriptado.length>1){
                seudoCadena = seudoCadena + captura;
                buscaIndice+=longitud;
            }else{
                seudoCadena = captura;
                buscaIndice+=longitud;
            }
        }else{
            seudoCadena = seudoCadena + mensajeEncriptado[buscaIndice];
        }
    }
    resultado.textContent = seudoCadena;
}

function queCodigoEsParaDesencriptar(letra, indice){
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

function encriptador(){
    mensajeEncriptado = document.querySelector(".cajatexto").value;
    ocultarImagen();
    let captura = [''];
    let seudoCadena = [''];

    for (let buscaIndice = 0; buscaIndice < mensajeEncriptado.length; buscaIndice++) {
        if(mensajeEncriptado[buscaIndice]=='a'||mensajeEncriptado[buscaIndice]=='e'||mensajeEncriptado[buscaIndice]=='i'||mensajeEncriptado[buscaIndice]=='o'||mensajeEncriptado[buscaIndice]=='u'){
            captura = queCodigoEsParaEncriptar(mensajeEncriptado[buscaIndice]);
            if(mensajeEncriptado.length>1){
                seudoCadena = seudoCadena + captura;
            }else{
                seudoCadena = captura;
            }
        }else{
            seudoCadena = seudoCadena + mensajeEncriptado[buscaIndice];
        }
    }
    resultado.textContent = seudoCadena;
}

function queCodigoEsParaEncriptar(letra){
    for(let iter=0;iter<codigoDesencriptado.length;iter++){
        if(codigoDesencriptado [iter]==letra){
            return codigoEncriptado [iter];
        }
    }
}


btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    }
)


function ocultarImagen(){
    dibujo.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}