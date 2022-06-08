class Vehicle {
    constructor() {
        this.wheels = 4,
            this.wheels = true
    }

    ready() {
        return "ready to go!";
    }
}


class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2
    }

    wheelie() {
        return "On one wheel!";
    }
}

const myBike = new Motorcycle();
const myvehicle = new Vehicle();

console.log(myBike)
console.log(myBike.wheelie())

console.log(myvehicle)
console.log(myvehicle.ready())