/**
 * Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

给定一个非空数组,返回前k个出现频率最高的元素

最简单的思路: 扫描一遍统计频率,排序找到前k个出现(map)

使用优先队列
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // 统计每个元素出现的频率
    var freq = {}
    for (var i = 0; i < nums.length; i++) {

    }
}

