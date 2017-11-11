# 常见排序算法

### 快速排序(O(n^2))

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

