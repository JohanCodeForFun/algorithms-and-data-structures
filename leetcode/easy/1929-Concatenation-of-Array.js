// 1929. Concatenation of Array - Easy
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

var getConcatenation = function (nums) {
  return [...nums, ...nums];
};

var getConcatenation = function (nums) {
  const result = [];
  result.push(...nums);
  result.push(...nums);
  return result;
};

const result = getConcatenation([1, 2, 1]);
console.log(result);
