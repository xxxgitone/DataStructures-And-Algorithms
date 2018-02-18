/**
 * You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11

给出一棵二叉树以及一个数字sum,判断在这棵树上存在多少条路径,其路径上的所有节点和
为sum

其中路径不一定是要起始于根节点,终止于叶子节点

路径可以从任意节点开始,但是只能向下走的
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
 * @return {number}
 */
var pathSum = function(root, sum) {
  // 在以node为根节点的二叉树中,寻找包含node的路径,和为sum
  // 返回这样的路径个数
  var findPath = function (node, num) {
    if (node === null) return 0

    var res = 0

    if (node.val === num) {
      res += 1
    }

    res += findPath(node.left, num - node.val)
    res += findPath(node.right, num - node.val)

    return res
  }

  if (root === null) return 0

  var res = findPath(root, sum)
  res += pathSum(root.left, sum)
  res += pathSum(root.right, sum)

  return res
}