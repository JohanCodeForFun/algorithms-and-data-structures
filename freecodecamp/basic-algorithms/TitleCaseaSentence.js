// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

let titleCase = str => {
    const strSplit = str.split(" ");
    const capitalizedStr = [];
  
    for (let word in strSplit) {
      capitalizedStr[word] = strSplit[word][0].toUpperCase() + strSplit[word].slice(1).toLowerCase();
    }
  
    return capitalizedStr.join(" ");
  }
  
  titleCase("I'm a little tea pot");