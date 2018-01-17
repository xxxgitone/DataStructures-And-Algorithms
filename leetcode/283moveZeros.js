/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

  * Note:
  *   1.You must do this in-place without making a copy of the array.
  *   2.Minimize the total number of operations.

  * 给定一个数组,写一个函数,讲数组中所有的0挪到s数组的末尾,而维持其他所有非0元素的相对位置
 */

 // 解法1
var moveZeroes = function(nums) {
    var nonZeroElements = []

    // 将非0值保存到nonZeroElements
    for (var i = 0; i < nums.length; i++) {
      if (nums[i]) {
        nonZeroElements.push(nums[i])
      }
    }

    // 将非0元素重新赋值到nums
    for (var i = 0; i < nonZeroElements.length; i++) {
      nums[i] = nonZeroElements[i]
    }

    // 将剩余的补全为0
    for (var i = nonZeroElements.length; i < nums.length; i++) {
      nums[i] = 0
    }

    // console.log(nums)
};

moveZeroes([0,2,3,0,4,6,0,6])