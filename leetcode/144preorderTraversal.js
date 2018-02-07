/**
 * Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree [1,null,2,3],
   1
    \
     2
    /
   3
return [1,2,3].

先序遍历: 中左右

Note: Recursive solution is trivial, could you do it iteratively?

不使用递归?

使用栈模拟函数调用
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 /**
  * @param {String} s 命令 go print
    @param {TreeNode} node 节点
  */
var command = function (s, node) {
  return {
    s: s,
    node: node
  }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var res = []
  if (!root) return res

  var stack = []
  stack.push(command('go', root))

  while (stack.length) {

    var command = stack.pop()

    if (command.s === 'print') {
      res.push(command.node.val)
    } else { // go
      // 原本中左右
      // 栈为先进后出,所以先推入右节点
      if (command.node.right) {
        stack.push(command('go', command.node.right))
      } 
      if (command.node.right) {
        stack.push(command('go',command.node.left))
      }
      stack.push(command.push('print', command.node))
    }
  }

  return res
}