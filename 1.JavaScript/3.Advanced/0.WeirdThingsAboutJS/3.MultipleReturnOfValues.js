function getBeers() {
    return [{
        name: "Fullers",
        price: 5
    },
    {
        name: "Fullers",
        price: 5
    },
    {
        total: 11,
        discount: 0
    },
    ];
}

[beer1, beer2, data] = getBeers();

console.log(beer1);
console.log(beer2);
console.log(data);