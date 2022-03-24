function greet(message) {
    console.log(message);
}
function greeter(name, age) {

    return name + " says howdy!! He is " + age + " years old";
}
// Generate the message
var message = greeter("James", 23);
// Pass it explicitly to greet
greet(message);
// This function can be better represented by using closures
function greeter(name, age) {
    var message = name + " says howdy!! He is " + age + " years old";
    return function greet() {
        console.log(message);
    };
}
// Generate the closure
var JamesGreeter = greeter("James", 23);
// Use the closure
JamesGreeter();