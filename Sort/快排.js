/**
 * 方法说明：快速排序
 * Sort: 小 -> 大
 * @param {Array} array 待排序数组
 * @return {Array}
 */
// 方法一, 不是直接找基准, 是直接从第一个数开始一边冒泡遍历一遍n, 然后左边就比之前的第一个数小, 右边就比之前的第一个数字大, 看起来还是类似快排
// 然后再左右继续这样做, 指导各自找到底部为止
function quickSort(array, left, right) {
    console.time('1.快速排序耗时');
	// 判断是否是数字类型和数组类型
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array' && typeof left === 'number' && typeof right === 'number') {
        if (left < right) {
            var x = array[right],
                i = left - 1,
                temp;
			// 用冒泡的方式一致交换, 结果就是i左边的比i小, i右边的比i大
            for (var j = left; j <= right; j++) {
                if (array[j] <= x) {
                    i++;
                    temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
            quickSort(array, left, i - 1);
            quickSort(array, i + 1, right);
        }
        console.timeEnd('1.快速排序耗时');
        return array;
    } else {
        return 'array is not an Array or left or right is not a number!';
    }
}

// 方法二比较标准, 直接找一个作为基准, 然后小于他的放在左边, 大于他的放在右边
var quickSort2 = function(arr) {
    console.time('2.快速排序耗时');　　
    if (arr.length <= 1) {
        return arr;
    }　　
    var pivotIndex = Math.floor(arr.length / 2);　　
    var pivot = arr.splice(pivotIndex, 1)[0];　　
    var left = [];　　
    var right = [];　　
    for (var i = 0; i < arr.length; i++) {　　　　
        if (arr[i] < pivot) {　　　　　　
            left.push(arr[i]);　　　　
        } else {　　　　　　
            right.push(arr[i]);　　　　
        }　　
    }
    console.timeEnd('2.快速排序耗时');　　
	// 经典的写法, 左边+中间+右边
    return quickSort2(left).concat([pivot], quickSort2(right));
};

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr, 0, arr.length - 1)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(quickSort2(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
