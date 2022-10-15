//First Order
function a() {
    console.log("Hola");
}
//Superior Order, receives 1st Order function as param.
function b(fn) {
    fn();
    console.log("Que pedo");
    fn();
}

b(a);

// Example 2

function GoToBeer(fn) {
    console.log("Tomando cerveza");
    fn();
    console.log("Quiero otra cerveza");
}

function GoToHome() {
    console.log("Creo que ir a casa");
}

GoToBeer(GoToHome);