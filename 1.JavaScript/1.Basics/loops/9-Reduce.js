// The reduce() method runs a function on each array element to produce (reduce it to) a single value
// The reduce() method does not reduce the original array.
var numbers = [45, 4, 9, 16, 25, 13];
var sum = numbers.reduce(myFunction);

document.getElementById("demo").innerHTML = "The syn is" + sum;

function myFunction(total, value, index, array) {
    return total + value;
}

//OUTPUT
// The Sum is 112