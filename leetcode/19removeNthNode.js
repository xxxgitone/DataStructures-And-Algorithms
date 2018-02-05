/**
 * 给定一个链表,删除倒数第n个节点
 * 1->2->3->4->5->null, n = 2
 * 返回: 1->2->3->5
 * 
 * 解法1: 先遍历一遍计算链表长度,再遍历一遍删除倒数第n个节点
 * 
 * 解法2:链表中双指针技术
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var removeNthFromEnd = function (head, n) {
  var dummyHead = new ListNode(0)
  dummyHead.next = head

  var p = dummyHead
  var q = dummyHead

  for (var i = 0; i < n + 1; i++) {
    q = q.next
  }

  while (q !== null) {
    p = p.next
    q = q.next
  }

  var delNode = p.next
  p.next = delNode.next

  return dummyHead.next
}