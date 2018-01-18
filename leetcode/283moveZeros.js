/**
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

  * For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

  * Note:
  *   1.You must do this in-place without making a copy of the array.
  *   2.Minimize the total number of operations.

  * 给定一个数组,写一个函数,讲数组中所有的0挪到s数组的末尾,而维持其他所有非0元素的相对位置
 */

 // 解法1
 // 时间复杂度: O(n)
 // 空间复杂度: O(n),利用了额外的存储空间
var moveZeroes1 = function(nums) {
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

/**
 * 优化
 * 
 */
  // 时间复杂度: O(n)
 // 空间复杂度: O(1)
var moveZeroes2 = function (nums) {
  var k = 0 // nums中,[0...k)的元素均为非0元素

  // 遍历到第i个元素后,保证[0...i]中所有非0元素都按照顺序排列在[0...k)中
  for (var i = 0; i < nums.length; i++) {
    if (nums[i]) { // 如果nums[i]不为0
      nums[k++] = nums[i]
    }
  }
  for (var i = k; i < nums.length; i++) {
    nums[i] = 0
  }
}

// 优化3
var moveZeroes3 = function (nums) {
  var k = 0 // nums中,[0...k)的元素均为非0元素

  // 遍历到第i个元素后,保证[0...i]中所有非0元素都按照顺序排列在[0...k)中
  // 同时, [k...i]中为0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i]) { // 如果nums[i]不为0
      // 如果全为0的时候,都会跟自身交换,增加判断
      // 或者起始几个值都不为0
      if (i !== k) {
        var aux = nums[k]
        nums[k] = nums[i]
        nums[i] = aux
        k++
      } else { // i===k
        k++
      }
    }
  }
  console.log(nums)
}

moveZeroes1([0,2,3,0,4,6,0,6])
moveZeroes2([0,2,3,0,4,6,0,6])
moveZeroes3([0,2,3,0,4,6,0,6])