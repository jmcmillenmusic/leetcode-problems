// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
    // Establish empty string to be concatenated when we find matches
    var prefix = "";

    // Run logic for each string to match each string's first letter(s) and add to prefix
    for (i = 0; i < strs[0].length; i++) {
        if (strs.every(str => str[i] === strs[0][i])) {
            prefix += strs[0][i];
        } else {
            break;
        }
    }
    console.log(prefix);
};

longestCommonPrefix(["flower", "flow", "flight"]); // Should return "fl"
longestCommonPrefix(["dog", "racecar", "car"]); // Should return ""

/* 
I had to get help with this one.
Runtime: 48 ms, beating 86.17% of JavaScript users
Memory: 42.42 MB, beating only 48.29% of JavaScript users
Overall: fast, but has a heavy workload
*/