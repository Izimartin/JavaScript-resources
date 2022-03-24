function devolverSaludo(nombre, esDeDia) { 
    // var saludo;

    // if (esDeDia) {
    //     saludo = "Buenos días " + nombre;
    // } else {
    //     saludo = "Buenas noches " + nombre;
    // }

    const saludo = esDeDia
        ? 'Buenos días'
        : 'Buenas noches'
    
    return saludo + ', ' + nombre; 

}

console.log(devolverSaludo('Fabian', true));

function esFalso(numero) { 
    return !(numero > 0)
}
console.log(esFalso(-10));

function example() {
  //     if  (condition) {
  //         return value1;
  //     }
  //     else if (condition2) {
  //         return value2;
  //     }
  //     else if (condition3) {
  //         return value3;
  //     }
  //     else {
  //         return value4;
  //     }

  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}