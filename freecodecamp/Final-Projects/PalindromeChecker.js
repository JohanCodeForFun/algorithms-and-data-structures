// Palindrome Checker - Final Project #1
// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  let specialCharactersRemoved = str.replace(/[\W+\_]/g, "").toLowerCase();
  console.log(specialCharactersRemoved);
  let splitStr = specialCharactersRemoved.split("");
  let reversedStr = splitStr.reverse().join("").toLowerCase();
  console.log(reversedStr);

  return specialCharactersRemoved === reversedStr ? true : false;
}

console.log(palindrome("0_0 (: /-\\ :) 0-0"));

// input str: palindrome(0_0 (: /-\ :) 0-0) // should return true

//
// Test Cases
//
// palindrome("eye") should return a boolean.
// palindrome("eye") should return true.
// palindrome("_eye") should return true.
// palindrome("race car") should return true.
// palindrome("not a palindrome") should return false.
// palindrome("A man, a plan, a canal. Panama") should return true.
// palindrome("never odd or even") should return true.
// palindrome("nope") should return false.
// palindrome("almostomla") should return false.
// palindrome("My age is 0, 0 si ega ym.") should return true.
// palindrome("1 eye for of 1 eye.") should return false.
// palindrome("0_0 (: /-\ :) 0-0") should return true.
// palindrome("five|\_/|four") should return false.
