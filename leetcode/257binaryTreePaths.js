/**
 * Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]

给定一棵二叉树,返回所有表示从根节点到叶子节点路径的字符串
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var res = []

  if (root === null) return res 

  // 叶子节点
  if (root.left === null && root.right === null) {
    res.push(root.val + '') // 字符串
    return res
  }

  var leftS = binaryTreePaths(root.left)
  for (var i = 0; i < leftS.length; i++) {
    res.push(root.val + '->' + leftS[i])
  }

  var rightS = binaryTreePaths(root.right)
  for (var i = 0; i < rightS.length; i++) {
    res.push(root.val + '->' + rightS[i])
  }

  return res
}