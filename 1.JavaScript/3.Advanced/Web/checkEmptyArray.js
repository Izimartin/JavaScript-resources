//If need to find out if it is an array

myArray = "Brealy"

console.log(myArray && myArray.length ? true : false);
console.log(myArray.length ? true : false);

console.log(Array.isArray(myArray));
// So if you're unsure
myArray = [{ "id": 1 }];
// or to check for a property also...
console.log(Array.isArray(myArray) && myArray ? .[0] ? .id ? true : false);
console.log(Array.isArray(myArray) && myArray ? .[0] ? .name ? true : false);