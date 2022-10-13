let numbers = [3, 4, 1, 11, 7, 60];

Array.prototype.EvilFilter = function (f) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        // Actual iteration element based in the parameter
        if (f(this[i]))
            newArray.push(this[i])

    }
    return newArray;
}

let numbers2Filter = numbers.EvilFilter(e => e > 10);
console.log(numbers2Filter)