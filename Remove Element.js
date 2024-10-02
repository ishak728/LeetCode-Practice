/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//Input: nums = [0,1,2,2,3,0,4,2], val = 2
var removeElement = function(nums, val) {

    let p=-1
    let count=0

    for(let i=0;i<nums.length;i++){

       

        if(p===-1 && nums[i]===val){
            p=i
            continue
        }

        if(p!==-1 && nums[i]!==val){
            nums[p]=nums[i]
            nums[i]=val
            i=p
            p=-1
            
            
        }

        if(nums[i]!==val){
            count++
        }
        
    }
  
 return count
    
};


console.log(removeElement(nums = [0,1,2,2,3,0,4,2], val = 2))


