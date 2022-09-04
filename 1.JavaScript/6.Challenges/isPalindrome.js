function palindromeChecker(str) {
    // split() separes into array,  join() converts to string
    const strReversed = str.split("").reverse("").join("");
    return strReversed === str ? "es palindromo" : "no es palindromo";
}

console.log(palindromeChecker("oso"));
console.log(palindromeChecker("fabian"));
console.log(palindromeChecker("ana"));
console.log(palindromeChecker("guitarra"));