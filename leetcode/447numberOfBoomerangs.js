/**
 * Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]

给出一个平面上的n个点,寻找存在多个由这些点构成的三元组(i,j,k),使得i,j两点的距离等于i,k两点的距离.其中n最多为500,且所有的点的坐标的范围在[-10000,10000]之间

n最多500,说明n^2的算法可以解决

暴力解法n^3支撑不住



解法:
  取一个点i,然后用查找表记录每个点到i的距离,并记录个数,如果相同距离只有一个,说明不符合,两个说明有两种情况,三个则有六(3*2)种情况


*/

var numberOfBoomerangs = function (points) {

  // 没有开方,避免产生浮点数
  function dis (pa, pb) {
    return (pa[0] - pb[0]) * (pa[0] - pb[0]) + (pa[1] - pb[1]) * (pa[1] - pb[1])
  }

  var res = 0
  for (var i = 0; i < points.length; i++) {
    // 记录其余点到这个点的距离,值为键,次数为值
    var record = {}

    for (var j = 0; j < points.length; j++) {
      if (j !== i) {
        if (record[dis(points[i], points[j])]) {
          record[dis(points[i], points[j])]++
        } else {
          record[dis(points[i], points[j])] = 1
        }
      }
    }
    for (var k in record) {
      // if (record[k] >= 2) { // 这一句可以去除, 1-1=0
        res += record[k] * (record[k] - 1)
      // }
    }
  }

  return res
}

console.log(numberOfBoomerangs([[0,0],[1,0],[2,0]]))
