// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    switch (strArr[i]) {
      case "&":
        strArr[i] = "&amp;";
        break;
      case "<":
        strArr[i] = "&lt;";
        break;
      case ">":
        strArr[i] = "&gt;";
        break;
      case '"':
        strArr[i] = "&quot;";
        break;
      case "'":
        strArr[i] = "&apos;";
        break;
    }
  }
  strArr = strArr.join("");
  return strArr;
}

const result = convertHTML("Schindler's List");
console.log(result);
