// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
  const newArr = [];

  function compareArr(first, second) {
    first.forEach(number => {
      if (second.indexOf(number) === -1) {
        newArr.push(number)
      }
    });
  }

  compareArr(arr1, arr2)
  compareArr(arr2, arr1)


  return newArr;
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "dead shrub"], ["diorite", "andesite", "pink wool", "grass", "dirt", "dead shrub"]));