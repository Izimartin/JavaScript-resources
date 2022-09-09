// The every() method checks if all elements in an array pass a test (provided as a function).

index = 0;
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array2 = [1, 2, 3, 4];

const under_five = x => x < 5;

if (array.every(under_five)) {
    console.log("All numbers are less than 5");
} else {
    console.log("Not all numbers are less than 5");
}

// OUTPUT
// At least 5 elements are under than 5.

if (array2.every(under_five)) {
    console.log("All numbers are less than 5");
} else {
    console.log("Not all numbers are less than 5");
}

// OUTPUT
// All numbers are less than 5