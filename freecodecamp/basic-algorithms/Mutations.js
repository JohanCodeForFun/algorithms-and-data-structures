// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  let newArr = [];

  arr.forEach((item) => {
    newArr.push(item.toLowerCase());
  });

  for (let i = 0; i < arr.length; i++) {
    let value;
    console.log(newArr[i]);
    console.log(newArr[i + 1]);
    if (newArr[i] === newArr[i + 1]) {
      value = true;
    } else {
      value = false;
    }
    return value;
  }
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
