for (variablename in objectname)

{
// lines of code to be executed
}
var employee={first:"John", last:"Doe", department:"Accounts"};
var		details = "";
document.write("<b>Using for/in loops </b><br />");
for (var x in employee)
{
details = x + ": " + employee[x];
document.write(details + "<br />");
}