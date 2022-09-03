// Profile Lookup
// A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

// The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

// If both are true, then return the "value" of that property.

// If name does not correspond to any contacts then return the string No such contact.

// If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

// function lookUpProfile(name, prop) {

const index = contacts.find(function(findNameProp, index) {

    return findNameProp.firstName === 'Akira';
});

console.log(index);







// const lookUpProfile = contacts.find(x => {
//     const firstN = x.firstName;
//     return firstN === x;
// })

// const lookUpProfile = (name, prop) => contacts.find(x => x.firstName === name);

// let result = lookUpProfile('Sherlock', contacts);



// const lookUpProfile = (name, prop) => {
  // Only change code below this line



//   for (let i = 0; i < contacts.length; i++) {
//     let contact = contacts[i];

//     if (contact.firstName === name) {
//       if (contact[prop] != undefined) {
//       return contact[prop];
//     } 
//     return "No such property";
//   }
// }
//       return "No such contact";

  // Only change code above this line
// }
// console.log(lookUpProfile("Akira", "likes"));
// lookUpProfile("Akira", "likes");
