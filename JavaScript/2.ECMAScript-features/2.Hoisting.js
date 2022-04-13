// 1.Hoisting
// Hoisting is my favorite topic to understand the analytical ability of the interviewee. Just consider this example.

console.log('bar:', bar);
bar = 15;
var foo = 1;
console.log("foo:", foo, "bar:", bar);
var bar;

// The output is simple. The first console-log should print undefined and the second console-log should print "foo:1  bar:15". 
// Here, I do observe how the candidate approaches the problem. Someone who has a profound knowledge of how hoisting works can explain this precisely.
// Let's have a look at another example.

greetings();
var greetings = function () {
    console.log("1st Greetings!");
};

greetings();
function greetings() {
    console.log("2nd Greetings!");
};

greetings();

// The output should be shown in this order: Second greetings, First greetings, First greetings. 
// Everyone gets confused with the third output as it has the tricky part.

// There are a few more examples that I would love to share. Let's take this question first.

var variable = 10;
(() => {
    console.log(variable);
    var variable = 20;
    console.log(variable);
})();

console.log(variable);
var variable = 30;

// I know, this is a simple question with a straightforward answer. 
// The output should be printed in the following order: 10, 20, 20. 
// If the interviewee is able to give the answer, I just make a small tweak in the code and ask for the output again.

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

// Now, it is tricky. 
// The expected output should be in this order: 35, 10, 15, and an error saying "variable_3 is not defined". 
// How? Find the answer yourself!

