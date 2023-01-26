// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr) {
  const args = [...arguments].flat();
  const uniqueSet = [...new Set(args)];

  return uniqueSet;
}

const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// should return [1, 3, 2, 5, 4]
console.log(result);
