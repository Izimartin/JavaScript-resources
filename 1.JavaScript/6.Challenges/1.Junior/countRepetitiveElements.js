const numbers = [1,1,5,2,6,100,100,2,5,5,100];

const functionalResult = new Set(numbers);
const functionalResult2 = [...new Set(numbers)];
const functionalResult3 = [...new Set(numbers)].map(num=>{
    return {
        element: num,
        count: numbers.filter(n => n== num)
    }
});

console.log("functionalResult1:", functionalResult);
console.log("functionalResult2:", functionalResult2);
console.log("functionalResult3:", functionalResult3);

const resultIterative = [];

for (const num of numbers){
    let newElement = true;

    for (const res of resultIterative) {
        if(res.element == num){
            res.count++;
            newElement = false;
        }
    }
    
    if(newElement){
        resultIterative[resultIterative.length] = {
            element: num,
            count: 1
        }
    }
}

console.log("resultIterative:", resultIterative);