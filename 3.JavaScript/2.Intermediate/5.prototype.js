//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
const myObject = {
    name: "Brealy",
    greet() {
        console.log(`Hello, ${this.name}`);
     }
}

myObject.greet();

