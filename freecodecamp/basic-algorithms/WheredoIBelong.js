// Where do I Belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

function getIndexToIns(arr, num) {
  if (num === 1) { return 0 }

  const findInsertionIndex = element => element >= num;
  const compareNumbers = (a, b) => a - b;
  arr.sort(compareNumbers)

  if (arr.findIndex(findInsertionIndex) === -1) {
    return arr.length
  }

  return arr.findIndex(findInsertionIndex);
}

const result = getIndexToIns([2, 5, 10], 15);
console.log(result);


// previous trys
// function getIndexToIns(arr, num) {
//   let index = 0;
//   let indexx = 0;

//   let newArr = arr.sort();
//   console.log(newArr);
//   console.log("Num: " + num);

//   for (let i = 0; i < arr.length; i++) {
//     // loop through entire array and compare if num is equal or lesser than
//     // current number in array.
//     // store that value in a variable
//     // use indexOf(foundValue) to find index
//     // return index of where the num should be put in.

//     if (num >= newArr[i]) {
//       console.log("if, " + newArr[i]);
//       index = newArr[i];
//       console.log("Index log: " + index);
//       indexx = newArr.indexOf(index);
//     } else {
//       console.log("else, " + newArr[i]);
//     }
//     // console.log(searchValue);
//     // index = arr.indexOf(searchValue)
//   }
//   return indexx;
// }

// // DONE!
// // console.log(getIndexToIns([40, 60], 50));
// // getIndexToIns([40, 60], 50);
// // should return 1

// // DONE!
// // console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
// // getIndexToIns([10, 20, 30, 40, 50], 30)
// // should return 2

// // getIndexToIns([10, 20, 30, 40, 50], 35)
// console.log(getIndexToIns([10, 20, 30, 40, 50], 35))
// // Should return 3

// // getIndexToIns([3, 10, 5], 3)
// // should return 0