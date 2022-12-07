const text = "Este texto112 1tiene algunos numeros como est1212e 1212 y este otro 12121 122"
console.log(text.match(/\d+/g).length);

const text2 = "Este texto112 1ae1 1tiene algunos 5Ed9 9Ae2 numeros como est1212e 1212 y este otro 12121 122"
console.log(text2.match(/\d[a-zA-Z][a-zA-Z]\d/g).length);
