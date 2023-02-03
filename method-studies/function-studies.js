//
// Function Studies
// How to write functions in  functions
//

const test = (name) => {
  return "Hello, " + name;
};
console.log(test("kalle"));

// Alternative to switch case
// How to use Object Literals in JavaScript to write complex conditions? (medium article)
// Nice sätt att skriva kort och lätt läst kod och hämta case.
const getDogQoute = (breed) => {
  const breeds = {
    stor: "Stor hund är generellt trygg och skäller lite",
    mellan: "Mellan hund, kul att leka med",
    liten: "Liten hund, jobbig jävel som gnäller mycket",
  };

  return breeds[breed] ?? "Fel meddelande";
};

console.log(getDogQoute("liten"));

// Arguments Optional, from FreeCodeCamp Intermediate Algorithm Scripting
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// Studied solution from Useful Programmer and Dylan Israel @ youtube.
// Studied solution from hint section.

function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  // how does ...return (second) => addTogether(first, second); work???
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}

console.log(addTogether(2, 3)); // should return 5.
console.log(addTogether(5)(7)); // should return 12.

// Roman Numeral Converter - Final Project #2
// Convert the given number into a roman numeral.

function convertToRoman(num) {
  let romanCounter = num;
  let result = "";

  const myMap = new Map();
  myMap.set(5, (result = "V"));
  myMap.set(4, (result = "IV"));
  myMap.set(1, (result = "I"));
  // console.log(myMap);

  // for (let [key, value] of myMap) {
  //   console.log(key, value);
  // }

  const getRomanNumeral = (number) => {
    const romanNumeral = {
      5: "V",
      4: "IV",
      3: "III",
      2: "II",
      1: "I",
      0: "",
    };

    return romanNumeral[number] ?? number;
  };

  for (let i = num; i <= romanCounter; i--) {
    result += getRomanNumeral(i);
    romanCounter -= i;
  }

  // for (let i = 0; i < romanCounter; i++) {
  //   result += myMap.get(myMap[i]);
  //   console.log(result);
  //   romanCounter--;
  // }
  return result;

  // for (let i = 0; i < romanCounter; i++) {
  // while (romanCounter !== 0) {
  //   switch (romanCounter) {
  //     case 10:
  //       result += "X";
  //       romanCounter -= 10;
  //       console.log("case 10", romanCounter, result);
  //     case 9:
  //       console.log("case 9", romanCounter, result);
  //       result += "IX";
  //       romanCounter -= 9;
  //     case 5:
  //       console.log("case 5", romanCounter, result);
  //       result += "V";
  //       romanCounter -= 5;
  //       break;
  //     case 4:
  //       result += "IV";
  //       romanCounter -= 4;
  //       break;
  //     case 3:
  //     case 2:
  //     case 1:
  //       result += "I";
  //       romanCounter -= 1;
  //       break;
  //     default:
  //       romanCounter--;
  //       console.log("Default: End of switch.", romanCounter);
  //       break;
  //   }
  //   if (romanCounter === 0) {
  //     console.log("romanCounter === 0");
  //     return result;
  //   }
  //   return result;
  // }
}

const case1 = convertToRoman(10);
console.log(case1);

// Tests
// convertToRoman(2) should return the string II.
// convertToRoman(3) should return the string III.
// convertToRoman(4) should return the string IV.
// convertToRoman(5) should return the string V.
// convertToRoman(9) should return the string IX.
// convertToRoman(12) should return the string XII.
