// Use Prototype Properties to Reduce Duplicate Code
// Add a numLegs property to the prototype of Dog

function Dog(name) {
    this.name = name;
  }
  
  
  
  // Only change code above this line
  Dog.prototype.numLegs = 4;
  let beagle = new Dog("Snoopy");