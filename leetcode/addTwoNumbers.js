/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 *
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var l = new ListNode(0)
  // 这里重新将l赋值给nextList是因为对象为引用类型,当nextList改变的时候也会改变l
  // 在while循环中需要将nextList重新赋值,如果直接操作l会将之前存储的数据覆盖掉
  var nextList = l
  var carry = 0

  while(l1 || l2) {
      var value1 = l1 ? l1.val : 0
      var value2 = l2 ? l2.val : 0

      var sum = value1 + value2 + carry
      var val = sum % 10
      carry = Math.floor(sum / 10)

      nextList.next = new ListNode(val)
      nextList = nextList.next

      l1 = l1 ? l1.next : null
      l2 = l2 ? l2.next : null
  }

  // while循环结束后,还得考虑最后进位的情况
  // 如果是 [5], [5]，则和为 10，即 0 -> 1
  if (carry > 0) {
      nextList.next = new ListNode(carry)
  }

  //
  return l.next
}