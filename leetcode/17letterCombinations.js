/**
 * Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

a --> d
a --> e
a --> f

b --> d
b --> e
b --> f

c --> d
c --> e
c --> f

给出一个数字字符串,返回这个数字字符串表示的所有字母组合

树形问题

递归返回 --> 回溯

 */

 /**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var letterMap = [
    ' ', //0
    '', // 1
    'abc', // 2
    'def', // 3
    'ghi', // 4
    'jkl', // 5
    'mon', // 6
    'pqrs', // 7
    'tuv', // 8
    'wxyz' // 9
  ]
  // s中保存了此时从digits[0...index-1]翻译得到的一个字母字符串
  // 寻找和digits[index]匹配的字母,获得digits[0...index]翻译得到的解
  var findCombination = function (digits, index, s) {
    console.log(index, s)
    if (index === digits.length) {
      res.push(s)
      console.log(`get ${s}, return`)
      return
    }
    var c = digits[index]
    var letters = letterMap[c - 0] // c - 0 转换成数字
    for (var i = 0; i < letters.length; i++) {
      console.log(`digits[${index}]=${c}, use ${letters[i]}`)
      findCombination(digits, index + 1, s + letters[i])
    }
    console.log(`digits[${index}]=${c} complate, return`)
    return
  }

  var res = []

  if (digits === '') return res
  findCombination(digits, 0, '')
  return res
}

var res = letterCombinations('234')
console.log(res)
