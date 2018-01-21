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
// function _quick (array, left, right) {
//     var index

//     if (array.length > 1) {
//         index = _partition(array, left, right)

//         if (left < index - 1) {
//             _quick(array, left, index -1)
//         }

//         if (index < right) {
//             _quick(array, index, right)
//         }
//     }
// }

// 选择主元的方式有三种：一种是从左开始，一种是随机，还有一种是取中间
// 对于几乎排序的数组，选择从最左项性能最差，O(n^2)
// 下面演示取中间
// function _partition (array, left, right) {
//     var pivot = array[Math.floor((left + right) / 2)]
//         l = left,
//         r = right
    
//     while (l <= r) {
//         while (array[l] < pivot) {
//             l++
//         }
//         while (array[r] > pivot) {
//             r--
//         }
//         if (l <= r) {
//             swap(array, l, r)
//             l++
//             r--
//         }
//     }

//     return l
// }

// function quickSort (array, left, right) {
//     _quick(array, 0, array.length -1)
// }

// 对arr[l...r]部分进行partition操作
// 返回p,使得arr[l...p-1] < arr[p]; arr[p+1...r] > arr[p]
function _partition (arr, l, r) {

    // 在近乎有序的数组中,选取第一个元素作为标定点,会导致快速排序
    // 退化成O(n^2)
    // 随机选取
    var aux = arr[Math.floor(Math.random() * (r - l + 1) + l)]
    swap(arr, l, aux)
    var v = arr[l] // 取第一个值

    // arr[l+1...j] < v; arr[j+1...i] > v
    var j = l // 相当于arr[l+1...j]不存在
    for (var i = l + 1; i <= r; i++) {
        if (arr[i] < v) {
            swap (arr, j+1, i)
            j++
        }
    }
    swap(arr, l, j)

    return j
}

// 对arr[l...r]部分进行快速排序
function _quickSort (arr, l, r) {
    if (l >= r) return

    var p = _partition(arr, l, r)
    _quickSort(arr, l, p-1)
    _quickSort(arr, p+1, r)
}

function quickSort (arr, n) {
    _quickSort(arr, 0, n - 1)
}



// 对于存在大量重复元素的数组,可以进行三路快排
// 三路快排处理arr[l...r]
// 将arr[l...r]分为 < v; ===v; >v三部分
// 之后递归对<v; >v两部分继续进行三路快速排序
function _quickSort3Ways (arr, l, r) {
    if (l >= r) return
    
    // partition
    var aux = arr[Math.floor(Math.random() * (r - l + 1) + l)]
    swap(arr, l, aux)
    var v = arr[l] 

    var lt = l // arr[l+1...lt] < v
    var gt = r + 1 // arr[gt...r] > v
    var i = l + 1 // arr[lt+1...i) === v

    while (i < gt) {
        if (arr[i] < v) {
            swap(arr, i, lt + 1)
            lt++
            i++
        } else if (arr[i] > v) {
            swap(arr, i, gt - 1)
            gt--
        } else {
            i++
        }
    }
    swap(arr[i], arr[lt])

    _quickSort3Ways(arr, l, lt-1)
    _quickSort3Ways(arr, gt, r)
}

function quickSort3Ways (arr, n) {
    _quickSort3Ways (arr, 0, n-1)
}

var n = 1000000
var array = generateRandomArray(n, 0, n)
function testSort (sortName, fun, arr, n) {
    console.time(sortName)
    fun(arr, n)
    console.timeEnd(sortName)
    console.log(arr)
}
testSort('quickSort', quickSort, array, n)