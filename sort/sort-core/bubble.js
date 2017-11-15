// 冒泡排序：最简单，但是性能最差
// 原理：比较任何两个相邻的项，如果第一个比第二个大，则交换它们
// 元素向上移动至正确的顺序

function bubbleSort (arr, n) {
    for (var i = 0; i < n; i++) { // 外循环控制了经过多少轮排序
        for (var j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
              swap(arr, j, j + 1)
            }
        }
    }
}

// 改进的冒泡排序，前一轮已经确定的排序没有必要在比较一次
function modifiedBubbleSort (arr, n) {
    for (var i = 0; i < n; i++) { // 外循环控制了经过多少轮排序
        for (var j = 0; j < n - 1 - i; j++) { // 在内循环中减去已经排过的轮数
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }
    }
}

var n = 10000
var array = generateRandomArray(n, 0, n)
testSort('Bubble Sort', bubbleSort, array.slice(0), n)
testSort('Modified Bubbkle Sort', modifiedBubbleSort, array.slice(0), n )
