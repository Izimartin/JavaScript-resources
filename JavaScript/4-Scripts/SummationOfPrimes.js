// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

const isPrime = (number) => {
  if (number === 2) return true
  if (number % 2 === 0) return false

  for (let j = 3; j * j <= number; j += 2) {
    if (number % j === 0) {
      return false
    }
  }
  return true
}

const calculateSumOfPrimeNumbers = (maxNumber) => {
  let sum = 0
  for (let i = maxNumber - 1; i >= 2; i--) {
    if (isPrime(parseInt(i)) === true) {
      sum += i
    }
  }
  return sum
}
export { calculateSumOfPrimeNumbers }
