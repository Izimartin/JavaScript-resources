function palindrome(str) {
    //  Paso 1.La primera parte es igual que la anterior
    var re = /[^A-Za-z0-9]/g; // or var re = /[\W_]/g;
    str = str.toLowerCase().replace(re, '');

    // Paso 2. Crea el bucle FOR
    var len = str.length; // var len = "A man, a plan, a canal. Panama".length = 30

    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) { // Siempre y cuando los caracteres de cada parte coincidad, el bucle FOR debera seguir.
            return false; // Cuando los caracteres ya no coinciden, false es regresado y salimos del bucle FOR.
        }

    }
    return true; // Ambas partes son estrictamente iguales, y regresa true => La cadena de texto es un palindromo.
}

console.log(palindrome("fuji"))
console.log(palindrome("ama"))