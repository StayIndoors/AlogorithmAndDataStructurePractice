// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// This uses a Character Map which is an Object of unique characters from a string as Keys with their count as Values

// Using a For Of Loop with if/else statement
// function maxChar(str) {
//     const charMap = {};
//     let maxCount = 0;
//     let maxChar = "";

//     for (let char of str) {
//         if (!charMap[char]) {
//             charMap[char] = 1;
//         } else {
//             charMap[char]++;
//         }

//         if (charMap[char] > maxCount) {
//             maxCount = charMap[char];
//             maxChar = char;
//         }
//     }

//     return maxChar;
// }

//  Using a For Of loop with a boolean statement
// function maxChar(str) {
//     const charMap = {};
//     let maxCount = 0;
//     let maxChar = "";

//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1;

//         if (charMap[char] > maxCount) {
//             maxCount = charMap[char];
//             maxChar = char;
//         }
//     }

//     return maxChar;
// }

// Uses a For In loop to inspect the Object to determine maxChar rather than inspecting

function maxChar(str) {
    const charMap = {};
    let maxCount = 0;
    let maxChar = "";

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if (charMap[char] > maxCount) {
            maxCount = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
