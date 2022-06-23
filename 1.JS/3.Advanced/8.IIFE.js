// REASON 1 Doesnt polute the global object namespace
// Global
const x = "whataever";
const helloWorld = () => "Hello World!";

//isolate declarations within the functions
(() => {
    const x = "IIFE whataever";
    const helloWorld = () => "Hello IIFE!";
    console.log(x);
    console.log(helloWorld());
})();

console.log(x);
console.log(helloWorld());

// REASON 2 
console.log("Reason 2")

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credits(s).`);
    return () => {
        counter++;
        credits(counter);
    }
})();

increment();
increment();

// REASON 3 Private Variables and Methods from Closure
console.log("Reason 3")

const Score = (() => {
    let count = 0;

    return {
        current: () => { return count },
        increment: () => { count++ },
        reset: () => { count = 0 }
    }
})();

Score.increment();
console.log(Score.current());
Score.increment();
console.log(Score.current());
Score.reset();
console.log(Score.current());