// Destructuring

const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphibian',
    meal: '10',
    diet: 'berries',
}
// Bad Code
function feed({name, meal, diet, }){
console.log("Bad code example")
return `Feed ${animal.name} with ${animal.diet} ${animal.meal}`
}

// Good Code
function feed({name, meal, diet }) {
    console.log("Good code example")
    return `Feed ${name} with ${diet} ${diet}`;
}

// or
function feed(animal) {
    const { name, diet, meal } = animal;
    console.log("2nd Good code example")
    return `Feed ${name} with ${diet} ${meal}`;

}

// Swap Value Destructuring
// Swapping values of two variables using destructuring
// Destructuring is a useful syntactical sugar that helps to reduce LOC that makes it a crucial topic in interview discussion.
// I usually don't ask direct questions on how to do array or object destructuring or what are the pros and cons of this. Instead, I ask the interviewee to write a code for swapping values of two variables using destructuring.
// I know it's a bit puzzling. Though, the code is pretty simple as follows.
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);
