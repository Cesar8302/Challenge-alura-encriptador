function todoEsMinusculas(campo = document.getElementById("caja-input")) {
    var regex = /^[a-z \n]+$/; // Expresión regular para verificar si el campo contiene solo letras minúsculas, espacios y saltos de línea
    if (regex.test(campo.value)) { // Verifica si el valor del campo coincide con la expresión regular
        return true; // Retorna verdadero si la validación es exitosa
    } else {
        return false; // Retorna falso si la validación falla
    }
}