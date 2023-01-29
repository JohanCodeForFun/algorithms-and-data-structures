// LeetCode 75 - Study Plan: Day 2: String
// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const dictionaryS = {};
  const dictionaryT = {};

  for (let i = 0; i < s.length; i++) {
    if (dictionaryS[s[i]] !== dictionaryT[t[i]]) return false;

    dictionaryS[s[i]] = i;
    dictionaryT[t[i]] = i;
    console.log(
      "Line 18: ",
      s.charAt(i),
      dictionaryS[s[i]],
      t.charAt(i),
      dictionaryT[t[i]]
    );
    console.log(dictionaryS, dictionaryT);
  }
  return true;
};

// const case1 = isIsomorphic("egg", "add");
// const case2 = isIsomorphic("foo", "bar");
const case3 = isIsomorphic("paper", "title");
console.log(case3);
