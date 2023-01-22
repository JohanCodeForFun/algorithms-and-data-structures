function sumFibs(num) {
  let result = 0;
  let temp = 0;
  let startValue = 1;

  for (let i = 0; i <= num; i++) {
    result += temp + startValue;
    temp = result;
    console.log(result, temp);
  }

  return result;
}

const result = sumFibs(4);
console.log(result);
