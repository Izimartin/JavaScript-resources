// do/while - also loops through a block of code while a specified condition is true

// do {
//     // block of code to be executed
// } while (condition)

// The do…while loop is very similar to the while loop. 
// The only difference is that in do…while loop, 
// the block of code gets executed once even before checking the condition.

let result = '';
let i = 0;

do {
    i = i + 1;
    result = result + i;
} while (i < 10);

console.log(result);
// expected result: "12345678910"