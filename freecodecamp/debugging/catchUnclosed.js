// Catch Unclosed Parentheses, Brackets, Braces and Quotes
// Fix the two pair errors in the code.

// before
// let myArray = [1, 2, 3;
// let arraySum = myArray.reduce((previous, current =>  previous + current);
// console.log(`Sum of array values is: ${arraySum}`);

// after
let myArray = [1, 2, 3];
    let arraySum = myArray.reduce((previous, current) =>  previous + current);
    console.log(`Sum of array values is: ${arraySum}`);