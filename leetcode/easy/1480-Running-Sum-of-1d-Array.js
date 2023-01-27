// 1480. Running Sum of 1d Array - Easy
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// solution with reduce
const runningSum = (nums) => {
  nums.reduce((acc, curr, index, arr) => (arr[index] += acc));
  return nums;
};

// solution with for loop
// var runningSum = function (nums) {
//   let currentSum = nums[0];
//   let sumNums = [];
//   sumNums.push(currentSum);

//   for (let i = 1; i < nums.length; i++) {
//     currentSum += nums[i];
//     sumNums.push(currentSum);
//   }

//   return sumNums;
// };

const result = runningSum([1, 1, 1, 1, 1]);
console.log(result);
