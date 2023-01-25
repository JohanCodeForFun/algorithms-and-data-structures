// Pig Latin
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let vowels = "aeiou".split("");

  for (let i = 0; i < str.length; i++) {
    let eachLetter = str[i];
    if (vowels.indexOf(eachLetter) != -1 && i === 0) {
      return str + "way";
    }
    if (vowels.indexOf(eachLetter) != -1) {
      return str.slice(i) + str.slice(0, i) + "ay";
    }
  }
  return str + "ay";
}

translatePigLatin("consonant");
