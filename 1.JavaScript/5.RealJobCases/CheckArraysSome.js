const array = [1, 2, 3, -10, 5, 6];

const isThereAnyLessThanZero = array.some(function(valor) {
    return valor < 0
});

console.log(isThereAnyLessThanZero);

// or 

const islessThanZero = valor => valor < 0;

const isThereAnyLessThanZeroArrow = array.some(islessThanZero);

console.log(isThereAnyLessThanZeroArrow);

// realistic example


const users = [
    { name: 'Fabian', age: 23 },
    { name: 'Maria', age: 17 },
    { name: 'Carlos', age: 18 },
    { name: 'Stephanie', age: 22 },
    { name: 'Marco', age: 25 },
];

const moreThan18 = user => user.age > 18;
const anyAdult = users.some(moreThan18);

console.log(anyAdult);