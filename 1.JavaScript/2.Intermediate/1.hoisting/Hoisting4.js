var variable = 10;
(() => {
  console.log(variable);
  var variable = 20;
  console.log(variable);
})();

console.log(variable);
var variable = 30
// The output should be printed in the following order: 10, 20, 20.

var variable = 10;
(() => {
  variable_3 = 35;
  console.log(variable_3); // 35
  var variable_3 = 45; // Aquires Local Scope
  variable_2 = 15; // Aquires Global Scope
  console.log(variable); // 10
})();

console.log(variable_2); // 15
console.log(variable_3); // Undefined
var variable = 30;

// The expected output should be in this order: 35, 10, 15,
// and an error saying "variable_3 is not defined".
