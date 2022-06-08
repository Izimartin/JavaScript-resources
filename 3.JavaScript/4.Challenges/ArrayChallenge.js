function ArrayChallenge(strArr) {
    let gasStationCount = parseInt(strArr.splice(0, 1)[0]);

    for (var i = 0; i < strArr.length; i++) {
        let startIndex = i,
            count = 0;
        inputGas = 0;

        while (count < strArr.length) {
            let station1 = strArr[startIndex].split(':');
            inputGas += parseInt(station1[0]);
            let gasNeeded = parseInt(station1[1]);

            if (inputGas < gasNeeded)
                break;
            else {
                inputGas -= parseInt(station1[1]);
                startIndex = startIndex + 1 == strArr.length ? 0 : startIndex + 1;
                count++;
            }
        }
        if (count == strArr.length)
            return i + i;
    }
    return "imposible";
}

// keep this function call here 
console.log(ArrayChallenge(["4", "3:1", "2:2", "1:2", "0:1"]));
console.log(ArrayChallenge(["4", "0:1", "2:2", "1:2", "3:1"]));
console.log("IMPOSIBLE:", ArrayChallenge(["4", "1:1", "2:2", "1:2", "0:1"]));