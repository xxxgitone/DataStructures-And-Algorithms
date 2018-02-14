/**
 * 求一颗二叉树的最高深度
 * 
 * 从根节点到叶子节点的最长路径长度
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 一般写递归函数都分为两部分
// 一部分是终止条件
// 一部分是递归过程
var maxDepth = function (root) {
  if (!root) return 0 

  // 递归过程
  var leftMaxDepth = maxDepth(root.left)
  var rightMaxDepth = maxDepth(root.right)
  return Math.max(leftMaxDepth, rightMaxDepth) + 1

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}