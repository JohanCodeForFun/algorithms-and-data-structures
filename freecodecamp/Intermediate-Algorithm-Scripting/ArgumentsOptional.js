// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// Studied solution from Useful Programmer and Dylan Israel @ youtube.
// Studied solution from hint section.

function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (arguments.length === 1) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}

console.log(addTogether(2, 3)); // should return 5.
console.log(addTogether(5)(7)); // should return 12.
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); // should return undefined;
console.log(addTogether(2)([3])); // should return undefined.
console.log(addTogether("2", 3)); // should return undefined.
console.log(addTogether(5, undefined)); // should return undefined.
