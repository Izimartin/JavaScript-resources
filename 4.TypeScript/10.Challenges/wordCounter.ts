let text = "hola que tal, tal, hola, que!";

function normalize(word: string) {
    return word.toLowerCase().replace(/[.!,]/g, "");
}

function wordRepetition(text: string) {
    let dict: { [key: string]: number } = {};
    let separateWords = text.split(" ");

    for (let word in separateWords) {
        if (normalize(word) in dict) {
            ++dict[normalize(word)];
        } else {
            dict[normalize(word)] = 1;
        }
    }
    console.log(dict);
}

wordRepetition(text);