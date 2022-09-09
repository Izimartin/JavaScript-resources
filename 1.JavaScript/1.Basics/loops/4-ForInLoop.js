// for..in loops over the properties of an object.
// It gives back a key on each iteration which can be used to get the value of that particular key.

var employee = { first: "John", last: "Doe", department: "Accounts" };
var details = "";
// document.write("<b>Using for/in loops </b><br />");
for (var x in employee) {
    details = x + ": " + employee[x];
    // document.write(details + "<br />");
    console.log(details)
}

// 2nd Example
var totn_colors = { primary: 'blue', secondary: 'gray', tertiary: 'white' };

for (var color in totn_colors) {
   console.log(totn_colors[color]);
}