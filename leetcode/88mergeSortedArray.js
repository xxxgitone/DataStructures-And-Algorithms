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
  var arr = []
  var index = 0
  for (var i = 0; i < m; i++) {
    arr[index++] = nums1[i]
  }
  for (var i = 0; i < n; i++) {
    arr[index++] = nums2[i]
  }

  // 取右边数组的第一个值为中间值
  var l = 0, mid = m - 1, r = m
  for (var k = 0; k < arr.length; k++) {
    if (l > mid) {
      nums1[k] = arr[r]
      r++
    } else if (r > arr.length) {
      nums1[k] = arr[l]
      l++
    } else if (arr[l] < arr[r]) {
      nums1[k] = arr[l]
      l++
    } else {
      nums1[k] = arr[r]
      r++
    }
  }
}

merge([1,3,5,6], 4, [1,4,7,8,10], 5)
