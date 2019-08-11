// 二进制优化法
function mKnapsack(weights, values, numbers, W) {
    var kind = 0; //新的物品种类
    var ws = []; //新的物品重量
    var vs = []; //新的物品价值
    var n = weights.length;
    /**
     * 二进制分解
     * 100=1+2+4+8+16+32+37，观察可以得出100以内任何一个数都可以由以上7个数选择组合得到，
     * 所以对物品数目就不是从0都100遍历，而是0，1，2，4，8，16，32，37遍历，时间大大优化。
     */
    for (let i = 0; i < n; i++) {
        var w = weights[i];
        var v = values[i];
        var num = numbers[i];
        for (let j = 1; ; j *= 2) {
            if (num >= j) {
                ws[kind] = j * w;
                vs[kind] = j * v;
                num -= j;
                kind++;
            } else {
                ws[kind] = num * w;
                vs[kind] = num * v;
                kind++;
                break;
            }
        }
    }
    //01背包解法
    var f = new Array(W + 1).fill(0);
    for (let i = 0; i < kind; i++) {
        for (let j = W; j >= ws[i]; j--) {
            f[j] = Math.max(f[j], f[j - ws[i]] + vs[i]);
        }
    }
    return f[W];
}

var b = mKnapsack([2,3,1 ],[2,3,4],[1,4,1],6)
console.log(b) //9