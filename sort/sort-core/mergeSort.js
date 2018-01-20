// function _mergeSortRec (arr) {
//   var len = arr.length
//   if (len === 1) {
//     return arr
//   }

//   var mid = Math.floor(len / 2),
//     left = arr.slice(0, mid),
//     right = arr.slice(mid, len)
  
//   return _merge(_mergeSortRec(left), _mergeSortRec(right))
// }

// function _merge (left, right) {
//   var result = [],
//     il = 0,
//     ir = 0
  
//     while (il < left.length && ir < right.length) {
//       if (left[il] < right[ir]) {// 如果left中的项比右边的小，则push到result中，反之
//         result.push(left[il++])
//       } else {
//         result.push(right[ir++])
//       }
//     }

//     // 最后将left数组或者right数组所有剩余的项添加到归并数组中
//     while (il < left.length) {
//       result.push(left[il++])
//     }

//     while (ir < right.length) {
//       result.push(right[ir++])
//     }

//     return result
// }

// //归并排序
// function mergeSort (arr) {
//   return _mergeSortRec(arr)
// }

/**
 * 时间复杂度: O(nlogn)
 * 空间复杂度: O(n)
 * 先划分数组,每次二分,直到每一份长度都为1时则开始归并
 * 
 * 将整个数组分成两部分,左右两部分都是有序的
 */

// 先思考: 存在两个有序数组,如何归并?

function _merge (arr, l, mid, r) {
  var aux = [] // 大小为r-l+1

  for (var i = l; i <= r; i++) {
    // aux从0开始的
    // ,所以aux和arr存在l的偏移量
    aux[i - l] = arr[i]
  }

  var i = l, j = mid + 1

  for (var k = l; k <= r; k++) {
    if (i > mid) { // 说明右边还没有归并完
      arr[k] = aux[j - l]
      j++
    } else if (j > r) { // 说明左边还没有归并完
      arr[k] = aux[i - l]
      i++
    } else if (aux[i-l] < aux[j-l]) {
      arr[k] = aux[i - l]
      i++
    } else {
      arr[k] = aux[j - l]
      j++
    }
  }
}

// 递归调用归并排序,对arr[l...r]的范围进行排序
function _mergeSort (arr, l, r) {
  if (l >= r) return // 说明数组为只有一个长度或者为空

  var mid = Math.floor((l + r) / 2)
  _mergeSort(arr, l, mid)
  _mergeSort(arr, mid + 1, r)
  _merge(arr, l, mid, r)
}

function mergeSort (arr, n) {
  _mergeSort(arr, 0, n-1)
}

var n = 50000
// mergeSort([1,4,3,2,5,3,3], 7)
var array = generateRandomArray(n, 0, n)

function testSort (sortName, fun, arr) {
  console.time(sortName)
  fun(arr, arr.length)
  console.timeEnd(sortName)
  console.log(arr)
}

testSort('merge Sort', mergeSort, array.slice(0))

