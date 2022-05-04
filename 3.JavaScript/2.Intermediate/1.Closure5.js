// Explain the pros and cons of closure.
// What would happen if I remove the closure feature from JavaScript?
// What could be the alternative to closure?

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 0);
}

// If you think it should print 5, 5, 5, 5, 5 then you have not noticed the let declaration. 
// Actually, it should print 0, 1, 2, 3, 4. 

let counter = function () {
    let k = 0;
    return (k) => k++;
}();

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())

// There is another expert-genre program, I ask depending upon the seniority of the interviewee. My question is to evaluate the output and explain the answer.
function createClosureArray() {
    var badArr = [];

    for (var index = 0; index < 5; index++) {
        badArr[index] = function () {
            return 'n = ' + index;
        };
    }
    return badArr;
}

var badArr = createClosureArray(); // badArr is an array of 5 closures

for (var index in badArr) {
    console.log(badArr[index]());
}

// The output of this program should be 5 times "n = 5". 
// This is a classic example where the closure has absolutely gone wrong. 
// Then I ask to correct this snippet to produce expected output as follows: "n = 1, n = 2, n = 3, n = 4, n = 5". 
// The expected program should be this.
var Arr = [];

function createClosure(n) {
    return function () {
        return 'n = ' + n;
    }
}

    for (var index = 0; index < 10; index++) {
        Arr[index] = createClosure(index);
    }

for (var index in Arr) {
    console.log(Arr[index]());
}

// This topic helps me to fathom the depth of the interviewee's knowledge of JavaScript.

