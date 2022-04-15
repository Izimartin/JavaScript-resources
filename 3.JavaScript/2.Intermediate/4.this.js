// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

const person = {
    firstName: "Brealy",
    lastName: "Padron",
    id: 1313,
    sayName: function () {
        console.log(this.firstName + " " + this.lastName + ", id:" + this.id);
     } 
}

const boundSayName = person.sayName.bind(person);
boundSayName();
