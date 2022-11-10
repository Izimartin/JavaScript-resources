var MORSE_CODE = { ".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e", "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j", "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o", ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t", "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y", "--..": "z", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9", "-----": "0", "|": " " };

var decodeMorse = function (morseCode) {
    var words = (morseCode).split('  ');
    var letters = words.map((w) => w.split(' '));
    var decoded = [];

    for (var i = 0; i < letters.length; i++) {
        decoded[i] = [];
        for (var x = 0; x < letters[i].length; x++) {
            if (MORSE_CODE[letters[i][x]]) {
                decoded[i].push(MORSE_CODE[letters[i][x]]);
            }
        }
    }

    return decoded.map(arr => arr.join('')).join(' ');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));