const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato")
console.log(mySandwich);

const buildSandwichFaster = ingr1 => ingr2 => ingr3 =>
    `${ingr1}, ${ingr2}, ${ingr3}`;

const mySandwichFaster = buildSandwich("Turkey")("Chesse")("Bread")
console.log(mySandwichFaster);