var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  },
};
object.method(callback, 1, 2);


// 4 is logged to console.

// callback() is called using regular function invocation inside method(). Since this value during a regular function invocation equals the global object, this.length is evaluated as window.length inside callback() function.

// The first statement var length = 4, being in the outermost scope, creates a property length on the global object: window.length becomes 4.

// Finally, inside the callback() function this.length evaluates as window.length — 4 being logged to console.