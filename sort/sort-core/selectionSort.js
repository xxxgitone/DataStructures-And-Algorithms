/**
 * 选择排序
 * @param {Array} arr 
 * @param {length} n 
 */
function selectionSort (arr, n ) {

  for (var i = 0; i < n; i++) {

    // 寻找[i, n)区间里最小值,先假设这个区间的第一个数就是最小的(初始化)
    var minIndex = i
    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }

    swap(arr, i, minIndex)
  }

}

var array = [10,2,5,4,8,9,6,8,7,4]
selectionSort(array, 10)
console.log(array)