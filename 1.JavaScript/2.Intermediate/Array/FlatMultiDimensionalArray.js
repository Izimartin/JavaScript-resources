function flatten(array) { 
    return array.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
     })
}

console.log(flatten([[1, 2, 3], [4, 5]]));