// 290. Word Pattern
// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const dictionaryString = {};
  const dictionaryPattern = {};
  const stringArr = s.split(" ");

  for (let i = 0; i < stringArr.length; i++) {
    if (dictionaryString[s[i]] !== dictionaryPattern[pattern[i]]) return false;

    dictionaryString[s[i]] = i;
    dictionaryPattern[pattern[i]] = i;
    console.log(dictionaryString, dictionaryPattern);
  }
  return true;
};

const case1 = wordPattern("abba", "dog cat cat dog");
console.log(case1);
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
