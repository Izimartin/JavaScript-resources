for (statement1; statement2; statment3) {

    // lines of code to be executed

}

// Statement1 is executed first, even before executing the looping code. 
// So, this statement is normally used to assign values to variables used inside the loop.
// The statement2 is the condition to execute the loop.
// The statement3 is executed every time after the looping code is executed.

var students = new Array("John", "Ann", "Aaron", "Edwin", "Elizabeth");
document.write("<b>Using for loops </b><br />");
for (i = 0; i < students.length; i++) {
    document.write(students[i] + "<br />");
}
