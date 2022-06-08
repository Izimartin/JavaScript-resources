// When it comes to objects, what about Object.freeze() ?
const scoreObj = {
    "first": 44,
    "second": 12,
    "third": { "a": 1, "b": 2 } // nested object
}

Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log('Object.freeze():', scoreObj);
// still mutates - it is a shallow freeze

//Deep copy is needed to avoid this

//Several libraries like Lodash, Rambda, and others have this feature built-in

/* Here is a one line Vanilla JS solution, but it does not work with 
Dates,  functions, undefined, Infinity, RegEx, Maps, Sets, Blobs, FileList,
ImageDatas and other complex  data types */

const newScoreObj = JSON.parse(JSON.stringify(scoreObj))
console.log('JSON.parse(JSON.stringify):', newScoreObj);