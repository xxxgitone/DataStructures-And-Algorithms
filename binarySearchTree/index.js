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
  
  /**
   * 中序遍历(左中右)
   * 中序遍历是一种以上行顺序访问BST所有节点的遍历方式,也就是以从小到大的顺序访问所有节点
   * @param {节点} node 
   * @param {Function} callback 
   */
  const inOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  // 中序遍历
  this.inOrderTraverse = function (callback) {
    inOrderTraverseNode(root, callback)
  }

  /**
   * 先序遍历(中左右)
   * 先序遍历是以优先于后代节点的顺序访问每个节点,先访问节点本身
   * 然后访问左侧子节点,再访问右侧做节点
   * 应用:打印一个结构化的文档
   * @param {节点} node
   * @param {Function} callback 
   */
  function preOrderTraverseNode (node, callback) {
    if (node !== null) {
      callback(node.key)
      preOrderTraverseNode(node.left, callback)
      preOrderTraverseNode(node.right, callback)
    }
  }

  // 先序遍历
  this.preOrderTraverse = function (callback) {
    preOrderTraverseNode(root, callback)
  }

  /**
   * 后序遍历(左右中)
   * 后序遍历是先访问节点的后代节点,在访问节点本身
   * 应用:计算一个目录和它子目录中所有文件所占空间的大小
   * @param {节点} node 
   * @param {Function} callback 
   */
  const postOrderTraverseNode = function (node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }

  // 后序遍历
  this.postOrderTraverse = function (callback) {
    postOrderTraverseNode(root, callback)
  }

  /**
   * 根据二叉搜索树的特点,树的最小值会在最左侧的最下层一个数
   * @param {节点} node 
   */
  const minNode = function (node) {
    if (node) {
      while (node && node.left !== null) {
        node = node.left
      }

      return node.key
    }
    return null
  }

  // 寻找树的最小值
  this.min = function () {
    return minNode(root)
  }

  /**
   * 根据二叉搜索树的特点,树的最大值会在最右侧的最下层一个数
   * @param {节点} node 
   */
  const maxNode = function (node) {
    if (node) {
      while (node && node.right !== null) {
        node = node.right
      }
      return node.key
    }
    return null
  }

  // 寻找树的最大值
  this.max = function () {
    return maxNode(root)
  }

  this.search = function (key) {
    
  }
}

let tree = new BinarySearchTree()
tree.insert(11)
tree.insert(7)
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
tree.insert(6)

function printNode (value) {
  console.log(value)
}

tree.inOrderTraverse(printNode)
tree.preOrderTraverse(printNode)
tree.postOrderTraverse(printNode)
console.log('min', tree.min())
console.log('max', tree.max())
