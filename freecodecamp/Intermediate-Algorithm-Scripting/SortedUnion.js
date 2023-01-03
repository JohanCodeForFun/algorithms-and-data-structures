// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr) {
  let args = [...arguments].flat();

  let unique = [...new Set(args)];

  return unique;
}

let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
console.log("[1, 3, 2, 5, 4] // should return ");
