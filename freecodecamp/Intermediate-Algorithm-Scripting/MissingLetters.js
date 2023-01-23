// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const alphabet2 = "abcdefghijklmnopqrstuvwxyz";
  const startingChar = alphabet2.indexOf(str[0]);
  const focusedAlphabet = alphabet2.slice(startingChar);

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== focusedAlphabet[i]) {
      return focusedAlphabet[i];
    }
  }
}

// using charCodeAt
// let currCharCode = str.charCodeAt(0);
// let missing = undefined;

// str.split("").forEach((letter) => {
//   if (letter.charCodeAt(0) === currCharCode) {
//     currCharCode++;
//   } else {
//     missing = String.fromCharCode(currCharCode);
//   }
// });
// return "missing: " + missing;

// my first shitty solution
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const alphabetSplit = alphabet.split("");
//   const strSplit = str.split("");
//   let missingLetter = undefined;
//   let strCount = 0;

//   const findIndexFirst = alphabetSplit.findIndex(
//     (element) => element === strSplit[0]
//   );
//   const findIndexLast = alphabetSplit.findIndex(
//     (element) => element === strSplit[strSplit.length - 1]
//   );

//   const compareArr = alphabet.slice(findIndexFirst, findIndexLast + 1);

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== compareArr[i]) {
//       return compareArr[i];
//     }
//     strCount++;
//     if (strCount === str.length) {
//       return undefined;
//     }
//   }

//   return missingLetter;
// }

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
