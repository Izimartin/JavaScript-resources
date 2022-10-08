function counter(n: number = 1){
    let number = n;

    return() => {
        console.log("Hola "+number++);
    }
}

const myClosure = counter();

// Closure save the information of the funcion for future executions. 
// Just the same function can modify the object
myClosure();
myClosure();
myClosure();

const myClosure2 = counter(50);

myClosure2();
myClosure2();
myClosure2();