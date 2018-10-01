// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// METHOD 1: Built-in methods w/ conditional
function reverseInt(n) {
    if (n < 0) {
        return parseInt(n.toString().split("").reverse().join(""), 10) * -1;
    } 
    else {
        return parseInt(n.toString().split("").reverse().join(""), 10);
    }
}

// METHOD 2: Built-in methods w/ Math.sign()
function reverseInt(n) {
    return parseInt(n.toString().split("").reverse().join(""), 10) * Math.sign(n);
}

// METHOD 3: Easier to read: Built-in methods w/ Math.sign()
function reverseInt(n) {
    const reversed = n
        .toString()
        .split("")
        .reverse()
        .join("");
    return parseInt(reversed, 10) * Math.sign(n);
}

module.exports = reverseInt;

reverseInt(-90);