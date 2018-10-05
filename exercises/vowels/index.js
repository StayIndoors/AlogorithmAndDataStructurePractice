// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution 1 Iterative checking an array of vowels for each character of 'str' 
function vowels(str) {
    var vowelCount = 0;
    const checker = ["a", "e", "i", "o", "u"]

    for (var char of str.toLowerCase()) {
        if (checker.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Solution 2 Using the match method
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// Solution 3 Using the replace method
function vowels(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}

vowels('Why do you ask?');

module.exports = vowels;
