/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.

  Example:
  Given nums = [2, 7, 11, 15], target = 9,

  Because nums[0] + nums[1] = 2 + 7 = 9,
  return [0, 1].
 */

 /**
  * 使用value做键，index做值
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {}
  for (var i = 0, len = nums.length; i < len; i++) {
    var num = nums[i]
    if (map[target - num] !== undefined) {
      return [map[target - num], i]
    } else {
      map[num] = i
    }
  }
  return []
}



console.log(twoSum([1,5,6,8], 14))


