const fizzbuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    // check if the number is a multiple of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } // check if the number is a multiple of 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    } // check if the number is a multiple of 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
fizzbuzz(15)