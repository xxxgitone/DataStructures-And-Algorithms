/**
 * Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

// C4 2

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

组合问题

给出两个整数n和k,求1...n这n个数字中选出k个数字的所有组合
 */

 /**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  // 求解C(n, k),当前已经找到的组合存储在c中,需要从start开始搜索新的元素
  var generateCombinations = function (n, k, start, c) {
    if (c.length === k) {
      res.push(c)
      return
    }

    for (var i = start; i < n; i++) {
      c.push(i)
      generateCombinations(n, k, i + 1, c)
      c.pop()
    }
    return
  }
  
  var res = []
  if (n <= 0 || k <= 0 || k > n) return res
  var c = []
  generateCombinations(n, k, 1, c) 
  return res
}

console.log(combine(4,2))