// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// inherits objects beetwen them  

const vehicle = {
    drive: function () {
        console.log("That car's amazing!," + " " + "look is a " + this.make);
    }
}; 

const car = {
    make: "BMW",
};
// let car a prototype of vehicle
Object.setPrototypeOf(car, vehicle);
car.drive();
