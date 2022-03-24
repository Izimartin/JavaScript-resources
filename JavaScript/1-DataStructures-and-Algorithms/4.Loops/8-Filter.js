// The filrer() method created a new array with aray elements that passes a test.

var numbers = [45, 4, 9, 16, 25, 13];
var over18 = numbers.filter(myFunction);

document.getElementById("demo").innerHTML = over18;

function myFunction(value, index array) {
    return value > 18;
}

//OUTPUT
//45, 25