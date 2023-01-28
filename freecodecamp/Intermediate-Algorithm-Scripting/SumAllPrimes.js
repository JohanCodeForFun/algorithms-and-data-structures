// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// Solution from fcc hint section
function sumPrimes(num) {
  // Helper function to check primality
  function isPrime(num) {
    const sqrt = Math.sqrt(num);
    for (let i = 2; i <= sqrt; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

// solution from Useful Programmer from Youtube
function sumPrimes(num) {
  if (num <= 1) {
    return "Numbers lower than 0 don't work here";
  }

  let counter = 2;
  let sum = 0;

  while (counter <= num) {
    if (isPrime(counter)) {
      sum += counter;
    }
    counter++;
  }
  return sum;
}

function isPrime(singleNumber) {
  let counter = 2;
  while (counter < singleNumber) {
    if (singleNumber % counter === 0) {
      return false;
    }
    counter++;
  }
  return true;
}

const result = sumPrimes(10);
console.log(result);
