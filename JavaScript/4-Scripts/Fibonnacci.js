const fibonnacci = num => {
    const result = [0, 1]

    for (let i = 2; i <= num; i++) {
        const prevNum1 = result[i - 1]
        const prevNum2 = result[i - 2]
        result.push(prevNum1 + prevNum2)
    }
    console.log(result[num])
}

console.log('fibonnacci of 5 is')
fibonnacci(5)
console.log('fibonnacci of 15 is')
fibonnacci(15)
console.log('fibonnacci of 50 is')
fibonnacci(50)
console.log('fibonnacci of 100 is')
fibonnacci(100)
