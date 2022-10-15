//Check valid data and number of params
// Our basic function
let rectangleArea = (length, width) => {
    return length * width;
}

// A decorator that counts the parameters
const countParams = (fn) => {
    return (...params) => {
        console.log('countParams')
        if (params.length !== fn.length) {
            throw new Error(`Incorrect number of parameters for ${fn.name}`);
        }
        return fn(...params);
    }
}

// A decorator that requires integers
const requireIntegers = (fn) => {
    return (...params) => {
        console.log('requireIntegers')
        params.forEach(param => {
            if (!Number.isInteger(param)) {
                throw new TypeError(`Params must be integers`);
            }
        });
        return fn(...params);
    }
}

// applied first makes it runs last
rectangleArea = countParams(rectangleArea);
// applied last makes it runs first
rectangleArea = requireIntegers(rectangleArea);

//console.log(rectangleArea(20, 30, "Dave")) //caught 1st by integers error
//console.log(rectangleArea(20, 30, 40)); //number of parameters error
console.log(rectangleArea(20, 30)); //no error