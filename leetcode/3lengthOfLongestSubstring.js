/**
Desc:
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * 在一个字符串中寻找没有重复字母的最长子串
 * 例如 pwwkew，从首位开始，p, pw, pww，重复，继续查找: w, wk, wke, wkew, 重复，故最长不重复字符串为 wke，长度为 3
*/

var lengthOfLongestSubstring = function(s) {
  // 记录字符的频率
  var freq = {}
  var l = 0, r = -1 //滑动窗口为s[l...r]
  var res = 0 // 最长长度

  while (l < s.length) {
    if (r + 1 < s.length && !freq[s[r+1]]) { // 说明还没有出现重复值
      r++
      freq[s[r]] = 1
    } else {
      freq[s[l]] = 0
      l++
    }
    res = Math.max(res, r-l+1)
  }
  return res
}
console.log(lengthOfLongestSubstring('abcabcbb'))

// /**
// * @param {string} s
// * @return {number}
// * 遍历数组，并以值为键，索引为值
// */
// var lengthOfLongestSubstring = function(s) {
//   var map = {}
//   var start = 0 // 子字符串的起始位置

//   // reduce的回调函数有四个参数:第一个为累加器,第二个为当前值,第三个为当前索引(可选),第四个为遍历的数组(可选)
//   return s.split('').reduce((max, value, index) => {
//     // 如果出现重复值,则start+1
//     start = map[value] >= start ? map[value] + 1 : start
//     map[value] = index
    
//     // 每次返回最大长度
//     return Math.max(max, index - start + 1)
//   }, 0)
// }
// console.log(lengthOfLongestSubstring('pwwkew'))
