const car = {
    seats: 4,
    doors: 2,
    wheels: 4,
    drive: function() {
        console.log("Vroom, vroom!");
    },
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.drive()
luxuryCar.seatMaterial = "leather";
console.log('Luxury Car:', luxuryCar)
console.log('Doors:', luxuryCar.doors)
console.log('ValueOf:', luxuryCar.valueOf())
    //Getting the keys of an object
console.log('Object keys:', Object.keys(luxuryCar));
//loop thought each object key
Object.keys(luxuryCar).forEach(key => {
    console.log('Object keys:', key);
});
// but a for..in loop includes inherited props
for (let key in luxuryCar) {
    console.log('For..in:', key)
}