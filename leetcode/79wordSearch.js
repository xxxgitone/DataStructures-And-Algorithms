/**
 * Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

For example,
Given board =

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
word = "ABCCED", -> returns true,
word = "SEE", -> returns true,
word = "ABCB", -> returns false.

给定一个二维平面的字母和一个单词,看是否可以在这个二维平面找到该单词.其中找到这个单词的规则是
从一个字母出发,可以横向或者纵向链接二维平面上的其他字母,同一个位置的字母只能使用一次

 */

 /**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var d = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]
  // 平面多少行,多少列
  var m = board.length
  var n = board[0].length

  var visited = [] // 用于判断是否访问过
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (visited[i] === undefined) {
        visited[i] = []
        visited[i][j] = false
      } else {
        visited[i][j] = false
      }
    }
  }

  var inArea = function (x, y) {
    return x >= 0 && x < m && y >= 0 && y < n
  }

  // 从board[startx][starty]开始,寻找word[index...word.length)
  var searchWord = function (board, word, index, startX, startY) {
    if (index === word.length - 1) {
      return board[startX][startY] === word[index]
    }

    if (board[startX][startY] === word[index]) {
      visited[startX][startY] = true
      // 从startx,starty出发,向四个方向寻找
      for (var i = 0; i < 4; i++) {
        var newX = startX + d[i][0]
        var newY = startY + d[i][1]
        if (inArea(newX, newY) && !visited[newX][newY]) {
          if (searchWord(board, word, index+1, newX, newY)) {
            return true
          }
        }
      }
      visited[startX][startY] = true
    }
    return false
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (searchWord(board, word, 0, i, j)) {
        return true
      }
    }
  }
  return false
}

var board =[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log(exist(board, 'ABCCED'))
