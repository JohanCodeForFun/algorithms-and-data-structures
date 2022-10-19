// Slice and Splice
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

let frankenSplice = (arr1, arr2, n) => {
  let copiedArr = [...arr2];
  copiedArr.splice(n, 0, ...arr1);
  return copiedArr;
};

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// Outcome, [ 4, 1, 2, 3, 5, 6 ]

// frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
// frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
// Passed: The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.
