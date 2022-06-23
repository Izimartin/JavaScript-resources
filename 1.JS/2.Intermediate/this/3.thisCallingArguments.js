var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  },
};
object.method(callback, 1, 2);

// 3 is logged to console.

// obj.method(callback, 1, 2) is invoked with 3 arguments: callback, 1 and 2. As result the arguments special variable inside method() is an array-like object of the following structure:

// {
//   0: callback,
//   1: 1, 
//   2: 2, 
//   length: 3 
// }
// Because arguments[0]() is a method invocation of callback on arguments object, this inside the callback equals arguments. As result this.length inside callback() is same as arguments.length — which is 3.