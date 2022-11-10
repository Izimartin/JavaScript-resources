const beer = {
    name: "Samichlaus",
    price: 10.0,
    getDetail: function () {
        return `${this.name} $ ${this.price}`;
    }
}

const wine = {
    name: "Merlot",
    price: 12.0,
}

console.log(beer.getDetail());
// borrow the getdetail() from beer object to wine one.
const detaillWine = beer.getDetail.bind(wine);
console.log(beer.detaillWine());

console.log(beer.getDetail());
