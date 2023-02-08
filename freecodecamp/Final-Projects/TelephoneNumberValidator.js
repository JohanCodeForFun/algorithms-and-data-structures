// Telephone Number Validator - Final Project #4
// Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
  // one line
  const validPhonePattern = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/g;

  // return validPhonePattern.test(str);

  //
  const validPhonePatterns = [
    // 5555555555
    /^\d{10}$/g,

    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/g,

    // 555 555 5555
    // 1 555 555 5555
    /^1?\s?\d{3}[-|\s]\d{3}[-|\s]\d{4}$/g,

    // 1(555)555-5555
    /^1?\(\d{3}\)\d{3}[-|\s]\d{4}$/g,

    // 2 (757) 622-7382
    /^1[^2|^0]\(\d{3}\)[\s|-]\d{3}[-|\s]\d{4}$/g,
  ];
  return validPhonePatterns.some((pattern) => pattern.test(str));
}

console.log(telephoneCheck("2 (757) 622-7382"));

const case1 = telephoneCheck("555 555-5555");
// const case2 = telephoneCheck("555555 5555");
// const case3 = telephoneCheck("(555)555-5555");
const case4 = telephoneCheck("555-5555");
// console.log(case1);
// console.log(case2);
// console.log(case3);
console.log(case4);
