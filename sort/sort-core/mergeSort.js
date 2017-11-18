function _mergeSortRec (arr) {
  var len = arr.length
  if (len === 1) {
    return arr
  }

  var mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, len)
  
  return _merge(_mergeSortRec(left), _mergeSortRec(right))
}

function _merge (left, right) {
  var result = [],
    il = 0,
    ir = 0
  
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {// 如果left中的项比右边的小，则push到result中，反之
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }

    // 最后将left数组或者right数组所有剩余的项添加到归并数组中
    while (il < left.length) {
      result.push(left[il++])
    }

    while (ir < right.length) {
      result.push(right[ir++])
    }

    return result
}

//归并排序
function mergeSort (arr) {
  return _mergeSortRec(arr)
}

// var n = 50000
// var array = generateRandomArray(n, 0, n)
// testSort('merge Sort', mergeSort, array.slice(0))

