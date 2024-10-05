/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//nums = [1,3,5,6], target = 2
// nums = [1,3,5,6], target = 5
var searchInsert = function (nums, target) {


    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= target) {
            if (nums[i] === target) {
                return i
            }
            
            else{
                continue
            }
        } else {
            if (i === 0) {
                return 0
            } else {
                return i 
            }
        }
    }

    return nums.length


};

console.log(searchInsert(nums = [1,3,5,6], target = 7))



// /**    CHATGPT SOLUTION BINARY SEARCH

//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function (nums, target) {
//     let left = 0; // Start of the array
//     let right = nums.length - 1; // End of the array

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2); // Middle index

//         if (nums[mid] === target) {
//             return mid; // Target found
//         } else if (nums[mid] < target) {
//             left = mid + 1; // Narrow to the right half
//         } else {
//             right = mid - 1; // Narrow to the left half
//         }
//     }

//     // If not found, left is the insertion point
//     return left;
// };

// // Example usages
// console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1
// console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2
// console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4
