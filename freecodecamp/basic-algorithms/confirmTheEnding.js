// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  let targetLength = target.length;
  // define how many characters target length is

  if (str.substring(str.length - targetLength) === target) {
    // use substring to return part of the string between start and end index.
    // use str.length to find out where I should start index, and substract 
    // targetLength to only see last part of the string.
    // Then compare the last part of the string if it equals to target argument.

    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
confirmEnding("Bastian", "n");
