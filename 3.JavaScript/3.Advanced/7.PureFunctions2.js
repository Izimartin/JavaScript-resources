// No side effects 

// This also means  accesing the scope outside
// the function makes it impure 
const z = 5;
const sum = (x, y) = x + y + z;
console.log(sun(2, 2));

// Pure functions cannot: 
// Access a database, API, file system, storage, etc.
// Modify the DOM
// or even log to the console

// That said, clearly "impure" functions necessary
// but they are harder to test and debug