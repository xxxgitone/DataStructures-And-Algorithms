// 二叉搜索树(BST)是树的一种但是它只允许你在左侧节点存储(比父节点)小的值
// 在右侧存储(比父节点)大或者等于的值

/**
 * @constructor
 */
function BinarySearchTree () {

  // 节点
  const Node = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }

  let root = null // 根元素


  const insertNode = function (node, newNode) {
    // 如果值比父节点值小
    if (newNode.key < node.key) {
      // 如果父节点右边为null
      if (node.left === null) {
        node.left = newNode
      } else {
        // 继续递归
        insertNode(node.left, newNode)
      }
    } else { // 比父节点大或等于
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  /**
   * 向树中插入一个值
   * @param {键值} key 
   */
  this.insert = function (key) {
    const newNode = new Node(key)

    if (root === null) { // 如果根元素不存在
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }
  
  this.

}

let tree = new BinarySearchTree()
tree.insert(11)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)