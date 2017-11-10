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

    if (left < index -1) {
        _quick(array, left, index -1)
    } 

    if (index < right) {
        _quick(array, index, right)
    }
    
    return array
}

function _partition (array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)],
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
            _swap(array, l, r)
            l++
            r--
        }
    }
    return l
}

function _swap (array, index1, index2) {
    var aux = array[index1]
    array[index1] = array[index2]
    array[index2] = aux
}

function quickSort (array, left, right) {
    return _quick(array, 0, array.length -1)
}

var arr = [5,6,8,2,4,3,5,1,2,6]
console.log(quickSort(arr, 0, arr.length))
