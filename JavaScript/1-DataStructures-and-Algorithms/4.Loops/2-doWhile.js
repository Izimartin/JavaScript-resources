do {

    // block of code to be executed

} while (condition)
// The do…while loop is very similar to the while loop. 
// The only difference is that in do…while loop, 
// the block of code gets executed once even before checking the condition.

document.write("<b>Using while loops </b><br />");
var i = 0, j = 1, k;
document.write("Fibonacci series less than 40<br />");
while (i < 40) {
    document.write(i + "<br />");
    k = i + j;
    i = j;
    j = k;
}