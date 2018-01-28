/**
 * Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.

求两个数组的公共元素

结果中每个元素只能出现一次
出现的顺序可以是任意的
 */

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var record = new Set()
  // 结果中不能出现重复的元素
  // 可以使用Set进行去重,Set不能包含重复的元素
  for (var i = 0; i < nums1.length; i++) {
    record.add(nums1[i])
  }

  var resultSet = new Set()
  for (var i = 0; i < nums2.length; i++) {
    if (record.has(nums2[i])) {
      resultSet.add(nums2[i])
    }
  }

  var result = []
  for (var item of resultSet) {
    result.push(item)
  }

  return result
}

console.log(intersection([1, 2, 2, 1],[2, 2]))