let num = 0;

const matrix = new Array(10).fill("")
    .map(() => new Array(10)
        .fill(0)
        .map(() => new Array(10)
            .fill("")
            .map(() => num++)));

console.log(matrix);
console.log(matrix[6][6][6]);

// factorial

const factorial = (n, a = 1) => new Array(n)
    .fill("basura")
    .map(() => a++)
    .reduce((ac, number) => ac * number, 1);

console.log(factorial(5));
