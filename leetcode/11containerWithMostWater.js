/**
 * Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

给定一个数组,每一项为一个高度,计算两边高度和x轴组成的最大容器
 */


var maxArea = function (height) {
  var water = 0
  var l = 0, r = height.length - 1
  while (l < r) {
    var h = Math.min(height[l], height[r])
    water = Math.max(water, (r - l) * h)
    while (height[l] <= h && l < r) l++
    while (height[r] <= h && l < r) r--
  }
  return water
}

console.log(maxArea([1,1]))
