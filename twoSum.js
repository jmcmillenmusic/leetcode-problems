// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                // Change all instances of console.log() to return when submitting to Leetcode
                console.log([i, j]);
            }
        }
    }
};

twoSum([2, 7, 11, 15], 9); // Returns [0,1]
twoSum([3, 2, 4], 6); // Returns [1,2]
twoSum([3,3], 6); // Returns [0,1]
twoSum([2, 6, 7, 8, 10, 12, 14], 19) // Running this test case just in case, returns [2,5]

/* 
Runtime: 94 ms, beating only 26.64% of JavaScript users
Memory: 41.72 MB, beating 94.94% of JavaScript users
Overall: slow but a light workload
*/