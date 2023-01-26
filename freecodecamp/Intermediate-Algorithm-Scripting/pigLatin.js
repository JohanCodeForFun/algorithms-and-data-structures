// Pig Latin
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
// solution from Useful Programmer @ Youtube

function translatePigLatin(str) {
  let vowels = "aeiou".split("");

  function isVowel(letter) {
    return vowels.indexOf(letter);
  }

  for (let i = 0; i < str.length; i++) {
    let eachLetter = str[i];
    if (isVowel(eachLetter) != -1 && i === 0) {
      return str + "way";
    }
    if (isVowel(eachLetter) != -1) {
      return str.slice(i) + str.slice(0, i) + "ay";
    }
  }
  return str + "ay";
}

translatePigLatin("consonant");
