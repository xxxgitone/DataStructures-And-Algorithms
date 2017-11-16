# 常见排序算法

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

function bubbleSort (arr, n) {
    for (var i = 0; i < n; i++) { // 外循环控制了经过多少轮排序
        for (var j = 0; j < n - 1 - i; j++) { // 在内循环中减去已经排过的轮数
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





