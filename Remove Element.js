/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//Input: nums = [0,1,2,2,3,0,4,2], val = 2
var removeElement = function(nums, val) {

    let k=-1
    for(let i=0;i<nums.length;i++){
       
        if(nums[i]===2 && k===-1){
            k=i
        }
        if(nums[i]!==2){
            nums[k]=nums[i]
            k=-1
        }
    }

    return k
    
};


console.log(removeElement(nums = [0,1,2,2,3,0,4,2]))


