/**
 * 方法说明：堆排序, 大堆
 * 排序结果: 大 -> 小
 * @param {Array} array 待排序数组
 * @return {Array}
 */
// 建堆的时候走n/2
// 堆内排序都是走n的长度
function heapSort(array) {
    console.time('堆排序耗时');
    if (Object.prototype.toString.call(array).slice(8, -1) === 'Array') {
        //建堆
        var heapSize = array.length,
            temp;
		// 从数组的一半开始建立堆,然后再不断往前建立堆, 也就是需要走n/2长度的遍历
        for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            heapify(array, i, heapSize);
        }
		// 建好基本堆后基本每一层都比下一层大, 因为是大堆
        // 堆排序, 建立堆排序的内部细节
        for (var j = heapSize - 1; j >= 1; j--) {
			// 将堆顶和最后一个元素交换
            temp = array[0];
            array[0] = array[j];
            array[j] = temp;
			// 因为交换完后他们的堆肯定就不对了, 需要重新调整堆
			// 这里需要遍历一整遍, 也就是走一次n的长度遍历
            heapify(array, 0, --heapSize);
        }
        console.timeEnd('堆排序耗时');
        return array;
    } else {
        return 'array is not an Array!';
    }
}
/*方法说明：维护堆的性质
@param  arr 数组
@param  x   数组下标
@param  len 堆大小*/
// 调整以x为根节点的堆, 目的是通过不断交换的方式, 让最大值上位到根节点
function heapify(arr, x, len) {
	// 要调整的是以x为根节点的堆
	// 前提必须输入的是数组, 类型必须是数字
    if (Object.prototype.toString.call(arr).slice(8, -1) === 'Array' && typeof x === 'number') {
        var l = 2 * x + 1, // x的左孩子
            r = 2 * x + 2, // x的右孩子
            largest = x, // 当前堆顶
            temp;
		// 调整这三个节点, 但是单发现孩子上位后就要往下继续调整
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest != x) {
            temp = arr[x];
            arr[x] = arr[largest];
            arr[largest] = temp;
			// 往下继续调整, 最终会把最大值送上来
            heapify(arr, largest, len);
        }
    } else {
        return 'arr is not an Array or x is not a number!';
    }
}
var arr = [91, 60, 96, 13, 35, 65, 46, 65, 10, 30, 20, 31, 77, 81, 22];
console.log(heapSort(arr)); //[10, 13, 20, 22, 30, 31, 35, 46, 60, 65, 65, 77, 81, 91, 96]
