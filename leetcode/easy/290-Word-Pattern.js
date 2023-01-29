// 290. Word Pattern
// Given a pattern and a string s, find if s follows the same pattern.
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function (pattern, s) {
  // place words into an array
  sArr = s.split(" ");

  // if the pattern is lopsided return false
  if (pattern.length !== sArr.length) return false;

  // create a key map and value map
  /* as a caveat, we can't use one map here
   * in the edge-case that a pattern key
   * and values in s contain the same characters
   *
   * eg. pattern = 'abc', s = 'c b a'
   */
  const keyMap = {}; // key map
  const vMap = {}; // value map

  for (let i = 0; i < pattern.length; i++) {
    const key = pattern[i]; // letter at index i in pattern
    const value = sArr[i]; // word at index i in s

    // if key or value already exists and does not correspond to
    // eachother, return false because we don't have a valid pattern
    if (key in keyMap || value in vMap) {
      if (keyMap[key] !== value) return false;
      if (vMap[value] !== key) return false;
    } else {
      keyMap[key] = value;
      vMap[value] = key;
    }
  }

  return true; // pattern is valid
};

// solution with Map()
// var wordPattern = function (pattern, str) {
//   const words = str.split(/\s+/);
//   const map = new Map();
//   console.log(words);

//   if (words.length !== pattern.length) return false;
//   if (new Set(words).size !== new Set(pattern).size) return false;

//   for (let i = 0; i < pattern.length; i++) {
//     if (map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) return false;
//     map.set(pattern[i], words[i]);
//   }
//   return true;
// };

// var wordPattern = function (pattern, s) {
//   const keyMap = {}; // dictionaryString
//   const valueMap = {}; // dictionaryPattern
//   const stringArr = s.split(" ");

//   if (pattern.length !== stringArr.length) return false;

//   for (let i = 0; i < pattern.length; i++) {
//     const key = pattern[i];
//     const value = stringArr[i];

//     console.log(key, keyMap);
//     if (key in keyMap || value in valueMap) {
//       console.log(keyMap[key]);
//       if (keyMap[key] !== value) return false;
//       if (valueMap[value] !== key) return false;
//     } else {
//       keyMap[key] = value;
//       valueMap[value] = key;
//     }
//   }
//   return true;
// };

const case1 = wordPattern("abba", "dog constructor constructor dog");
console.log(case1);
// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
