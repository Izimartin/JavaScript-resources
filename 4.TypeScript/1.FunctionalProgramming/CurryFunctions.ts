const getTotal = (amount: number, tax: number) =>
    amount + (amount * tax)

// Curried with Closure
function getTotalCurry(t: number) {
    let tax: number = t;

    return (amount: number) =>
        amount + (amount * tax)
}

const getTotalCurry2 = (tax: number) =>
    (amount: number) =>
        amount + (amount * tax)

console.log("getTotal:", getTotal(100, 0.16));
console.log("getTotal:", getTotal(200, 0.16));
console.log("getTotal:", getTotal(300, 0.16));

const calc = getTotalCurry(0.16);
console.log("calc:", calc(100));
console.log("calc:", calc(200));
console.log("calc:", calc(300));

const calc2 = getTotalCurry2(0.16);
console.log("calc2:", calc2(100));
console.log("calc2:", calc2(200));
console.log("calc2:", calc2(300));

// Receives the parameters of the Curried Closure
console.log("getTotalCurry:", getTotalCurry(0.16)(100));
console.log("getTotalCurry:", getTotalCurry(0.16)(200));
console.log("getTotalCurry:", getTotalCurry(0.16)(300));

console.log("getTotalCurry2:", getTotalCurry2(0.16)(100));
console.log("getTotalCurry2:", getTotalCurry2(0.16)(200));
console.log("getTotalCurry2:", getTotalCurry2(0.16)(300));
