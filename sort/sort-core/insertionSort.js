/**
 * 
 * @param {array} arr 
 * @param {len} n 
 */
function insertionSort (arr, n) {
  
  for (var i = 1; i < n; i++) {
    // 寻找元素arr[i]合适的插入位置
    var j, temp = arr[i] // j保存元素temp应该插入的位置
    for (j = i; j > 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = temp
  }
}

var n = 10000
var array = generateRandomArray(n, 0, n)
testSort('Insertion Sort', insertionSort, array.slice(0), n)
testSort('Selection Sort', selectionSort, array.slice(0), n )
