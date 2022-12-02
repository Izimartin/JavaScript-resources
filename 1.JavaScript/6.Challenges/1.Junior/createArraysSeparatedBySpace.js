const words = "pato perro  aguila oso   pato";

// Regex: \s+ for one space of more, replace with " "
const array = words.replace(/\s+/g, " ").split(" ");
console.log(array);

const array2 = [];
let w = "";

for (const c of words) {
    if (c !== " ") {
        w += c;
    } else if (w.length > 0) {
        array2[array2.length] = w;
        w = "";
    }
}

if(w.length > 0){
    array2[array2.length] = w;
}

console.log(array2);



