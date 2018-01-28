/**
 * Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter. 

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 */

var findAnagrams = function (s, p) {
  var res = []
  if (s === null || s.length === 0 || p === null || p.length === 0) return list

  var hash = {}
  for (var i = 0; i < p.length; i++) {
    var c = p.charAt(i)
    !hash[c] ? hash[c] = 1 : hash[c]++
  }

  var l = 0, r = -1, count = p.length
  while (r + 1 < s.length) {
    if (hash[s.charAt(r+1)] >= 1) {
      count--
    }
    hash[s.charAt(r+1)]--
    r++

    if (count === 0) {
      res.push(l)
    }

    // 当找到满足条件的子字符串后
    // 然后缩小窗口
    if (r - l + 1 === p.length) {
      if (hash[s.charAt(l)] >= 0) {
        count++
      }
      // 将改字符串最后边的字符次数加1
      // 下一次循环,判断r位置的字符是否和此次记录的值相同
      hash[s.charAt(l)]++
      l++
    }
  }
  return res
}

console.log(findAnagrams('cbaebabacd', 'abc'))