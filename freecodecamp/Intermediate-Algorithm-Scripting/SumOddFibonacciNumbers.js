// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  let result = 0;
  let currNumber = 1;
  let prevNumber = 0;

  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result;
}

sumFibs(4);

const result1 = sumFibs(4);
const result2 = sumFibs(10);
const result3 = sumFibs(1000);
console.log("Expected output, 5. Returned: ", result1);
console.log("Expected output, 10. Returned: ", result2);
console.log("Expected output, 1785. Returned: ", result3);
