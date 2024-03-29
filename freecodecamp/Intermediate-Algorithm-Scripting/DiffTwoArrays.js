// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const newArr = [];

  const compareArr = (a, b) => {
    a.filter((element) => {
      if (!b.includes(element)) {
        newArr.push(element);
      }
    });
  };
  compareArr(arr1, arr2);
  compareArr(arr2, arr1);

  return newArr;
}

const result = diffArray(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
);
console.log(result);

//
// function diffArray(arr1, arr2) {
//   const newArr = [...arr1, ...arr2];
//   const result = newArr.filter(item => {
//     if (arr1.includes(item) != arr2.includes(item)) {
//       return item
//     }
//   })
//   return result;
// }

// let result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// console.log(result);
// console.log(diffArray(
// ["diorite", "andesite", "grass", "dirt", "dead shrub"],
// ["diorite", "andesite", "pink wool", "grass", "dirt", "dead shrub"]));

// Another solution,
// function diffArray(arr1, arr2) {
//   const newArr = [];

//   function compareArr(first, second) {
//     first.forEach(number => {
//       if (second.indexOf(number) === -1) {
//         newArr.push(number)
//       }
//     });
//   }

//   compareArr(arr1, arr2)
//   compareArr(arr2, arr1)

//   return newArr;
// }
