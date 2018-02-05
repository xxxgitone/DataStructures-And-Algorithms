/**
 * Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

 * 给定一个链表,交换其位置
 * 
 * 如 1->2->3->4->null
 * 返回 2->1->4->3->null
 * 只能对节点进行操作,不能修改节点的值
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var dummyHead = new ListNode(0)
  dummyHead.next = head

  var p = dummyHead
  while (p.next && p.next.next) {
    var node1 = p.next
    var node2 = node1.next
    var next = node2.next

    node2.next = node1
    node1.next = next
    p.next = node2
    
    p = node1
  }

  return dummyHead.next
}
