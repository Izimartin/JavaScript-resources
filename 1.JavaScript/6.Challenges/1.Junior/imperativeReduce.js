let numbers = [3, 4, 1, 11, 7, 60];

Array.prototype.EvilReduce = function (f, init) {
    let result = init ? init : 0;

    for (let i = 0; i < this.length; i++) {
        // Actual iteration element based in the parameter
        result = f(result, this[i]);
    }
    return result;
}

let numbersReduce = numbers.EvilReduce((acc, e) => acc+e);
console.log(numbersReduce)