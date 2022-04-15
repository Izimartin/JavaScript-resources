// Difference between object creation by Object constructor and Object.create()
// JavaScript supports prototypical object orientation. Moreover, it has opened up many ways to create an object. 
// The fundamental knowledge on the same, when to use which approach and understanding related shortcomings of each approach, that awareness is required for every JavaScript developer. 
// Though it is a theoretical question that could have been dragged in many directions to deep dive into details.
// Theoretically, the object created by the Object constructor inherits from the constructor's prototype. Additionally, it runs the constructor function as well.
// On the other hand, Object.create() builds an object that inherits directly from the one passed as its first argument. It doesn’t have any constructor to run.
// Closure cannot be created as it follows the functional syntax.
// To explain the difference, you could refer to the below example.

function ObjectConstructorExample() {
    this.foo = 'Object constructor foo';
}

const obj = new ObjectConstructorExample();

const obj1 = Object.create({
    foo: 'Object create foo from obj1'
})
console.log(obj);
console.log(obj1);

// You could clearly see, there is no constructor to run in obj1, unlike obj. 
// Also, foo is not a direct property of the obj1 object. It comes as its prototype's property. 
// All these could be explained in detail. There is another question that can be asked related to Object.create() and the delete operator. 
// Please refer to this code.

var person = Object.create({
    name: 'Brealy Padron',
    height: '5.3'
});

delete person.name;
// delete person.height;
console.log(person.name);
// console.log(person.height);

// If you think, undefined is the answer then you have been fooled by Object.create() function.
// The delete operator indeed removes a property from an object.
// But if the object inherits the property you're trying to delete, rather than having its own property with that name, delete won't work.
// In this context, as I mentioned above, height is not a direct property of the person object rather it's a property of its prototype.