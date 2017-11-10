// 冒泡排序：最简单，但是性能最差
// 原理：比较任何两个相邻的项，如果第一个比第二个大，则交换它们
// 元素向上移动至正确的顺序

function _swap (index1, index2) {
    var aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
}

function bubbleSort (array) {
    for (var i = 0; i < array.length; i++) { // 外循环控制了经过多少轮排序
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
              _swap(j, j + 1)
            }
        }
    }
}

// 改进的冒泡排序，前一轮已经确定的排序没有必要在比较一次
// 时间复杂度O(n^2)
function modifiedBubbleSort (array) {
    for (var i = 0; i < array.length; i++) { // 外循环控制了经过多少轮排序
        for (var j = 0; j < array.length - 1 - i; j++) { // 在内循环中减去已经排过的轮数
            if (array[j] > array[j + 1]) {
              _swap(j, j + 1)
            }
        }
    }
}
