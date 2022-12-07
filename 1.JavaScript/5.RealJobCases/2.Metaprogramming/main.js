const beer = {
    name: "london partner",
    brand: "Fuller",
    alcohol: 8.5,
    some: () => { },
    country: "Reino Unido",
    style: "porter",
};

const wine = {
    name: "rioja wine",
    brand: "Fuller",
    alcohol: 13,
    some: () => { },
    country: "Reino Unido",
    style: "porter",
};

Reflect.deleteProperty(beer, "style")

// DOM introspection
const keys = Obkject.keys(beer);
for (k in keys) {
    console.log(`${k}: ${beer[k]} ${typeof beer[k]}`);
};

content.innerHTML = Object.keys(beer).reduce((ac, k) => {
    return ac +
        typeof (beer[k]) !== "function" ?
        `${k}: ${beer[k]} ${typeof beer[k]} <BR>` :
        "";
}, "");

// Apply 
function show(message1, message2) {
    return message1 + " " +
        this.name + " " +
        this.alcohol + " " + message2;
}

console.log(Reflect.apply(show, beer, ["cerveza", "alcohol"]));
console.log(Reflect.apply(show, wine, ["vino", "grados"]));

// Reflect Applied in Classes
class Beer {
    constructor(name, alcohol) {
        this.name = name;
        this.alcohol = alcohol;
    }
    get info() {
        return this.name + " " + this.alcohol;
    }
}

// Property Creation
const erdinger = Reflect.construct(Beer, ["pikantus", 9.5])
Reflect.defineProperty(erdinder, "brand"), {
    value: "erdinger",
    writable: true, //false if dont want it to be modified
    enumerable: true, //false if forEach don't show the value
}
erdinger.brand = "pato";
console.log(erdinger);

Object.keys(erdinger).forEach(k => console.log(k))

// apply in DOM
function createDiv() {
    return `<div>
    <h2>${this.name}</h2>
    <p>${this.alcohol}</p>
    </div>`;
}

content.innerHTML += Reflect.apply(createDiv, beer, [])
content.innerHTML += Reflect.apply(createDiv, wine, [])

// Real Case
const mail = {
    name: {
        text: "escribe tu nombre",
        type: "text",
    },
    email: {
        text: "escribe tu correo",
        type: "email",
    },
    message: {
        text: "escribe tu mensaje",
        type: "text",
    },
    copy: {
        text: "confirma envio de copa a tu correo",
        type: "checkbox",
    },
}

content2.innerHTML = Object.kets(mail).reduce((ac, k) => {
    const element = mail[k];

    return ac + `<div>
    <label>${element.text}</label>
    <input type="${element.type}">
    </div>`;
}, "");