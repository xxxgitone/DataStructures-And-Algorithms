/**
Desc:
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * 就是求一个字符串里面不重复字符串的最大长度
 * 例如 pwwkew，从首位开始，p, pw, pww，重复，继续查找: w, wk, wke, wkew, 重复，故最长不重复字符串为 wke，长度为 3
*/
/**
* @param {string} s
* @return {number}
* 遍历数组，并以值为键，索引为值
*/
var lengthOfLongestSubstring = function(s) {
  var map = {}
  var start = 0 // 子字符串的起始位置

  // reduce的回调函数有四个参数:第一个为累加器,第二个为当前值,第三个为当前索引(可选),第四个为遍历的数组(可选)
  return s.split('').reduce((max, value, index) => {
    // 如果出现重复值,则start+1
    start = map[value] >= start ? map[value] + 1 : start
    map[value] = index
    
    // 每次返回最大长度
    return Math.max(max, index - start + 1)
  }, 0)
}
console.log(lengthOfLongestSubstring('pwwkew'))
