// Binary Agents
// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.

function binaryAgent(str) {
  const binaryArr = str.split(" ");
  const messageFromBinary = binaryArr
    .map((elem) => String.fromCharCode(parseInt(elem, 2)))
    .join("");
  return messageFromBinary;
}

// one line
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map((char) => parseInt(char, 2))
  );
}

const case1 = binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
console.log(case1);
