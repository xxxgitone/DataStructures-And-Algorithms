// 数组的缺点: 在大多数语言中大小固定,移除和添加项成本高(在js不用我们去操作,但是背后实现还是这样)
// 链表在添加和移除元素的时候不需要移动其他元素,但是需要借助指针

/**
 * @constructor 
 */
function LinkedList () {

  // 节点
  let Node = function (element) {
    this.element = element
    this.next = null
  }

  let length = 0
  // 头节点
  let head = null

  /**
   * 向链表尾部添加新的项
   * @param {元素值} element 
   */
  this.append = function (element) {
    let node = new Node(element), 
      current

    if (head === null) {
      head = node 
    } else {
      current = head

      // 循环列表,找到最后一项
      while (current.next) {
        current = current.next
      }

      current.next = node
    }

    length++
  }

  /**
   * 向链表指定位置插入一个值
   * @param {位置} position 
   * @param {元素值} element 
   * @return {Boolean}
   */
  this.insert = function (position, element) {

    // 检查边界值
    if (position >= 0 && position <= length) {
      
      let node = new Node(element),
        current = head,
        previous,
        index = 0

      if (position === 0) {
        node.current = current
        head = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node
      }

      length++
      return true

    } else {
      return false
    }
  }

  /**
   * 从特定位置移除一项
   * @param {位置} position 
   * @return 被移除元素
   */
  this.removeAt = function (position) {

    // 检查越界值
    if (position > 1 && position < length) {
      let current = head, // 存储当前头指针
        previous,
        index = 0

      // 移除第一项的话
      if (position === 0) {
        head = current.next
      } else { // 如果不是第一项

        while (index++ < position) {
          previous = current
          current = current.next
        }

        // 讲previous与current的下一项连起来,跳过current
        previous.next = current.next
      }

      length--
      return current.element
    } else {
      return null
    }
  }

  /**
   * 返回元素在链表中的位置,没有返回-1
   * @param {元素值} element 
   */
  this.indexOf = function (element) {}
  /**
   * 判断是否为空
   * @return {Boolean}
   */
  this.isEmpty = function () {}
  /**
   * 包含元素个数
   */
  this.size = function () {}
  this.getHead = function () {}
  this.toString = function () {}
  this.print = function () {}
}