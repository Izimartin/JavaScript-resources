function longitudFinal(str) {
    let contador = 0;
    let longitud = 0;

    for (let i = 0; i < str.length; i++) {
        contador++;
        if ((i + 1) >= str.length || str.charAt(i) != str.charAt(i + 1)) {
            longitud += 1 + contador.toString().length;
            contador = 0;
        }
    }
    return longitud;
}

function comprimir(str) {
    let lFinal = longitudFinal(str);
    if (lFinal >= str.length) return str;

    let resultado = '';
    let contador = 0;


    for (let i = 0; i < str.length; i++) {
        contador++;

        if ((i + 1) >= str.length || str.charAt(i) != str.charAt(i + 1)) {
            resultado += str.charAt(i);
            resultado += contador;
            contador = 0;
        }
    }
    return resultado;
}
console.log(comprimir('aaakkkfffg'));
console.log(comprimir('aaakkkfffgaakkf'));