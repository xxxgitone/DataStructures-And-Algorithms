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
      if (left[il] < right[ir]) {
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }

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

var n = 50000
var array = generateRandomArray(n, 0, n)
testSort('Insertion Sort', insertionSort, array.slice(0))
testSort('merge Sort', mergeSort, array.slice(0))

