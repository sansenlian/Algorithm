// 一维数组方法
function unboundedKnapsack(weights, values, W) {
    var n = weights.length,
    f = new Array(W + 1).fill(0);
    for(var i=0; i< n; ++i){
        for(j = weights[i]; j <= W; ++j) {
          var tmp = f[j-weights[i]]+values[i];
          f[j] = (f[j] > tmp) ? f[j] : tmp;
        }
    }
    console.log(f)//调试
    return f[W];
}
var a = unboundedKnapsack([3, 2, 2], [5, 10, 20], 5); //输出40
console.log(a);
var b = unboundedKnapsack([2, 3, 4, 7], [1, 3, 5, 9], 10); //输出12
console.log(b);

// 常规算法
function completeKnapsack1(weights, values, W){
    var f = [], n = weights.length;
    f[-1] = [] //初始化边界
    for(var i = 0; i <= W; i++){
        f[-1][i] = 0
    }
    for (var i = 0;i < n;i++){
        f[i] = new Array(W+1)
        for (var j = 0;j <= W;j++) {
            f[i][j] = 0;
            var bound = j / weights[i];
            for (var k = 0;k <= bound;k++) {
                f[i][j] = Math.max(f[i][j], f[i - 1][j - k * weights[i]] + k * values[i]);
            }
        }
    }
    return f[n-1][W];
}
//物品个数n = 3，背包容量为W = 5，则背包可以装下的最大价值为40.
var a = completeKnapsack1([3,2,2],[5,10,20], 5) 
console.log(a) //40

