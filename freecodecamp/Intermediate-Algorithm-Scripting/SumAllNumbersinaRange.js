// Sum All Numbers in a Range
// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

// one way to solve it with reduce
function sumAll(arr) {
  let sumArr = [];
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  for (let i = minValue; i <= maxValue; i++) {
    sumArr.push(i);
  }

  const result = sumArr.reduce((acc, cur) => acc + cur, 0);

  return result;
}

sumAll([1, 4]);
console.log(result);

// another way to solve it
function sumAll(arr) {
  let result = 0;
  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);

  for (let i = minNum; i <= maxNum; i++) {
    result += i;
  }
  return result;
}

sumAll([1, 4]);
console.log(result);

// another way to solve in within for-loop
function sumAll(arr) {
  let result = 0;
  let lowestNum = Math.min(arr[0], arr[1]);
  let maxNum = Math.max(arr[0], arr[1]);

  for (let i = lowestNum; i <= maxNum; i++) {
    result += i;
  }

  return result;
}

console.log(sumAll([1, 4]));
