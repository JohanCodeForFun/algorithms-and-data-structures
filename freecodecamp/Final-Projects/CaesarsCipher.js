// Caesars Cipher - Final Project #3
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let accumulator = "";

  for (let i in str) {
    if (str[i] === " ") {
      accumulator += " ";
    } else {
      if (alphabet.indexOf(str[i]) - 13 < 0) {
        accumulator += alphabet.charAt(alphabet.indexOf(str[i]) - 13 + 26);
      } else {
        accumulator += alphabet.charAt(alphabet.indexOf(str[i]) - 13);
      }
    }
  }

  let endOfStr = str.length - 1;
  if (str[endOfStr] === "!" || str[endOfStr] === "?" || str[endOfStr] === ".") {
    return specialEndCharacter(accumulator, str[endOfStr]);
  }

  function specialEndCharacter(str, char) {
    var newString = str.substring(0, endOfStr);
    return newString + char;
  }
  return accumulator;
}

const case1 = rot13("SERR PBQR PNZC");
console.log(case1);
