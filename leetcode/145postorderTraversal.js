/**

后序遍历

使用非递归的方式,模拟函数栈调用
 */
var createCommand = function (s, node) {
  return {
    s: s,
    node: node
  }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  var res = []
  if (!root) return res

  var stack = []
  stack.push(createCommand('go', root))

  while (stack.length) {

    var command = stack.pop()

    if (command.s === 'print') {
      res.push(command.node.val)
    } else { // go
      // 原本左右中
      // 栈为先进后出,所以先推入值
      stack.push(createCommand('print', command.node))
      if (command.node.right) {
        stack.push(createCommand('go', command.node.right))
      }
      if (command.node.left) {
        stack.push(createCommand('go',command.node.left))
      }
    }
  }

  return res
}