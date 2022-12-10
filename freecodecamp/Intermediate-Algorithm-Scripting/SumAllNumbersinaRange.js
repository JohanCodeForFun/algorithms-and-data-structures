// Sum All Numbers in a Range
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let result = 0;
  let lowestNum = Math.min(arr[0], arr[1])
  let maxNum = Math.max(arr[0], arr[1])

  for (let i = lowestNum; i <= maxNum; i++) {
    result += i;
  }

  return result

}

console.log(sumAll([1, 4]));