/**
 * Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

For example, given the array [2,3,1,2,4,3] and s = 7,
the subarray [4,3] has the minimal length under the problem constraint.

给定一个整型数组和一个数字s,找到数组中最短的一个连续子数组,使得连续子数组的数字和sum>=s

// 子数组
// [0,2,3,4,5]
// [0,2,5]也是上面数组的子数组,但不是连续的子数组

暴力解法: 遍历所有连续的子数组[i...j],双层循环

在一个窗口[i...j]中,改窗口为数组的一段连续子数组
计算该段各项之和sum,如果sum小于s,则将j+1,
当sum大于等于s后,记录当前子数组的长度,sum-nums[i]的值,然后i+1
 */


/**
 * 双索引技术: 滑动窗口
 * 
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 * 
 * // 时间复杂度: O(n)
 * // 空间复杂度: O(l)
 */
var minSubArrayLen = function(s, nums) {
    // 初始值希望不包括任何值,所以讲r=-1,如果为0则包含nums[0]
    var l = 0, r = -1 // nums[l...r]为滑动的窗口
    var sum = 0
    // 记录当前符合条件的最小的连续子数组,这里不可能存在
    var res = nums.length + 1

    // 左边界能取到值,右边界也肯定可以,滑动窗口存在则就可以进行
    while (l < nums.length) {
      // r + 1不能越界,因为下面会进行r++操作,越界
      if (r + 1 < nums.length && sum < s) {
        r++
        sum += nums[r]
      } else { // sum >= s
        sum -= nums[l]
        l++
      }

      if (sum >= s) {
        res = Math.min(res, r-l+1)
      }
    }
    if (res === nums.length + 1) {
      return 0
    }
    return res
}
