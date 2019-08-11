// 是从一个顶点到其余各顶点的最短路径算法，解决的是有向图中最短路径问题。
let index = 'ABCDEF'
let INF = Number.MAX_SAFE_INTEGER // 定义 INF 为javascript的最大整数 Number.MAX_SAFE_INTEGER

function dijkstra(src) {
    let dist = [],// 定义 dist 数组来储存当前A顶点到其它各个顶点间的距离
        visited = [],// 定义 visited 数组来储存ABCDEF顶点是否被访问过，以免重复访问，形成环
        length = graph.length// 定义 length 来储存所有顶点的数量

    /*
    * 初始化dist visted 数组，把所有顶点距离初始化为无限大，所有顶点定义为为访问
      把顶点A到自己的距离初始化为0
    * */
    for (let i = 0; i < length; i++) {
        dist[i] = INF
        visited[i] = false
    }
    dist[src] = 0

    // 顶点探索函数
    for (let i = 0; i < length - 1; i++) {
        let u = minDistance(dist, visited)
        visited[u] = true

        for (let v = 0; v < length; v++) {
            if (!visited[v] && dist[u] !== INF && graph[u][v] > 0 && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v]
            }
        }
    }

    return dist
}
// 寻找最短路径函数
function minDistance(dist, visited) {
    let min = INF,
        minIndex = -1

    for (let v = 0; v < dist.length; v++) {
        if (visited[v] === false && dist[v] <= min) {
            min = dist[v]
            minIndex = v
        }
    }

    return minIndex
}