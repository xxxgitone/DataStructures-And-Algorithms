/**
 * 选择排序
 * @param {Array} arr 
 * @param {length} n 
 */
function selectionSort (arr) {
  var len = arr.length

  for (var i = 0; i < len; i++) {

    // 寻找[i, n)区间里最小值,先假设这个区间的第一个数就是最小的(初始化)
    var minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    swap(arr, i, minIndex)
  }

}

// var n = 100000
// var array = generateRandomArray(n, 0, n)
// testSort('Selection Sort', selectionSort, array)