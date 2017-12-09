/**
 * 快速排序思想
 * 1） 从数组中选择中间一项作为主元
 * 2） 创建两个指针，左边一个指向数组第一项，右边一个指向数组最后一项。移动左指针直到找到一个比主元大的元素，
 *    接着，移动右指针直到找到一个比主元小的元素，然后交换他们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值
 *    都在主元之前，大的都在主元之后。这个过程叫做划分操作
 * 3） 接着，算法对划分操作后的小数组（较主元小的值组成的子数组，以及较主元大的值组成的子数组）重复之前的两个步骤，直到      数组已完全排序 
* @param {待排序数组} array 
* @param {左边划分} left 
* @param {右边划分} right 
*/
function _quick (array, left, right) {
    var index

    if (array.length > 1) {
        index = _partition(array, left, right)

        if (left < index - 1) {
            _quick(array, left, index -1)
        }

        if (index < right) {
            _quick(array, index, right)
        }
    }
}

// 选择主元的方式有三种：一种是从左开始，一种是随机，还有一种是取中间
// 对于几乎排序的数组，选择从最左项性能最差，O(n^2)
// 下面演示取中间
function _partition (array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)]
        l = left,
        r = right
    
    while (l <= r) {
        while (array[l] < pivot) {
            l++
        }
        while (array[r] > pivot) {
            r--
        }
        if (l <= r) {
            swap(array, l, r)
            l++
            r--
        }
    }

    return l
}

function quickSort (array, left, right) {
    _quick(array, 0, array.length -1)
}

var n = 50000
var array = generateRandomArray(n, 0, n)
testSort('merge Sort', mergeSort, array.slice(0))
testSort('quick Sort', quickSort, array.slice(0), 0, n-1)
