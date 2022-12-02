var numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
var numeros2 = [1, 2, 3, 5, 6, 7, 8, 10];

console.log(numero_faltante(numeros, 10));
console.log(numeros_faltantes(numeros2, 10));

function numero_faltante(arreglo, n) {
    const esperado = n * (n + 1) / 2;
    var actual = 0;

    for (var i = 0; i < n - 1; i++) {
        actual += arreglo[i];
    }
    const faltante = esperado - actual;
    return faltante;
}

function numeros_faltantes(arreglo, n) {
    var temp = new Array(n);
    var faltantes = [];

    for (var i = 0; i < arreglo.length; i++) {
        temp[arreglo[i] - 1] = 1;
    }

    for (var i = 0; i < temp.length; i++) {
        if (temp[i] != 1) {
            faltantes.push(i + 1);
        }
    }
    return faltantes;
}