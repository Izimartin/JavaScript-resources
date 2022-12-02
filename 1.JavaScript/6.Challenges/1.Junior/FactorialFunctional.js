const factorial = (n, a=1) => new Array(n)
                            .fill("")
                            .map(() => a++)
                            .reduce*((ac, number) => ac*number, 1);
console.log(factorial(5));