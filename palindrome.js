// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

var isPalindrome = function(x) {
    // Convert the integer to 2 identical strings first
    var xString = x.toString();
    var yString = "";

    // Add characters from xString to yString so that yString is the reverse of xString for comparison
    for (i = xString.length - 1; i > -1; i--) {
        yString = yString + xString[i];
    };

    // Run the comparison
    if (xString == yString) {
        // Change all instances of console.log() to return when submitting to Leetcode
        console.log(true);
    } else {
        console.log(false);
    };
};

isPalindrome(121); // Returns true
isPalindrome(456); // Returns false
isPalindrome(-303); // Returns false since "-" is the first character, not 3
isPalindrome(1000021); // Returns false

/* 
Runtime: 149 ms, beating only 35.14% of JavaScript users
Memory: 51.14 MB, beating only 45.79% of JavaScript users
Overall: slow and a heavy workload, but it works
*/