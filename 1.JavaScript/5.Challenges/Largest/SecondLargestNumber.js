arr = [10, 20, 40, 30, 80, 90]

function getSecondLargest(arr) {
    // sorts in descending numerical order, then index the second one
    return arr.sort((n1, n2) => n2 - n1)[1];
}

console.log(getSecondLargest(arr))

/// ES6
// makes array of unique entries
const getSecondLargest2 = numArr => Array.from(new Set(numArr))
    // sorts in descending numerical order, then index the second one
    .sort((a, b) => b - a)[1];

console.log(getSecondLargest2([8, 7, 9, 4, 5, 6, 3, 2.10, 22, 42, 101]))