/**
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

11110
11010
11000
00000
Answer: 1

Example 2:

11000
11000
00100
00011

Amswer: 3

给出一个二维数组,只含有0和1两个字符,其中1代表陆地,0代表水域.
横向和纵向的陆地链接成岛屿,被水域隔开.

给出的地图中有多少岛屿
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  var d = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  var m = grid.length
  var n = grid[0].length

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

  var dfs = function (grid, x, y) {
    visited[x][y] = true
    for (var i = 0; i < 4; i++) {
      var newX = x + d[i][0]
      var newY = y + d[i][1]
      if (inArea(newX, newY) && !visited[newX][newY] && grid[newX][newY] === 1) {
        dfs(grid, newX, newY)
      }
    }
    return
  }

  var res = 0
  for (var i  = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        res++
        dfs(grid, i, j)
      }
    }
  }
  return res
}

var grid = [
  [1,1,0,0,0],
  [1,1,0,0,0],
  [0,0,1,0,0],
  [0,0,0,1,1]
]

console.log(numIslands(grid))