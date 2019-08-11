function lis(ary) {
    // body...
    var length = ary.length,
        aux = [],
        cur_lis = 1,
        all_lis = 0;
    for (let k = 0; k < length+1; k++) {//考虑到最长递增子序列最小为1，初始化数组全部为1.
        aux[k] = 1;
    }
    for (let i = 0; i < length; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (ary[i] > ary[j]) {
                aux[i+1] = Math.max(aux[i+1],aux[j+1]+1);
            }
        }
        all_lis = Math.max(all_lis,aux[i+1]);
    }
    return all_lis;
}
// 测试用例
var ary = [3,1,4,1,5,9,2,6,5];
// 辅助函数aux
[1, 1, 2, 1, 3, 4, 2, 4, 3]