/**
 * Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

给定一个有n个元素的数组,数组中的元素取值只有0,1,2三种可能,为这个数组排序

在没有思路的情况下,暴力解法,可以使用任意一种排序算法,没有使用上题目中给出的特殊条件

直接使用sort()都可以解决
 */

 // 计数排序
 // 统计各个数出现的次数,然后在放回数组
//  时间复杂度: O(n)
// 空间复杂度: O(k) k为元素的取值范围
var sortColors1 = function (nums) {
  // 这里开辟的新的空间
  // 跟元素的范围有关
  var count = [] // 存放0,1,2元素的频率
  for (var i = 0; i < nums.length; i++) {
    if (!count[nums[i]]) {
      count[nums[i]] = 1
    } else {
      count[nums[i]]++
    }
  }

  var index = 0
  for (var i = 0; i < count[0]; i++) {
    nums[index++] = 0
  }

  for (var i = 0; i < count[1]; i++) {
    nums[index++] = 1
  }

  for (var i = 0; i < count[2]; i++) {
    nums[index++] = 2
  }
}

// 三路快排
// 存在很多重复的数
// 时间复杂度: O(n)
// 空间复杂度: O(1)
// 只遍历一次
var sortColors2 = function (nums) {
  var n = nums.length
  var zero = -1 // nums[0, zero] === 0
  var two = n // nums[two...n-1] === 2

  for (var i = 0; i < two; ) {
    if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      two--
      var aux = nums[i]
      nums[i] = nums[two]
      nums[two] = aux
    } else if (nums[i] === 0) {
      zero++
      var aux = nums[i]
      nums[i] = nums[zero]
      nums[zero] = aux
      i++
    }
  }
  console.log(nums)
}

sortColors2([0,2,1,2,0,1])


