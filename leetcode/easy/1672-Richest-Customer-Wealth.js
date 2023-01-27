// 1672. Richest Customer Wealth - Easy
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

const maximumWealth = (accounts) => {
  let result = 0;

  for (let i = 0; i < accounts.length; i++) {
    let temp = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      temp += accounts[i][j];
    }
    result = Math.max(result, temp);
  }
  return result;
};

// Time complexity = O(n x m)
// Space Complexity = O(1)

// solution with forEach and reduce
// const maximumWealth = function (accounts) {
//   let result = 0;
//   accounts.forEach((item) => {
//     const temp = item.reduce((acc, prev) => {
//       return acc + prev;
//     }, 0);
//     result = Math.max(result, temp);
//   });
//   return result;
// };

// another solution with for of
// helper function to get sum of customer balance
// const getSumOfCustomerBalance = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };

// const maximumWealth = (accounts) => {
//   let customer = 0;
//   for (let balance of accounts) {
//     const currentWealth = getSumOfCustomerBalance(balance); //get total balance of person
//     customer = Math.max(customer, currentWealth);
//   }
//   return customer;
// };

// Accounts, test cases
const case1 = maximumWealth([
  [1, 2, 3],
  [3, 2, 1],
]);
const case2 = maximumWealth([
  [1, 5],
  [7, 3],
  [3, 5],
]);
const case3 = maximumWealth([
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
]);
console.log(case1);
console.log(case2);
console.log(case3);
