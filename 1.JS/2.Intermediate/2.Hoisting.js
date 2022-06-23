// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

// let and const never hoists, only vars.

// One of the advantages of hoisting is that it lets you use a function before you declare it in your code.
catName1("Doomsday");

function catName1(name) {
console.log("Hoisting");
  console.log("My elder cat's name is " + name);
}

// Without hoisting you would have to write the same code like this:
function catName2(name) {
console.log("NO Hoisting");
  console.log("My youth cat's name is " + name);
}

catName2("Grogru");
