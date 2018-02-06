/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

 */

var isValid = function (s) {
  // 模拟栈
  var stack = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i])
    } else {
      if (stack.length === 0) {
        return false
      } else {
        // 移除栈顶元素
        var c = stack.pop()

        var match
        if (s[i] === ')') {
          match = '('
        } else if (s[i] === ']') {
          match = '['
        } else {
          match = '{'
        }
        if (match !== c) {
          return false
        }
      }
    }
  }
  if (stack.length !== 0) { // 说明栈中还有元素
    return false
  }
  return true
}
