const array1 = [1, 2, 3, 4, 5];

const array2 = [2, 2, 4, 4];

function isPair(valor) {
    return valor % 2 === 0;
}

const pairNumber1 = array1.every(isPair)
console.log(pairNumber1);

const pairNumber2 = array2.every(isPair);
console.log(pairNumber2);



