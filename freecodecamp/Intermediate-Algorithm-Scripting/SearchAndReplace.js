// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

function myReplace(str, before, after) {
  const charTestUpperCase = before.toUpperCase();
  const inputUpperCase = after.charAt(0).toUpperCase();

  if (before.charAt(0) === charTestUpperCase[0]) {
    const newWord = after.replace(after.charAt(0), inputUpperCase);

    return str.replace(before, newWord);
  }

  return str.replace(before, after.toLowerCase());
}

let result = myReplace("I think we should look up there", "up", "Down");
console.log(result);
