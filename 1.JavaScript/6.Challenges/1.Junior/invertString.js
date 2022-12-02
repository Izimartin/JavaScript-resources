const word = "Brealy";

functinoalWord = word.split("").reverse().join("");

let iterativeWord = "";

for (let c of word) {
    iterativeWord = c + iterativeWord;
}

console.log("functinoalWord:", functinoalWord)
console.log("iterativeWord:", iterativeWord);
