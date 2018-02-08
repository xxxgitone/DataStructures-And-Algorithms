/**
 * Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,3,2].

中序遍历
Note: Recursive solution is trivial, could you do it iteratively?

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
var inorderTraversal = function(root) {
  var res = []
  if (!root) return res

  var stack = []
  stack.push(createCommand('go', root))

  while (stack.length) {

    var command = stack.pop()

    if (command.s === 'print') {
      res.push(command.node.val)
    } else { // go
      // 原本左中右
      // 栈为先进后出,所以先推入右节点
      if (command.node.right) {
        stack.push(createCommand('go', command.node.right))
      } 
      stack.push(createCommand('print', command.node))
      if (command.node.left) {
        stack.push(createCommand('go',command.node.left))
      }
    }
  }

  return res
}