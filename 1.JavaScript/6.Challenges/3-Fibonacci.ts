// 1. Recursivity
// 2**(n)

function recursiveFibonacci(n: number): number {
    console.log('calculando Fibo', n);
    if (n <= 1) {
        return n;
    } else {
        return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
    }
}

console.log(recursiveFibonacci(5));

// 2. Dynamic Programming (DP) Using memoization
// O(n)

let memo: number[] = [];
function memoizeFibonacci(n: number, memo: number[]): number {
    console.log(memo);
    if (memo[n] !== undefined) return memo[n];
    if (n <= 1) {
        memo[n] = n;
        return n;
    } else {
        let result = memoizeFibonacci(n - 1, memo) + memoizeFibonacci(n - 2, memo);
        memo[n] = result;
        return result;
    }
}

console.log(memoizeFibonacci(50, memo));

// 3. Stand Up
// Linear

function linearFibonacci(n: number): number {
    let memo = [0, 1];
    for (let actual = 2; actual <= n; ++actual) {
        memo[actual] = memo[actual - 2] + memo[actual - 1]
    }
    return memo[n];

}

console.log(linearFibonacci(10000));