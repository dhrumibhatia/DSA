//Date: 28/04/2025

// 217. Contains Duplicate
// Easy
/**Given an integer array nums,
  return true if any value appears at least twice in the array, 
  and return false if every element is distinct. */

/*Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3. */

function containsDuplicate(nums) {

    let seen = new Set();
    function helper(index) {
        if (index === nums.length) return false;
        if (seen.has(nums[index])) {
            return true;
        }
        seen.add(nums[index]);
        return helper(index + 1);
    }



    return helper(0);



}

console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false