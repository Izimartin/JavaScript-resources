//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
//Object literals
const person = {
  alive: true,
};
const musician = {
  plays: true,
  instruments: {
    guitar: true,
    bass: true,
    drums: true,
  },
};

// JS now has getPrototypeOf() and setPrototypeOf() methods instead of using __proto__
Object.setPrototypeOf(musician, person);
console.log("musician protype");
console.log(Object.getPrototypeOf(musician));
console.log(musician.plays);
console.log(musician.instruments);
console.log("person protype");
console.log(person.alive);

//Extending the prototype chain => general to specific to more specific

const guitarist = {
    strings: 6,
    __proto__: musician
}

console.log("guitarist protype");
console.log(guitarist.alive);
console.log(guitarist.plays);
console.log(guitarist.instruments);
console.log(guitarist);

//No cirular references allowed