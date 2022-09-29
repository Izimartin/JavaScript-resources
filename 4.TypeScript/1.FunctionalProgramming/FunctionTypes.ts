function highOrderFunction(fn: () => string) {
    console.log("Aca pasa algo");
    const res = fn();
    console.log(`El resultado de la funcion es: ${res}`);
}

// Pass a first order function that returns a string
highOrderFunction(() => "Hola soy un string")
highOrderFunction(() => "1")

// highOrderFunction(() => 1)  // Error cause is a number instead of string
// highOrderFunction((a) => "Hola soy un string")  // Error cause it doesn't receives a param
