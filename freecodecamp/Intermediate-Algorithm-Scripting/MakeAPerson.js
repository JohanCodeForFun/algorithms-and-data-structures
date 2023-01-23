// Make a Person

const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly

  let firstAndLastSplit = firstAndLast.split(" ");
  let firstName = firstAndLastSplit[0];
  let lastName = firstAndLastSplit[1];

  this.getFullName = function (firstAndLast) {
    if (firstAndLast !== undefined) {
      return `${firstName} ${firstAndLast}`;
    } else {
      return `${firstName} ${lastName}`;
    }
  };
  this.getFirstName = () => {
    return firstName;
  };
  this.getLastName = () => {
    return lastName;
  };

  this.setFirstName = (first) => {
    if (first === undefined) {
      return `${firstName} ${lastName}`;
    } else {
      firstName = first;
      return `${first} ${lastName}`;
    }
  };
  this.setLastName = (last) => {
    lastName = last;
    return `${firstName} ${lastName}`;
  };
  this.setFullName = function (firstAndLast) {
    firstAndLastSplit = firstAndLast.split(" ");
    firstName = firstAndLastSplit[0];
    lastName = firstAndLastSplit[1];

    return `${firstName} ${lastName}`;
  };

  return firstAndLast;
};

const bob = new Person("Bob Ross");
// console.log(bob.getFullName());
// console.log(Object.keys(bob).length)

// console.log(bob.getFullName());
// console.log(bob.setFirstName("Haskel"));
// console.log(bob.getFullName());
// bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").

console.log(bob.getFirstName());
// console.log(bob.getLastName());
// console.log(bob.getFullName());
// console.log(bob.setLastName('Curry'));
// console.log(setLastName(lastName));
// console.log(bob.setFullName("Haskell Curry"));

// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(firstName)
// setLastName(lastName)
// setFullName(firstAndLast)
