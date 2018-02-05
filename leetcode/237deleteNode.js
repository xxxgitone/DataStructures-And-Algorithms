/**
 * 删除一个节点, 比如删除3节点new ListNode(3)
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /**
  * 参数为一个节点,所以无法访问到他的前一个节点,只能访问到后一个
  将后一个节点的值赋值给要删除的节点,后一个节点
  */
var deleteNode = function (node) {
  if (node === null) return

  // 则表示删除最后一个节点
  if (node.next === null) {
    node = null
  }

  node.val = node.next.val
  var delNode = node.next
  node.next = delNode.next
}
