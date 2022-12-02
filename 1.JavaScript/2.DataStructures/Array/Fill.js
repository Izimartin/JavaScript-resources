const array = [1, 1, 1, 1, 1, 1, 1, 1];

// array.fill(0)
// array.fill(undefined);
array.fill(0, 2, 5); //start, end, limit

console.log(array)

const myArray = new Array(20).fill(0);
// const myArray = new Array(20).fill(0).forEach(()=> console.log('Hi'));

console.log(myArray);
