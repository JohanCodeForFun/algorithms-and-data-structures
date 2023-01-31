// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// var twoSum = function (nums, target) {
//   let pointer1 = 0;
//   let pointer2 = 0;
// }

var twoSum = function (nums, target) {
  let indexOfTarget = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      indexOfTarget.push(nums.indexOf(nums[i]), nums.indexOf(nums[i + 1]));
      console.log(nums.indexOf(nums[i]), nums.indexOf(nums[i + 1]));
      return indexOfTarget;
    }
  }
  return indexOfTarget;
};

const case1 = twoSum([2, 7, 11, 15], 9);
const case2 = twoSum([3, 3], 6);
// console.log(case2);
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
