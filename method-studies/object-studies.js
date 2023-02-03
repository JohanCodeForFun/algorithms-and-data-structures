//
// Object Studies
// How to iterate over objects
//

let obj = {
  name: "Johan",
  age: 38,
  occupation: "Programmer",
};

console.log(obj, Object.entries(obj).length);

for (const key of Object.keys(obj)) {
  console.log(obj[key]);
}

let arr = ["one", "two", "three", "four", "five"];
let family = [
  {
    firstName: "Johan",
    lastName: "Hellberg",
    age: 38,
    skills: "JavaScript Developer",
  },
  {
    firstName: "Charlotta",
    lastName: "Hindsefelt",
    age: 37,
    skills: "Mother",
  },
  {
    firstName: "Stephanie",
    lastName: "Hellberg Hindsefelt",
    age: 1.5,
    skills: "Playing and hiding stuff",
  },
];

// How do I loop through or enumerate a JavaScript object?
// https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
// for (var prop in p) {
//   if (!p.hasOwnProperty(prop)) {
//     //The current property is not a direct property of p
//     continue;
//   }
//   //Do your logic with the property here
// }

console.log(family.length);
console.log(family);

console.log("----- METHOD #0 -----");
// how do i get this to work as method 1-3?
for (let i = 0; i < family.length; i++) {
  console.log(family[i], " for let i++");
  for (let j = 0; i < family[i].length; j++) {}
}

console.log("----- METHOD #1 -----");
for (let person of family) {
  for (i in person) {
    console.log(i, person[i]);
  }
}

console.log("----- METHOD #2 -----");
for (const person of family) {
  for (const key of Object.keys(person)) {
    console.log(`${key} => ${person[key]}`);
  }
}

console.log("----- METHOD #3 -----");
for (const person of family) {
  for (const [key, value] of Object.entries(person)) {
    console.log(`${key} => ${value}`);
  }
}
