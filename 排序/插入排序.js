/**
 * 方法说明：插入排序
 * 排序结果: 小 -> 大
 * @param {Array} array 待排序数组
 * @return {Array}
 */
function insertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
			// 先把当前数据拿出来
            var key = array[i];
            var j = i - 1; 
			// 拿现在数据和前一个数据进行比较
			// 该数字符合条件的话就往后移动一位, 然后继续向前找
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
			// 找到符合条件的位置后插入进去
            array[j + 1] = key;
        }
        console.timeEnd('插入排序耗时：');
        return array;
    } else {
        return 'array is not an Array!';
    }
}

function binaryInsertionSort(array) {
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        console.time('二分插入排序耗时：');

        for (var i = 1; i < array.length; i++) {
            var key = array[i],
                left = 0,
                right = i - 1;
			// 原理是: 最前面的几位数字都是排好序的, 那我要插入到他前面就可以对前面进行二分查找来进行插入
			// 找位置
            while (left <= right) {
                var middle = parseInt((left + right) / 2);
                if (key < array[middle]) {
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }
            }
			// 找到位置后, 那个位置之后的都后移一位方便插入
            for (var j = i - 1; j >= left; j--) {
                array[j + 1] = array[j];
            }
            array[left] = key;
        }
        console.timeEnd('二分插入排序耗时：');

        return array;
    } else {
        return 'array is not an Array!';
    }
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(binaryInsertionSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
