// without recursion
const fibonacci = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    }
    return array;
}

console.log(fibonacci(12));

// with recursion
const fib = (num, array = [0, 1]) => {
    if (num <= 2) return array;
    const [nextToLast, last] = array.slice(-2);
    return fib(num - 1, [...array, nextToLast + last])
}

console.log(fib(12));