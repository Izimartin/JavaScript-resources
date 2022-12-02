let numbers = [3, 4, 1, 11, 7, 60];

Array.prototype.EvilMap = function (f) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        // Actual iteration element based in the parameter
        let element = f(this[i]);
        newArray.push(element);
    }
    return newArray;
}

let numbersMap = numbers.EvilMap(e => e*2);
console.log(numbersMap)