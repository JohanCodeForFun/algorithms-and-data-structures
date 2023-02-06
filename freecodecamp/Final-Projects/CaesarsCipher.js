// Caesars Cipher - Final Project #3
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

// Caesars Cipher - Final Project #3
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let accumulator = "";

  for (let i in str) {
    console.log(str[i]);
    if (str[i] === " ") {
      accumulator += " ";
    }
    if (alphabet.indexOf(str[i]) - 13 < 0) {
      accumulator += alphabet.charAt(alphabet.indexOf(str[i]) - 13 + 26);
    } else {
      accumulator += alphabet.charAt(alphabet.indexOf(str[i]) - 13);
    }
  }

  return accumulator;
}

const case1 = rot13("SERR PBQR PNZC");
console.log(case1);

function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabetLookUpTable = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
  }; // cipher, "SERR PBQR PNZC"

  const strSplit = str.split("");
  // console.log(alphabetLookUpTable);
  let accumulator = "";

  for (const key in alphabetLookUpTable) {
    let charValue = alphabetLookUpTable[key];

    // console.log(charValue);

    for (char in strSplit) {
      let cipherChar = strSplit[char];
      console.log(cipherChar);
    }
  }

  // testing look up table solution

  // add +13 to index
  // at the end, loop around to begining of alphabet
  // console.log(alphabet.indexOf("Z"));
  // console.log(alphabet.indexOf(strSplit[12]));
  for (let i in strSplit) {
    if (alphabet.indexOf(strSplit[i]) !== -1) {
      // in here I get all characters from str in alphabet
      // console.log(strSplit[i]);
    }
  }

  return accumulator;
}

const case11 = rot13("SERR PBQR PNZC");
console.log(case1);
