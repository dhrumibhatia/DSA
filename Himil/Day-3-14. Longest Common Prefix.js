// Date:03/05/2025

//14. Longest Common Prefix
//easy
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
*/

function LongestCommonPrefix(strs) {

    if (strs.length === 0) return "";

    let prefix = "";

    for (let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i];


        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== currentChar) {
                return prefix;
            }

        }
        prefix += currentChar;
    }

}

console.log(LongestCommonPrefix(["flower", "flow", "flight"]));
console.log(LongestCommonPrefix(["dog", "racecar", "car"]));


// time:O(n)
//space:O(1)

// i use method below:
// Not truly multiple pointers (like fast-slow pointer, or start-end pointer).
//   It’s one common pointer (right) used across all strings at the same character index.

function PrefixLong(strs) {

    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    let prefix = "";
    //one pointer
    let left = 0;


    while (true) {

        let char = strs[0][right];

        for (let word of strs) {
            if (word[right] !== char || word[right] === undefined) {
                return prefix;

            }
        }

        prefix += char;
        right++;
    }


}

console.log(PrefixLong(["flower", "flow", "flight"]));
console.log(PrefixLong(["dog", "racecar", "car"]));