// 一维数组优化
function knapsack(weights, values, W){
    var n = weights.length;
    var f = new Array(W+1).fill(0)
    for(var i = 0; i < n; i++) {
        for(var j = W; j >= weights[i]; j--){
            f[j] = Math.max(f[j], f[j-weights[i]] +values[i]);
        }
        console.log(f.concat()) //调试
    }
    return f[W];
}
var b = knapsack([2,2,6,5,4],[6,3,5,4,6],10)
console.log(b)

// 常规方法
function knapsack1(weights, values, W){
    var n = weights.length;
    var f = new Array(n)
    f[-1] = new Array(W+1).fill(0)
    var selected = [];
    for(var i = 0 ; i < n ; i++){ //注意边界，没有等号
        f[i] = [] //创建当前的二维数组
        for(var j=0; j<=W; j++){ //注意边界，有等号
            if( j < weights[i] ){ //注意边界， 没有等号
                f[i][j] = f[i-1][j]//case 1
            }else{
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]]+values[i]);//case 2
            }
        }
    }
    var j = W, w = 0
    for(var i=n-1; i>=0; i--){
        if(f[i][j] > f[i-1][j]){
            selected.push(i)
            console.log("物品",i,"其重量为", weights[i],"其价格为", values[i])
            j = j - weights[i];
            w +=  weights[i]
        }
    }
    console.log("背包最大承重为",W," 现在重量为", w, " 总价值为", f[n-1][W])
    return [f[n-1][W], selected.reverse() ]
}
var a = knapsack1([2,3,4,1],[2,5,3, 2],5)
console.log(a)
var b = knapsack1([2,2,6,5,4],[6,3,5,4,6],10)
console.log(b)

// 滚动数组压缩空间
// 当前状态只与前一行的状态有关，那么更之前存储的状态信息已经无用了，可以舍弃的，我们只需要存储当前状态和前一行状态
function knapsack2(weights, values, W){
    var n = weights.length
    var lineA = new Array(W+1).fill(0)
    var lineB = [], lastLine = 0, currLine
    var f = [lineA, lineB]; //case1 在这里使用es6语法预填第一行
    for(var i = 0; i < n; i++){
        currLine = lastLine === 0 ? 1 : 0 //决定当前要覆写滚动数组的哪一行
        for(var j=0; j<=W; j++){
            f[currLine][j] = f[lastLine][j] //case2 等于另一行的同一列的值
            if( j>= weights[i] ){
                var a = f[lastLine][j]
                var b = f[lastLine][j-weights[i]] + values[i]
                f[currLine][j] = Math.max(a, b);//case3
            }

        }
        lastLine = currLine//交换行
    }
    return f[currLine][W];
}

var a = knapsack2([2,3,4,1],[2,5,3, 2],5)
console.log(a)
var b = knapsack2([2,2,6,5,4],[6,3,5,4,6],10)
console.log(b)