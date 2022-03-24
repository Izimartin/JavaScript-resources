const pikachu = { name: "Pikachu" };
const stats = { hp: 40, attack: 60, defense: 35 }

// Bad code
pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

const lvl10 = Object.assign(pikachu, stats)
const lvl11 = Object.assign(pikachu, {hp: 45})

//Good code
const lvl10 = { ...pikachu, ...stats }
const lvl11 = { ...pikachu, hp: 45 }

//Arrays 
let pokemon = ['Arbok', 'Bulbasaur', 'Charmander', 'Squirtle'];

// Bad array code 
pokemon.push('Pikachu');
pokemon.push('Zapdos');
pokemon.push('Lugia');

//Good Array Code

// Push
pokemon = [...pokemon, 'Pikachu', 'Zapdos', 'Lugia'];

// Unshift
pokemon = ['Pikachu', 'Zapdos', 'Lugia', ...pokemon];