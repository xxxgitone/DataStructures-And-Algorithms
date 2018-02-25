/**
 * Given a collection of distinct numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

排列问题

 */

 /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

  // p中保存了一个有index个元素的排列
  // 向这个排列的末尾添加第index+1个元素,获得一个有index+1个元素的排列
  var generatePermutation = function (nums, index, p) {
    if (index === nums.length) {
      console.log(res)
      res.push(p)
      return
    }

    for (var i = 0; i < nums.length; i++) {
      if (!used[i]) { //如果第i个元素没有被使用
        // 将nums[i]添加到p中
        p.push(nums[i])
        used[i] = true
        generatePermutation(nums, index+1, p)
        p.pop()
        used[i] = false
      }
    }
    return
  }

  var res = []
  var used = []
  if (nums.length === 0) {
    return res
  }
  var p = []
  generatePermutation(nums, 0, p)

  return res
}

console.log(permute([1,2,3]))
