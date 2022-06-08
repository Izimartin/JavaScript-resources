function Animal(species) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function() {
    return `A ${this.species} is walking.`;
};

const Bear = new Animal("bear")

console.log('species:', Bear.species);
console.log('walk:', Bear.walks());
//The prototype property  is where inheritable props and methods are.
console.log('__proto__:', Bear.__proto__);
console.log('prototype:', Animal.prototype);
console.log('bear', Bear);
console.log(Bear.__proto__ == Animal.prototype);
console.log(Bear.__proto__ == Animal.prototype && Bear.__proto__ === Animal.prototype);