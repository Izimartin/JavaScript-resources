// A map applies a function over every element and then returns the new array.
index= 0;
array = [1,2,3,4,5,6,7,8,9,10];

square = x => Math.pow(x, 2);
squares = array.map(square);
console.log(array);
console.log(squares);

// OUTPUT
// 1 2 3 4 5 6 7 8 9 10