class Cerveza {
    constructor(nombre, alcohol, marca) {
        this.nombre = nombre;
        this.alcohol = alcohol;
        this.marca = marca;
    }
}

class Cantinero {
    constructor(nombre, cerveza) {
        this.nombre = nombre;
        this.cerveza = cerveza;
    }

    servir() {
        console.log(`${this.nombre} sirve la cerveza ${this.cerveza.marca}`);
    }
}

let cantinero = new Cantinero("Pedro", new Cerveza("Erdinger", 20, "Erdinger"));
cantinero.servir()