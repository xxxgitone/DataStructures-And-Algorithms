# 常见排序算法

| 排序算法 |  平均时间复杂度   |    最好情况    |    最坏情况    |  空间复杂度   |   排序方式    | 稳定性  |
| :--: | :--------: | :--------: | :--------: | :------: | :-------: | :--: |
| 冒泡排序 |   O(n^2)   |    O(n)    |   O(n^2)   |   O(1)   | In-place  |  稳定  |
| 选择排序 |   O(n^2)   |   O(n^2)   |   O(n^2)   |   O(1)   | In-place  | 不稳定  |
| 插入排序 |   O(n^2)   |    O(n)    |   O(n^2)   |   O(1)   | In-place  |  稳定  |
| 归并排序 | O(n log n) | O(n log n) | O(n log n) |   O(n)   | Out-place |  稳定  |
| 快速排序 | O(n log n) | O(n log n) |   O(n^2)   | O(log n) | In-place  | 不稳定  |

### 选择排序

#### 算法原理

首先找到最小的一个元素，然后与第一个位置的数交换，然后从第二个位置继续寻找寻找其中一个最小的数，和第二个位置的数交换，以此类推。

![选择排序](https://raw.githubusercontent.com/xxxgitone/DataStructures-And-Algorithms/master/sort/sort-gif/selectionSort.gif)

```javascript
function swap (array, index1, index2) {
  var temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

function selectionSort (arr) {
  var len = arr.length
  
  for (var i = 0; i < len; i++) {
    // 寻找[i, n)区间里最小值,先假设这个区间的第一个数就是最小的(初始化)
    var minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) { // 寻找最小的数
        minIndex = j
      }
    }
    swap(arr, i, minIndex)
  }
}
```



### 插入排序

#### 算法原理

插入排序每次排一个数组项，以此方式构建最后的排序数组，假定第一项已经排序好了，接着，第二项和它进行比较，如果第二项大于它则不动，小于则把第二项放到第一项的位置，接着将第三项和前两项进行比较，以此类推。与选择排序相比，插入排序可以提前终止内层循环，理论上效率比选择排序更高。插入排序对于近乎有序的数排序所用时间会更短

![插入排序](https://raw.githubusercontent.com/xxxgitone/DataStructures-And-Algorithms/master/sort/sort-gif/insertionSort.gif)





```javascript
function insertionSort (arr) {
  var len = arr.length
  
  for (var i = 1; i < len; i++) {
    // 寻找元素arr[i]合适的插入位置
    var j, temp = arr[i] // j保存元素temp应该插入的位置
    for (j = i; j > 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = temp
  }
}
```



### 冒泡排序

#### 原理

最简单，但是性能最差，比较任何两个相邻的项，如果第一个比第二个大，则交换它们，元素向上移动至正确的顺序

![冒泡排序](https://raw.githubusercontent.com/xxxgitone/DataStructures-And-Algorithms/master/sort/sort-gif/bubbleSort.gif)

```javascript
function swap (array, index1, index2) {
  var temp = array[index1]
  array[index1] = array[index2]
  array[index2] = temp
}

function bubbleSort (arr) {
  var len = arr.length
  
  for (var i = 0; i < len; i++) { // 外循环控制了经过多少轮排序
    for (var j = 0; j < len - 1 - i; j++) { // 在内循环中减去已经排过的轮数
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }
}
```



### 归并排序

#### 原理

归并排序是一种分治算法，其思想是将原始数组切分成较小的数组，直到每个小数组只有一个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组

![归并排序](https://raw.githubusercontent.com/xxxgitone/DataStructures-And-Algorithms/master/sort/sort-gif/merge.gif)

```javascript
function _mergeSortRec (arr) {
  var len = arr.length
  if (len === 1) {
    return arr
  }

  var mid = Math.floor(len / 2),
    left = arr.slice(0, mid),
    right = arr.slice(mid, len)
  
  return _merge(_mergeSortRec(left), _mergeSortRec(right))
}

function _merge (left, right) {
  var result = [],
    il = 0,
    ir = 0
  
    while (il < left.length && ir < right.length) {
      if (left[il] < right[ir]) {// 如果left中的项比右边的小，则push到result中，反之
        result.push(left[il++])
      } else {
        result.push(right[ir++])
      }
    }

    // 最后将left数组或者right数组所有剩余的项添加到归并数组中
    while (il < left.length) {
      result.push(left[il++])
    }

    while (ir < right.length) {
      result.push(right[ir++])
    }

    return result
}

//归并排序
function mergeSort (arr) {
  return _mergeSortRec(arr)
}
```

### 快速排序

#### 原理

1. 首先，从数组中选择中间一项作为主元

2. 创建两个指针，左边一个指向数组第一个项，右边一个指向数组最后一个项。移动左指针直到我们找到一个比主元大的元素，接着，移动右指针找到一个比主元小的元素，然后交换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元之前，而比主元大的都在主元之后。这一步交划分。

3. 接着，算法对划分后的小数组重复之前的两个步骤，直至数组已完全排序。

   ![快速排序](https://raw.githubusercontent.com/xxxgitone/DataStructures-And-Algorithms/master/sort/sort-gif/quickSort.gif)

```javascript
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
```







