/**
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
 * 
 * 
 * Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

  其实就是归并排序的重要一步,将两个有序数组合并成一个

  题目要求最终将nums2合并到nums1
 */

var merge = function (nums1, m, nums2, n) {
  var i = m - 1, 
    j = n - 1, 
    k = m + n -1
  
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--]
    } else {
      nums1[k--] = nums2[j--]
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }
  console.log(nums1)
}

merge([2, 0], 1, [1], 1)
