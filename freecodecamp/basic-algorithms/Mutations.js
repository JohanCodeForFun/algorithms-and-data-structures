// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

// Solved with indexOf
function mutation(arr) {
  let firstElement = arr[0].toLowerCase();
  let secondElement = arr[1].toLowerCase();

  for (let i = 0; i < secondElement.length; i++) {
    let letter = secondElement[i];
    if (firstElement.indexOf(letter) === -1) {
      return false;
    }
  }
  return true;
}


// solved with indexOf
// function mutation(arr) {
//   let word1 = arr[0].toLowerCase();
//   let word2 = arr[1].toLowerCase();

//   for (let i = 0; i < word2.length; i++) {
//     let value = word1.indexOf(word2[i]);
//     if (value === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// solved with includes
// function mutation(arr) {
//   let word1 = arr[0].toLowerCase();
//   let word2 = arr[1].toLowerCase().split("");

//   let temp = word2.map((char) => {
//     return word2.includes(char);
//   });
//   if (temp.includes(false)) {
//     return false;
//   }
//   return true;
// }


// first try
// for (let i = 0; i < arr.length; i++) {
//   let value;
//   console.log(newArr[i]);
//   console.log(newArr[i + 1]);
//   if (newArr[i] === newArr[i + 1]) {
//     value = true;
//   } else {
//     value = false;
//   }
// }

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
