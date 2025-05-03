//Date:03/05/2025

//169. Majority Element
//easy

// Use Frequency Counter Method to fix max element repeated and return that number
function MajorityEle(nums) {

    let freq = {};
    let max = 0;
    let result = 0;
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (key in freq) {
        if (freq[key] > max) {
            max = freq[key];
            result = key;
        }
    }
    return Number(result);
}

console.log(MajorityEle([3, 2, 3]));
console.log(MajorityEle([2, 2, 1, 1, 1, 2, 2]));


//time:O(n)
//space:O(1)