function swap (array, index1, index2) {
  var temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

// 生成有n个元素的随机数组，每个元素的随机范围为[rangel,rangeR]
function generateRandomArray (n, rangeL, rangeR) {
  var array = []
  for (var i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * (rangeR - rangeL + 1) + rangeL)
  }
  return array
}

// 测试是否排序完成
function isSorted (array) {
  var len = array.length
  for (var i = 0; i < len - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
  return true
}

// 测试性能
function testSort (sortName, fun, arr, left, right) {
  console.time(sortName)
  var newArr = fun(arr, left, right)
  console.timeEnd(sortName)
  newArr ? console.log(newArr) : console.log(arr)
  newArr ? console.log(isSorted(newArr)) : console.log(isSorted(arr))
}
