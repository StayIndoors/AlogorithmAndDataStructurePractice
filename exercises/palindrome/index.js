// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1: shortest, most straight forward using built in functions
// function palindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// Solution 2: Using an array helper: every() THIS DOES TOO MUCH WORK! 
// It does about twice as many checks. (Compares first to last and last to first)
// function palindrome(str) {
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     });
// }

// Solution 3: Efficient For Loop
function palindrome(str) {
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
        return true;
    }
}

module.exports = palindrome;
