// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// // SOLUTION 1: the long and messy way
// function anagrams(stringA, stringB) {
//     const aAlpha = stringA.replace(/[^\w]/g, "").toLowerCase();
//     const bAlpha = stringB.replace(/[^\w]/g, "").toLowerCase();

//     if (aAlpha.length != bAlpha.length) {
//         return false;
//     }

//     const aCharMap = {};
//     const bCharMap = {};

//     for (let char of aAlpha) {
//         aCharMap[char] = aCharMap[char] + 1 || 1;
//     }

//     for (let char of bAlpha) {
//         bCharMap[char] = bCharMap[char] + 1 || 1;
//     }

//         for (let char in aCharMap) {
//             if (aCharMap[char] !== bCharMap[char]) {
//                 return false;
//             }
//         }
//     return true;
// }

// // SOLUTION 2: using a helper function to construct the character maps
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (let char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// // Helper function
// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g).toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

// SOLUTION 3: Sorting the strings with a different helper function
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

// Helper function to clean and sort the strings
function cleanString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
