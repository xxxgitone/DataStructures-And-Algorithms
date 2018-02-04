/**
 * Reverse a singly linked list.
 */

 /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

function createLinkedList (arr, n) {
  if (n === 0) return null

  var head = new ListNode(arr[0])

  var curNode = head

  for(var i = 1; i < n; i++) {
    curNode.next = new ListNode(arr[i])
    curNode = curNode.next
  }

  return head
}

function printLinkedList (head) {
  var curNode = head
  var str = ''
  while (curNode !== null) {
    str += curNode.val + '-->'
    curNode = curNode.next
  }
  str += 'null'
  console.log(str)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 反转后头指针的next指向null
 */
var reverseList = function(head) {
  
  // 上一个
  var pre = null
  // 当前处理
  var cur = head

  while (cur !== null) {
    // 下一个
    var next = cur.next

    cur.next = pre
    pre = cur
    cur = next
  }

  return pre
  
}

var arr = [1,2,3,4,5]
var n = arr.length

var head = createLinkedList(arr, n)
printLinkedList(head)
var head2 = reverseList(head)
printLinkedList(head2)