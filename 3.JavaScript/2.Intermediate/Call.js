const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName: "John",
    lastName: "Doe"
}
const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);
// This will return "Mary Doe"
person.fullName.call(person2);
console.log(person.fullName.call(person1));
console.log(person.fullName.call(person2));

// It can be used to invoke(call) a method with an owner object as an argument(parameter).
// With call(), an object can use a method belonging to another object.