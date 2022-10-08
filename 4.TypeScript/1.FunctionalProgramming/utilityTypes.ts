interface Drink {
    name: string;
    color: string;
    price: number;
}

// Extends interface with properties passed using pick generic 
interface RedWine extends Pick<Drink, "name" | "price"> {
    year: number;
}

// It will pick the name & price from Drink interface
const myRedWine: RedWine = {
    name: "Malbec",
    price: 100,
    year: 2019
}

// Extends interface with properties passed using omit generic 
interface WhiteWine extends Omit<Drink, "color"> {
    year: number;
    brand: "Bodegas" | "Vinedos";
}

// It will omit the color from Drink interface
const myWhiteWine: WhiteWine = {
    name: "Chardonnay",
    price: 100,
    year: 2019,
    brand: "Bodegas"
}

console.log(myRedWine);
console.log(myWhiteWine);