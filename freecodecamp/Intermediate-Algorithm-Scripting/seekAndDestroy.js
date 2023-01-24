// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  const destroyer = Array.prototype.slice.call(arguments, 1);
  const targets = arr;

  const result = targets.filter((element) => !destroyer.includes(element));

  return result;
}

const result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result);

// previous solution
// function destroyer(arr) {
//   const targets = Array.prototype.slice.call(arguments[0]);
//   const destroyer = Array.prototype.slice.call(arguments, 1);
//   const survivors = [];

//   const seek = targets.filter((element) => {
//     if (!destroyer.includes(element)) {
//       survivors.push(element);
//     }
//   });

//   return survivors;
// }

// const result = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
// console.log(result);
