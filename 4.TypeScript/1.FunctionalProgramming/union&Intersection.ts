// Union 
function sum(a: number | string, b: number | string): number {
    const number1: number = typeof (a) === "number" ? a : Number(a);
    const number2: number = typeof (b) === "number" ? b : Number(b);
    return number1 + number2;
}

console.log(sum("1", 2));
console.log(sum("1", "2"));
console.log(sum(1, 2));

// Intersection
interface Product {
    name: string
    code: string
    price: number
}

interface DrinkStore {
    hasAlcohol: boolean
    mililiters: number
}

type DrinkProduct = Product & DrinkStore;

const myDrinkProduct: DrinkProduct = {
    name: "Erdinger",
    code: "123456790",
    price: 85,
    hasAlcohol: true,
    mililiters: 500
}

function showInfoDrink(drink: DrinkStore) {
    // composition
    return `bebida con ${drink.mililiters} millilitros y ${drink.hasAlcohol ? "Tiene" : "No tiene"} Alcohol`
}

console.log(showInfoDrink(myDrinkProduct))