interface Sale {
    customer: string;
    total: number;
    products: string[]
}
// Partial<> Converts all interface elements to optional
const mySalePartial: Partial<Sale> = {
    products: ["Cerveza", "Vino"]
}

// Required<> Converts all interface elements to required/obligatory
const mySaleRequired: Required<Sale> = {
    customer: "Brealy",
    total: 100,
    products: ["Cerveza", "Vino"]
}
