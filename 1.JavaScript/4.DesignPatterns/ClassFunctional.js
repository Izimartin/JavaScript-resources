class Drunk {
    constructor(name, limit) {
        this.name = name;
        this.limit = limit;
        this.beers = [];
        this.liquid = 0;
        this.callback = callback;
    }

    drink(beer, otherAction) {
        this.beers.push(beer);
        this.liquid += beer.quantity;
        console.log(
            this.name + "ha bebido una cerveza" + beer.name + "liquido en el cuerpo:" + this.liquid
        );
        if (this.liquied >= this.limit) {
            this.discharge();
        }
        if (otherAction) { otherAction(); }
    }

    discharge() {
        console.log(this.name + "ha tenido que ir a orinar");
        this.liquid = 0;
        this.callback();
    }
}

beer1 = { name: "Erdinger", quantity: "500" };
beer1 = { name: "Corona", quantity: "350" };
beer1 = { name: "Paulaner", quantity: "500" };

var brealy = new Drunk("Fabian", 2000, function () { console.log(this.name + "Pide un snack"); });
var brealy = new Drunk("Fabian", 2000);

brealy.drink(beer2);
brealy.drink(beer1);
brealy.drink(beer1, function () { console.log(this.name + "pedi una hamburguesa") });
brealy.drink(beer3);
brealy.drink(beer3);