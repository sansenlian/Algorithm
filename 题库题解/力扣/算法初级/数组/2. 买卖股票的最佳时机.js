/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let len = prices.length;
    let sum = 0;
    // 把所有区间为正的加起来就好了
    for(let i= 1;i<len;i++){
        prices[i]-prices[i-1]>0?sum+=prices[i]-prices[i-1]:sum=sum;
    }
    console.log(sum)
};