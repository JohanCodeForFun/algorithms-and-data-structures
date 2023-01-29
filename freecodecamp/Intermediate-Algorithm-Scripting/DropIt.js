// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  arr.forEach((element, index) => {
    if (func(element)) {
      // console.log(
      //   "Line 6: ",
      //   arr[element],
      //   func(element),
      //   arr.slice(index - 1)
      // );
      return arr.slice(index - 1);
    }
  });

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      // console.log(arr[i], func(arr[i]), arr.slice(i));
      return arr.slice(i);
    }
  }
  return [];
}

const case1 = dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});
console.log(case1, "Expected: ", [3, 4]);
