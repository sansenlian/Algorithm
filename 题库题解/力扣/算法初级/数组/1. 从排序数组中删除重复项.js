/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = nums.length;
    for(let i = 0;i<len-1;i++){
        if(nums[i]==undefined){
            break;
        }
        if(nums[i] == nums[i+1]){
            nums.splice(i+1,1);
            i--;
        }
    }
    return nums.length;
};
var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);