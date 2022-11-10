const object = {
  who: "World",
  greet() {
    return `Hello, ${this.who}!`;
  },
  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};
console.log(object.greet()); // What is logged?
console.log(object.farewell()); // What is logged?

// 'Hello, World!' and 'Goodbye, undefined!' are logged to console.

// When calling object.greet(), inside the method greet() this value equals object because greet is a regular function. Thus object.greet() returns 'Hello, World!'.

// But farewell() is an arrow function, so this value inside of an arrow function always equals this of the outer scope.

// The outer scope of farewell() is the global scope, where this is the global object. Thus object.farewell() actually returns 'Goodbye, ${window.who}!', which evaluates to 'Goodbye, undefined!'.