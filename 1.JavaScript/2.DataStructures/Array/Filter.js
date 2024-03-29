const array = [-1, 1, 2, -3, 4, 5, -6];

const valoresPositivos = (valor) => valor > 0;
const filtrado = array.filter(valoresPositivos);

console.log("Original:", array)
console.log("valoresPositivos:", filtrado)

function filterEvens(array) {
    // declare variable newArray that will filt numbers that can be divided by 2.
    const newArr = array.filter(item => item % 2 === 0);
    return newArr;
}
// using the function filterEvens() to define the value of the array inside []
console.log("filterEvens:", filterEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 