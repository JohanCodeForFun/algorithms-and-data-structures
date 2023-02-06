// Telephone Number Validator - Final Project #4
// Return true if the passed string looks like a valid US phone number.

function telephoneCheck(str) {
  const telephoneCheckCase2 = /(\d{3})\1\s|-\1(\d{4})/;
  // const telephoneCheckCase1 = /(\d{3})\2(\s|-)(\d{4})/;
  // const telephoneCheckCase2 = /(\d{3})\2(\s|-)(\d{4})/; // use \2 to repeat
  // const telephoneCheckCase1 = /(?=\d{3})(?=\d{3})(?=\d{4})/;
  console.log(str.match(telephoneCheckCase2));

  return telephoneCheckCase2.test(str);
  //   const personList = `First_Name: John, Last_Name: Doe
  // First_Name: Jane, Last_Name: Smith`;

  //   const regexpNames = /First_Name: (\w+), Last_Name: (\w+)/gm;
  //   for (const match of personList.matchAll(regexpNames)) {
  //     console.log(`Hello ${match[1]} ${match[2]}`);
  //   }
}

const case1 = telephoneCheck("555 555-5555");
const case2 = telephoneCheck("555555 5555");
const case3 = telephoneCheck("(555)555-5555");
console.log(case1);
console.log(case2);
console.log(case3);
