const car = {
  seats: 4,
  doors: 2,
  wheels: 4,
  drive: function () {
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
luxuryCar.seatMaterial = "leather";
console.log(luxuryCar)
console.log(luxuryCar.drive());