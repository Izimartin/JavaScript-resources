// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

let x = 100;

function logx() {
  console.log(x);
}
// accessing x from the function thought scope
console.log("Beautifull closure 1 result:");
logx();
function MakeAdder(z) {
  return function (y) {
    return z + y;
  };
}
// accessing z from the function thought scope
const add5 = MakeAdder(5);

// accessing y from the function thought scope and print the result
console.log("Beautifull closure 2 result:", add5(10));

// Lexical Scoping

function init() {
  var name = "Brealy"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
        console.log("Name: " + name);  // use variable declared in the parent function
  }
  displayName();
}
init();

// Closure


function makeFunc() {
  var lastname = "Padron";
  function displayName() {
    console.log('Lastname: ' + lastname);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
