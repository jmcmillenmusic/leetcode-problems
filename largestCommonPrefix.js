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
    // Establish initial array of strings
    // var strs = [];

    // Establish empty string to be concatenated when we find matches
    var prefix = "";

    prefix = strs[0].substr(0,1);
    for (i = 0; i < strs.length; i++) {
        // if () {

        // } else {

        // }
    }
};

longestCommonPrefix(["flower", "flow", "flight"]); // Should return "fl"
longestCommonPrefix(["dog", "racecar", "car"]); // Should return ""