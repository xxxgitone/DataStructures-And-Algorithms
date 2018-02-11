/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

对一个二叉树进行层序遍历
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  var res = []
  if (!root) return res
  
  // 队列
  // 先进先出
  var queue = []
  queue.push({node: root, level: 0})

  while (queue.length) {
    var q = queue.shift()
    var node = q.node
    var level = q.level

    if (level === res.length) {
      res.push([])
    }
    res[level].push(node.val)

    if (node.left) {
      queue.push({node: node.left, level: level + 1})
    }
    if (node.right) {
      queue.push({node: node.right, level: level + 1})
    }
  }
  return res
}