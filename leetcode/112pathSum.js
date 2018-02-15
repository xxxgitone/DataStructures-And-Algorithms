/**
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

给出一颗二叉树以及一个数字sum,判断在这棵二叉树上是否存在一条根到叶子的路径,
其路径上的所有带点和为sum
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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) return false

  // 要是叶子节点
  if (root.left === null && root.right === null) {
    return sum - root.val === 0
  }

  if (hasPathSum(root.left, sum - root.val)) {
    return true
  }

  if (hasPathSum(root.right, sum - root.val)) {
    return true
  }

  return false

  // return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
}