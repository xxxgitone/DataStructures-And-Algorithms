/**
 * 思想:首先找到有序数组中的中间项,如果相等的话则找到对应的值,不相等的话,根据要查找的值大于或小于中间值分别到右边
 * 和左边继续查找,重复此过程.
 */

function binarySearch (array, n, target) {
  // 左边界和右边界值,在[l...r]的范围里寻找target
  // 在写算法的时候要明确自己定义的变量
  // 并且在书写循环的时候要时刻维护这些变量
  var l =  0, r = n - 1

  while (l <= r) { //当 l == r时,区间[l...r]依然是有效的,为一个值
    /**
     * l + r 当l和r足够大的时候,会整型溢出
     * l + Math.floor((r - l) / 2)
     */
    var mid = Math.floor((l + r) / 2)
    if (array[mid] === target) {
      return mid
    }
    if (target > array[mid]) { 
      l = mid + 1 // target在[mid+1...r]中
    } else {
      r = mid - 1 // target在[l...mid-1]中
    }
  }
  return -1
}

// 修改变量值
function binarySearch1 (array, n, target) {
  // 左边界和右边界值,在[l...r)的范围里寻找target  
  var l =  0, r = n

  while (l < r) { //当 l == r时,区间[l...r)依然是无效的
    var mid = Math.floor((l + r) / 2)
    if (array[mid] === target) {
      return mid
    }
    if (target > array[mid]) { 
      // mid不是,r也没有改变
      l = mid + 1 // target在[mid+1...r)中
    } else {
      r = mid // target在[l...mid)中
    }
  }
  return -1
}

var array = [1,4,5,7,8,9,12,34,54,67,89,90]
console.log(binarySearch1(array, array.length, 67))
