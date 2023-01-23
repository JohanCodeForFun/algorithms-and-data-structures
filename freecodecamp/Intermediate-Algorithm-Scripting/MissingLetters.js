// Missing letters
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetSplit = alphabet.split("");
  const strSplit = str.split("");
  let missingLetter = "";
  let strCount = 0;

  const findIndexFirst = alphabetSplit.findIndex(
    (element) => element === strSplit[0]
  );
  const findIndexLast = alphabetSplit.findIndex(
    (element) => element === strSplit[strSplit.length - 1]
  );

  const compareArr = alphabet.slice(findIndexFirst, findIndexLast + 1);

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== compareArr[i]) {
      return compareArr[i];
    }
    strCount++;
    if (strCount === str.length) {
      return undefined;
    }
  }

  return missingLetter;
}

console.log(fearNotLetter("abcdf"));
