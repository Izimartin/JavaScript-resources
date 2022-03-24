// TThe some() method check if some array values pass a test.

var numbers = [45, 4, 9, 16, 25, 13];
var someOver18 = numbers.some(myFunction);

document.getElementById("demo").innerHTML = "TSome over 18 is" + someOver18;

function myFunction(total, value, index, array) {
    return value > 18;
}

//OUTPUT
// is true