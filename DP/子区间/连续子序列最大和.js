// 给定数组，其元素有正有负，求其连续子序列的最大和。
function maxSubSequenceSum(ary,low,high) {
    // body...
    var length = high-low+1;
    if (length < 1) {return false;}
    var aux = [];
    aux[0] = 0;
    var curr_ss_sum = Number.NEGATIVE_INFINITY,
        max_ss_sum = ary[low];
    for (let i = low; i <= high; i++) {
        aux[i+1] = Math.max(aux[i]+ary[i],ary[i]);
        max_ss_sum = Math.max(aux[i+1],max_ss_sum);
    }
    return max_ss_sum;
}
// 优化空间复杂度为O(1)
function maxSubSequenceSum(ary,low,high) {
    // body...
    var length = high-low+1;
    if (length < 1) {return false;}
    var curr_ss_sum = Number.NEGATIVE_INFINITY,
        max_ss_sum = ary[low];
    for (let i = low; i <= high; i++) {
        curr_ss_sum = Math.max(ary[i],ary[i]+curr_ss_sum);
        max_ss_sum = Math.max(curr_ss_sum,max_ss_sum);
    }
    return max_ss_sum;
}