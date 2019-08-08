/**
 * 方法说明：桶排序
 * 排序: 小 -> 大
 * @param {Array} array 数组
 * @param {number} num   桶的数量
 * @return {Array}
 */
// 就是创建几个桶, 每个桶之间的间隔是算出来的(最大值-最小值)/桶的数量
// 在各自区域内的数组进行排序
// 排序完成后顺序遍历非空的数组,
function bucketSort(array, num) {
    if (array.length <= 1) {
        return array;
    }
    var len = array.length,
        buckets = [],
        result = [],
        min = max = array[0],
        regex = '/^[1-9]+[0-9]*$/',
        space, n = 0;
    num = num || ((num > 1 && regex.test(num)) ? num : 10);
    console.time('桶排序耗时');
	// 找到最大值和最小值
    for (var i = 1; i < len; i++) {
        min = min <= array[i] ? min : array[i];
        max = max >= array[i] ? max : array[i];
    }
	// 看他们相差多少, 每个桶可以放多少数据
    space = (max - min + 1) / num;
	// 我把我的数据放入桶中
    for (var j = 0; j < len; j++) {
		// 判断可以加到哪个桶里
        var index = Math.floor((array[j] - min) / space);
        if (buckets[index]) { 
			//  非空桶，插入排序
            var k = buckets[index].length - 1;
            while (k >= 0 && buckets[index][k] > array[j]) {
                buckets[index][k + 1] = buckets[index][k];
                k--;
            }
            buckets[index][k + 1] = array[j];
        } else { //空桶，初始化
            buckets[index] = [];
            buckets[index].push(array[j]);
        }
    }
    while (n < num) {
        result = result.concat(buckets[n]);
        n++;
    }
    console.timeEnd('桶排序耗时');
    return result;
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bucketSort(arr, 4)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
