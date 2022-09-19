function sum(a, b) {
    return a + b;
}

function some(f) {
    const fn = f;

    return (a) => {
        return (b) => {
            return fn(a, 10);
        }
    }
}

const c = some(sum);
// We're passing here the 1st parameter, useful for fixed values.
const c1 = c(20);
// We're passing here the 2nd parameter
console.log(c1(15));
console.log(c1(10));