// O(n^2)空间复杂度
function lcs(str1,str2) {
    // body...
    var length1 = str1.length,
        length2 = str2.length,
        aux = new Array(length1+1),
        max_ss = 0;
    for (let m = 0; m < length1+1; m++) {//为了便于计算，aux[*][0]和aux[0][*]不使用，仅做为哨兵维护边界情况
        aux[m] = new Array(length2+1);
        for (let n = 0; n < length2+1; n++) {
            aux[m][n] = 0;
        }
    }
    for (let i = 0; i < length1; i++) {
        for (let j = 0; j < length2; j++) {
            if (str1[i] == str2[j]) {
                aux[i+1][j+1] = aux[i][j]+1;
                max_ss = Math.max(max_ss,aux[i+1][j+1]);
            }
        }
    }
    return max_ss;
}
// O(min(m,n))空间复杂度
function lcs(str1,str2) {
    // body...
    if (str1.length > str2.length) {//保证str1为最较短字符串
        return lcs(str2,str1);
    }
    var length_short = str1.length,
        length_long = str2.length,
        aux = new Array(length_short+1),//辅助数组，aux[0]不用。
        max_ss = 0;
    for (let m = 0; m < length_short+1; m++) {
        aux[m] = 0;
    }
    for (let i = 0; i < length_long; i++) {//外城循环遍历长字符串
        for (let j = length_short-1; j >= 0; j--) {//内层循环倒序遍历短字符串
            aux[j+1] = str1[j] == str2[i]?aux[j]+1:0;//一维数组存储时，注意不等的情况下置零
            max_ss = Math.max(max_ss,aux[j+1]);
        }
    }
    return max_ss;
}