const dirtyText = "Este es un texto 13123123 12312313 que  tiene mas   texto ahi";
const cleanText = dirtyText
    .replaceAll(/\d+/g, "")
    .replaceAll(/ +/g, " ");

console.log(cleanText)
