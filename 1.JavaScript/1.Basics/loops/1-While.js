// while - loops through a block of code while a specified condition is true

// while (condition) {
//     // lines of code to be executed
// }

// The “while loop” is executed as long as the specified condition is true.
// Inside the while loop, you should include the statement that will end the loop at some point in time. 
// Otherwise, your loop will never end, and your browser may crash.

index = 0;
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

while (index < array.length) {
    console.log(array[index]);
    index++;
}
// OUTPUT
// 1 2 3 4 5 6 7 8 9 10

