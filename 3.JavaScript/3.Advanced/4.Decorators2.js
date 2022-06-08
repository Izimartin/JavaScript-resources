// Using closure to log how many times a function is called
let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num)
}

const callCounter = (fn) => {
    let count = 0;

    return (...args) => {
        // write to logs, console, db, etc. The
        console.log(`sum has been called ${count += 1} times`);
        return fn(...args)
    }
}

sum = callCounter(sum);

console.log(sum(2, 3, 5));
console.log(sum(13, 8));
console.log(sum(100, 200));