# 常见排序算法

[TOC]

| 排序算法 | 平均时间复杂度 |  最好情况  |  最坏情况  | 空间复杂度 |   排序方式   | 稳定性  |
| :--: | :-----: | :----: | :----: | :---: | :------: | :--: |
| 冒泡排序 | O(n^2)  |  O(n)  | O(n^2) | O(1)  | In-place |  稳定  |
| 选择排序 | O(n^2)  | O(n^2) | O(n^2) | O(1)  | In-place | 不稳定  |
| 插入排序 | O(n^2)  |  O(n)  | O(n^2) | O(1)  | In-place |  稳定  |

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

function selectionSort (arr, n ) {
  for (var i = 0; i < n; i++) {
    // 寻找[i, n)区间里最小值,先假设这个区间的第一个数就是最小的(初始化)
    var minIndex = i
    for (var j = i + 1; j < n; j++) {
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
```





