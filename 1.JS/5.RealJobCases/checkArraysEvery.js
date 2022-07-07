const array1 = [1, 2, 3, 4];

const array2 = [2, 2, 4, 4];

const arePairs = array1.every(function(valor) {
    // check pair number
    return valor & 2 === 0;
})

console.log(arePairs);

// or

function ispairNum(valor) {
    // check pair number
    return valor & 2 === 0;
}

const arePairs1 = array1.every(ispairNum);
const arePairs2 = array1.every(ispairNum);

console.log(arePairs1);
console.log(arePairs2);