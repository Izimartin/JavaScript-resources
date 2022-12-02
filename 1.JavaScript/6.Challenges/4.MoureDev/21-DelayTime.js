function asyncSum(numberOne, numberTwo, seconds, result) {
    sleep(seconds * 1000);
    result(numberOne + numberTwo);
}

console.log(asyncSum(5, 2, 10));
console.log(asyncSum(1, 3, 5));