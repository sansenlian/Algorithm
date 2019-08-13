/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let len = strs.length;
    if(len<=1)return "";
    let min = strs[0].length;
    console.log(len)
    for (let i = 0; i < len; i++) {
        strs[i]<min?min=strs[i]:mi=min;
    }
    for (let i = 0; i < min; i++) {
        let count = 0;

        if(map.get(strs[0])!=len)return
    }
    return "";

};
let arr = ["flower","flow","flight"];
console.log(longestCommonPrefix(arr))
//console.log(strStr("ababcabcacbab", "abaabcac"));

function f() {
    let len = nums.length;
    for (let i = 0; i < len; i++) {

    }
}