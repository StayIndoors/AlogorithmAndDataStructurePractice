// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// Solution 1: Cleaner code without the extra variable
// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// Solution 2: Using For Loop
function reverse(str) {
    let reversed = '';

    // better way to write for (var i = 0; i < str.length; i++) for an interable element, in this case str
    for (let character of str) {
        reversed = character + reversed;
    }

    return reversed;
}

//  Solution 3: Using an array helper, in this case reduce
// function reverse(str) {
//     return str.split('').reduce((reversed, character) => character + reversed, '');
// }

module.exports = reverse;
