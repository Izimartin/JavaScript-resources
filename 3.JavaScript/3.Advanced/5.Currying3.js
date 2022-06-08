// Another commmon use of currying is funciton composition
// Allow calling small  functions in a specific order

const addCustomer = fn => (...args) => {
    console.log('saving customer info...');
    return fn(...args);
}

const procesOrder = fn => (...args) => {
    console.log(`Procesing order #${args[0]}`);
    return fn(...args);
}

let completeOrder = (...args) => {
    console.log(`Order #${args[0].toString()} completed.`);
}

completeOrder = (procesOrder(completeOrder));
console.log(completeOrder);
completeOrder = (addCustomer(completeOrder));
completeOrder("1000")