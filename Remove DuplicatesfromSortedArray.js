/**
 * @param {number[]} nums
 * @return {number}
 */

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]


var removeDuplicates = function(nums) {
 
    
    let k = 1
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {  
            nums[k] = nums[i]        
            k++                         
        }
    }
    
    return nums 
};
//123
console.log(removeDuplicates(nums = [0,0,1,1,1,2,2,3,3,4]))