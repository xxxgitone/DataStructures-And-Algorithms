/**
 * Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

// 至少有一个解
You may assume that each input would have exactly one solution and you may not use the same element twice.

Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2

给定一个有序数组和一个整数target,在其中寻找两个元素,使其和为target, 返回这两个数的索引

返回数字2,7索引1,2(索引从1开始计算)

暴力解法: 双层循环
 */

 //该数组为有序数组
 // 取两个指针i,j分别对应对右边和最左边
 // 如果numbers[i] + numbers[j] < target i++
 // numbers[i] + numbers[j] > target j--

 // 对撞指针
var twoSum = function (numbers, target) {
  var l = 0, r = numbers.length - 1
  // 要找到两个不同的索引
  while (l < r) {
    if (numbers[l] + numbers[r] === target) {
      var res = [l+1, r+1]
      return res
    } else if (numbers[l] + numbers[r] < target) {
      l++
    } else {
      r--
    }
  }
}

console.log(twoSum([1,2,3,4,5,6,7], 9))
