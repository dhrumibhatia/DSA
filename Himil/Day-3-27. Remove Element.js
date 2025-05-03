//date: 03/05/2025

/*27. Remove Element
Easy
  
Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
 
 
 */




function removeEle(nums, val) {
    let left = 0;
    let count = 0;
    while (left < nums.length) {
        if (nums[left] === val) {
            nums[left] = nums[nums.length - 1];
            nums.length--;
            count++;
        }
        else {
            left++;
        }
    }
    return `${count} nums=${nums}`;
}


console.log(removeEle([3, 2, 2, 3], 3));
console.log(removeEle([0, 1, 2, 2, 3, 0, 4, 2], 2));


//this is my method of above one pointer with shift valid element to the left 
//time :o(n)
//space:o(1)


//below is take help of chat gpt using two pointer we swap left and right element and later we remove element using splice;



function TwoPointerMethod(nums, val) {
    if (nums.length === 0) return 0;

    let count = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {

        if (nums[left] === val) {
            // Swap with the element at the right pointer
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--; // move right pointer
            count++;
        } else {
            left++; // move left pointer

        }

    }
    // Now, the array has all elements except `val` at the front
    return `${count}  nums=${nums.splice(0, right + 1)}`;

}

console.log(TwoPointerMethod([3, 2, 2, 3], 3));
console.log(TwoPointerMethod([0, 1, 2, 2, 3, 0, 4, 2], 2));

