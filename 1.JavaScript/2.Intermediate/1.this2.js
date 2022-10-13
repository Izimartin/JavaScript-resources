function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}
const cat = new Pet("Fluffy");

console.log(cat.getName()); // What is logged?

const { getName } = cat;

console.log(getName());

// 'Fluffy' and 'Fluffy' are logged to console.

// When a function is invoked as a constructor new Pet('Fluffy'), this inside the constructor function equals the constructed object.

// this.name = name expression inside Pet constructor creates name property on the constructed object.

// this.getName = () => this.name creates a method getName on the constructed object. And since the arrow function is used, this inside the arrow function equals to this of the outer scope — the constructor function Pet.

// Invoking cat.getName(), as well as getName(), returns the expression this.name that evaluates to 'Fluffy'.