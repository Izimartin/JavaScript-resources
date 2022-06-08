const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj;

    // Creates an array or object to hold  the values
    const newObject = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = obj[key];
        // recursive  call for nested objects & arrays 
        newObject[key] = deepClone(value);
    }
    return newObject;
}

const scoreArray = [44, 23, 14, 12]
const newScoreArray = deepClone(scoreArray);
console.log('Deep Copy:', newScoreArray);
console.log(newScoreArray === scoreArray);

// Now we can make a pure function  
const pureAddToScoreHistory = (array, score, cloneFunc) => {
    const newArray = cloneFunc(array);
    newArray.push(score);
    return newArray;
}

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);
console.log('Pure function:', pureScoreHistory);