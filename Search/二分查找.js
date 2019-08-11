// 递归遍历, 速度慢了点
function binarySearch(ary, low, high, target) {
    if (low > high) {
        return -1
    }//递归终止条件
    var mid = low + parseInt((high - low) / 2);
    if (ary[mid] > target) {
        return binarySearch(ary, low, mid - 1, target)
    }
    else if (ary[mid] < target) {
        return binarySearch(ary, mid + 1, high, target)
    }
    else return mid
}

// 迭代查找, 速度快了很多
function binarySearch2(ary, low, high, target) {
    var mid = 0;
    while (low <= high) {
        mid = low + parseInt((high - low) / 2);
        if (target < ary[mid]) {
            high = mid - 1
        }
        else if (ary[mid] < target) {
            low = mid + 1
        }
        else return mid;
    }
    return -1;
}