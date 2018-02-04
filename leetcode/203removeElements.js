/**
 * Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

  // 虚拟头节点
  var dummyHead = new ListNode(0)
  dummyHead.next = head
  var cur = head, pre = dummyHead
  while (cur !== null) {
      if (cur.val === val) {
          pre.next = cur.next
      } else {
          pre = pre.next
      }
      cur = cur.next
  }
  return dummyHead.next
}