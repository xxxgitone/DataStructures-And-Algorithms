// 将arr[l...mid]和arr[mid+1...r]两部分进行归并
function _merge(arr, l, mid, r) {
  var aux
  for (var i = l; i <= r; i++) {
    aux[i - l] = arr[i]
  }

  var i = l, j = mid + 1
  for (var k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l]
      j++
    } else if (j > r) {
      arr[k] = aux[i - l]
    }

    if (aux[i - l] < aux[j -l]) {
      arr[k] = aux[i -l]
      i++
    } else {
      arr[k] = aux[j -l]
      j++
    }
  }
}

// 递归使用归并排序，对arr[l...r]的范围内进行排序
function _mergeSort(arr, l, r) {
  if(l >= r) {
    return
  }

  var mid = Math.floor((l + r) / 2)
  _mergeSort(arr, l, mid)
  _mergeSort(arr, mid + 1, r)
  _merge(arr, l, mid, r)
}

//归并排序
function mergeSort (arr, n) {
  _mergeSort(arr, 0, n-1)
}

var n = 50000
var array = generateRandomArray(n, 0, n)
// testSort('Insertion Sort', insertionSort, array.slice(0), n)
testSort('merge Sort', mergeSort, array.slice(0), n )

