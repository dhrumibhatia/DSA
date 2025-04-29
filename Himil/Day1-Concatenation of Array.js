//Date : 28/04/2025

// 1929. Concatenation of Array
// Easy

/*Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans. */


// Example 1:
// Input: nums = [1,2,1]    
// Output: [1,2,1,1,2,1]


function getConcatenation(nums) {
    if (nums.length === 0) return [];
    return nums.concat(getConcatenation(nums.slice(0)));

}
console.log(getConcatenation([1, 2, 1])); // Output: [1, 2, 1, 1, 2, 1]

//explaination of the code : i use Pure Recurison to solve this problem.


//first i use base case if the length of the array is 0 then return empty array.
//then i use the concat method to concatenate the array with the result of the funciton call with the slice method to get the rest of the array from index 1 to the end of the array.
//then i return the result of the concat method which is the concatenation of the two arrays.

//visialization of the code :
//let nums = [1, 2, 1]
//  nums.concate([1,2, 1])
//[1,2,1].concate([1,2, 1])
// [1,2,1,1].concate([2, 1]);
// [1,2,1,1,2].concate([1]);
// [1,2,1,1,2,1].concate([]);    // Final concatenated result

