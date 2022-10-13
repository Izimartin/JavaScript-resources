const numbers = [2,3,5,1,9,8,3,3,2,3]
const number = 3;
let quantity = 0;

// imperative (how)
// how many time 3 repeats in the array
for (const n of numbers) {
    if( n === number){
        quantity++
    }
}

console.log(quantity);

// delarative functional (what)
// how many time 3 repeats in the array
let quantity2 = numbers.filter(n => n === number).length;

console.log(quantity2);

