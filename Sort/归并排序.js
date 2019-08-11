/**
 * 方法说明：归并排序
 * 排序结果: 小 -> 大
 * @param {Array} arr 待排序数组
 * @return {Array}
 */
// 二分不断往下找, 知道找到底层的两个数字比较的情况
function mergeSort(arr) { //采用自上而下的递归方法
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
// 合并左右边序列, 对传入的左右边序列进行归并, 最底层是两个数字比较
// 也就意味着传入的左右数组, 各自组内有序
function merge(left, right) {
    var result = [];
    console.time('归并排序耗时');
	// 然后创建一个结果数组, 比较两个有序列, 小的就放入结果中
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());
    console.timeEnd('归并排序耗时');
    return result;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(mergeSort(arr));
