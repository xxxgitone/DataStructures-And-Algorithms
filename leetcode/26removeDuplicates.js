/**
 * Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.

// 简言之: 去重
// 空间复杂度 O(1),不开辟新的存储空间
 */

var removeDuplicates = function (nums) {
  var seen
  for (var i = 0; i < nums.length; i++) {
    if (seen === nums[i]) {
      nums.splice(i, 1)
      i--
    }
    seen = nums[i]
  }
  return nums.length
}

console.log(removeDuplicates([1,1,2]))


