const array = [1, 2, [3, 4],
    [5, [6]],
    [
        [7]
    ]
];

const flatten = array.flat(2);

console.log(flatten);
console.log(array);