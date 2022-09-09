// for - loops through a block of code a number of times

// for (statement1; statement2; statment3) {
// lines of code to be executed
// }

// Statement1 is executed first, even before executing the looping code. 
// So, this statement is normally used to assign values to variables used inside the loop.
// The statement2 is the condition to execute the loop.
// The statement3 is executed every time after the looping code is executed.

const orders = [500, 30, 99, 15, 223];

// Bad code
function BadCode() {
    const total = 0
    const withTax = [];
    const highValue = [];

    for (i = 0; i < orders.length; i++) {
        total + orders[i];
        withTax.push(orders[i] * 1.1);
        if (orders[i] > 100) {
            highValue.push(orders[i]);
        }
    }
    console.log(total);
    console.log(withTax);
    console.log(highValue);
}

BadCode();

//Good Code

// Reduce
const total = orders.reduce((acc, curr) => acc + curr);
// Map
const withTax = orders.map(v => v * 1.1);
// Filter
const highValue = orders.filter(v => v > 100);

console.log('reduce:', total);
console.log('map:', withTax);
console.log('filter:', highValue);

// Example 2

var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");
document.write("<b>Using for loops </b><br />");
for (i = 0; i < students.length; i++) {
    document.write(students[i] + "<br />");
}