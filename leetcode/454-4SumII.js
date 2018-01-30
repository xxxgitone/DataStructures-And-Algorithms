/**
 * Given four lists A, B, C, D of integer values, compute how many tuples (i, j, k, l) there are such that A[i] + B[j] + C[k] + D[l] is zero.

To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -2^28 to 2^28 - 1 and the result is guaranteed to be at most 2^31 - 1.

Example:

Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0

给出四个整型数组ABCD,寻找有多少ijkl的组合,使得A[i] + B[j] + C[k] + D[l] === 0
 */

var fourSumCount = function (A, B, C, D) {
  var record = {}
  // 先将CD可能出现的和存起来,放入查找表
  for (var i = 0; i < C.length; i++) {
    for (var j = 0; j < D.length; j++) {
      if (record[C[i] + D[j]]) {
        record[C[i] + D[j]]++
      } else {
        record[C[i] + D[j]] = 1
      }
    }
  }

  var res = 0
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B.length; j++) {
      if (record[0 - A[i] - B[j]]) {
        res += record[0 - A[i] - B[j]]
      }
    }
  }
  return res
}

console.log(fourSumCount([ 1, 2],[-2,-1],[-1, 2],[ 0, 2]))

