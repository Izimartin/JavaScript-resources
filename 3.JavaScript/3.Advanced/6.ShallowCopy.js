// Shallow copy vs Deep copy
const yArray = [9, 2, 3, 4]
const xArray = []

//  Shallow copy
// with spread operator 
const zArray = [...yArray, 10];
console.log('Spread Operator:', zArray);
console.log('Spread Operator:', yArray);

console.log(xArray === yArray);
console.log(yArray === zArray);

// With Object Assign
const tArray = Object.assign([], zArray);
console.log('Object.Assign():', tArray);
console.log(tArray === zArray);

// But if there are nested arrays or objects...
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray);
vArray[4].push(5);
console.log(vArray);
console.log(yArray);
// Nested  structural data types still share a reference! 

// Note: Array.from() and slice() create shallow copies, too.