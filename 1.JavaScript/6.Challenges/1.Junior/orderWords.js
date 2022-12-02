function solve(A, S) {
    let i = 0;
    let v = A[i];
    let res = '';

    while (v != 0) {
        res += S[i];
        i = v;
        v = A[i];
    }
    res += S[i];

    return res;
}

console.log(solve([3, 2, 0, 1], 'cdeo'));
console.log(solve([5, 2, 0, 1, 6, 4, 8, 3, 7], 'cdeenetpi')); 
