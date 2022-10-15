let some = function () {
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/arguments/callee
    // argument.calle instead of arguments.properties that is deprecated)
    console.log(arguments.callee.something);
    console.log(arguments.callee.number);
    return "se hace algo";
}
console.log(some());

some.number = 555;
some.something = "El chupa cabras";

console.log(some());
console.log(some.number);
console.log(some.something);
some.mmyFunc = () => "funcion imaginaria, buu!";
console.log(some.mmyFunc());
console.log(some());

function show(something) {
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/arguments/callee
    console.log(something);
    return arguments.callee;
}

show("Hi there")("Hello there")("Hey")("Greetings");