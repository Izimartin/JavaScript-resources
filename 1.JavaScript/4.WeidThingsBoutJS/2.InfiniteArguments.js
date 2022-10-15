function showInfo(...args) {
    let result = "";

    //concatenate for each item of args
    for (const item of args) {
        result += `${item}<br>`
    }
    return result;
}

console.log(showInfo("Brealy", "Fabian", "Padron", 12))