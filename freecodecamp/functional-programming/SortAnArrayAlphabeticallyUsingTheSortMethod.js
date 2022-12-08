// Sort an Array Alphabetically using the sort Method
// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.

function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort((a, b) => a > b);

  // return arr.sort(function(a, b) {
    // return a > b
  // })
	
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));