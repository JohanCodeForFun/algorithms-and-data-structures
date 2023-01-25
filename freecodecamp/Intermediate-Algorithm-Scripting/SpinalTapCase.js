// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  const camelCaseDone = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  const spaceAndDashesDone = camelCaseDone.replace(/\s|_/g, "-");
  return spaceAndDashesDone.toLowerCase();
}

spinalCase("This Is Spinal Tap");
