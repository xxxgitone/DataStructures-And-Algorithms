/**
 * Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k
 * 
 * 给出一个整型数组nums和一个整数k,是否存在索引i和j,使得nums[i] == nums[j]且i和j之间的差不超过k
 * 
 * 1.暴力解法O(n^2)
 * 
 * 2.滑动窗口+查找表
 *在k+1的区间内能不能找到两个相同值,没有的话就看下一个元素,并且减去区间最前面的一个元素

 O(n) 时间
 O(k) 空间
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  var record = new Set()
  //这里只要保持固定的窗口大小,所以可以不用设置l和r,只需保持长度就行
  for (var i = 0; i < nums.length; i++) {
    if (record.has(nums[i])) { // 如果有则返回true
      return true
    }

    record.add(nums[i])

    // 保持record中最多k个元素
    if (record.size === k + 1) {
      record.delete(nums[i - k])
    }
  }
  return false
}
