const text = "Este es un texto";
// Validar De A a Z minucula y mayuscula con acentos
const regexText = /^[a-zA-Z\U00E0-\U00FC ]+$/;

if (regexText.test(text)) {
    console.log("Es un texto")
} else {
    console.log("No es un texto")
}

const number = "123456578676352";
// Validar digito
const regexNumber = /^\d+$/;

if (regexNumber.test(number)) {
    console.log("Es un numero")
} else {
    console.log("No es un numero")
}