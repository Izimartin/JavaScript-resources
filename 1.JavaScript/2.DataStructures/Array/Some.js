const array = [1, 2, 3, -10, 5, 6]
const hayAlgunValorMenorACero = array.some(valor => valor > 0)
const isLessThanZero = valor => valor < 0
const hayAlgunValorMenorACero2 = array.some(isLessThanZero)

const users = [
    { name: 'Brealy', age: 26 },
    { name: 'Fabian', age: 26 },
    { name: 'Sarah', age: 17 },
    { name: 'Karina', age: 20 }
]

const less18 = (user) => user.age < 15;
const anyAdult = users.some(less18);

console.log(hayAlgunValorMenorACero);
console.log(anyAdult)