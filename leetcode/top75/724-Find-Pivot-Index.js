// 724. Find Pivot Index
// Given an array of integers nums, calculate the pivot index of this array.
// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */

let pivotIndex = (nums) => {
  let runningSum = 0;
  const sumOfArray = nums.reduce((acc, cur) => acc + cur);

  for (let i = 0; i < nums.length; i++) {
    const halfOfArray = (sumOfArray - nums[i]) / 2;
    if (runningSum === halfOfArray) {
      return i;
    } else {
      runningSum += nums[i];
    }
  }
  return -1;
};

// first try
// var pivotIndex = (nums) => {
//   let leftSum = 0;
//   let rightSum = 0;
//   const middleIndex = nums.length / 2;
//   console.log(nums[0]);
//   console.log(nums[1]);
//   console.log(nums[2]);

//   // left side
//   for (let i = 0; i < middleIndex; i++) {
//     leftSum += nums[i];
//     console.log("left side, ", nums[i]);
//   }

//   // right side
//   for (let i = Math.round(middleIndex) + 1; i < nums.length; i++) {
//     rightSum += nums[i];
//     console.log("right side, ", nums[i]);
//   }
//   console.log("left sum: ", leftSum, "right sum: ", rightSum);

//   if (rightSum === 0) {
//     return 0;
//   }
//   if (leftSum !== rightSum) {
//     return -1;
//   }
//   if (leftSum === rightSum) {
//     return middleIndex;
//   }
// };

const case1 = pivotIndex([1, 7, 3, 6, 5, 6]);
const case2 = pivotIndex([1, 2, 3]);
const case3 = pivotIndex([2, 1, -1]);
console.log(case1);
