// without recursion
const fibonacciPos = (pos) => {
    if (pos <= 1) return pos;
    const seq = [0, 1];
    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast, last);
    }
    return seq[pos];
}
console.log(fibonacciPos(8));

// with recursion
const fibPos = (pos) => {
    if (pos < 2) return pos;
    return fibPos(pos - 1) + fibPos(pos - 2);
}
console.log(fibPos(8));

// with recursion and ternary

const fibPosTernary = pos => pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2);

console.log(fibPosTernary(8));