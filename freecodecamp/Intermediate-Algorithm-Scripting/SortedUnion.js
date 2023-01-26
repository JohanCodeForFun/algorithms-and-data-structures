// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(arr) {
  const args = [...arguments].flat();
  const uniqueSet = [...new Set(args)];

  return uniqueSet;
}

// Solution with for loop
// function uniteUnique(arr) {
//   const result = [];

//   // looping through array arguments
//   for (let i = 0; i < arguments.length; i++) {
//     const arrayArgs = arguments[i];

//     // getting each value in array arguments
//     for (let j = 0; j < arrayArgs.length; j++) {
//       let index = arrayArgs[j];

//       // checking if value exists in result array
//       // push index value to result if not found.
//       if (result.indexOf(index) < 0) {
//         result.push(index);
//       }
//     }
//   }

//   return result;
// }

const result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// should return [1, 3, 2, 5, 4]
console.log(result);
