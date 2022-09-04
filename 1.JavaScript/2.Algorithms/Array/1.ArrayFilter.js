const array = [1, 2, -3, 4, 5, -6];

// const filtrado = array.filter(function (valor) {
//     return valor > 0;
// })

const valoresPositivos = (valor) => valor > 0;

const filtrado = array.filter(valoresPositivos);

console.log(array)
console.log(filtrado)

