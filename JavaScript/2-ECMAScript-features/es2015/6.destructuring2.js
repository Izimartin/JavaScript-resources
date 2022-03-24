const cat = {
    name: "Fuji",
    furr: "Peludito",
    kind: "Felino",
    color: "Gris",
    size: "Mediano",
    weight: "10 lbs",
    age: "3",
    diet: "Alimento de gato, atun y pollo"
}

console.log({ cat })

function alimentar(animal) {
    const { name, furr, kind, color, size, weight, age, diet } = animal;
    return `${name} es un ${kind} muy ${furr} de color ${color} de tamaño ${size}, pesa ${weight} y su dienta de basa en ${diet}, tiene ${age} años.`;
}
// OR
function alimentar({ name, furr, kind, color, size, weight, age, diet }) {
    return `${name} es un ${kind} muy ${furr} de color ${color} de tamaño ${size}, pesa ${weight} y su dienta de basa en ${diet}, tiene ${age} años.`;
}
