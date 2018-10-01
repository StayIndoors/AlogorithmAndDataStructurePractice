// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Solution 1
// function capitalize(str) {
//     let words = [];

//     for (let word of str.split(" ")) {
//         words.push(word[0].toUpperCase() + word.slice(1));

//         // Above is a more efficient version of this block
//         // var first = word.slice(0,1);
//         // first = first.toUpperCase();
//         // word = first.concat(word.slice(1));
//         // words.push(word);
//     }

//     return words.join(" ");
// }

// Solution 2: Comparing if a character is to the right of a space and capitalizing it if true
// This solution hard codes the first character. That could potentially lead to an issue.
function capitalize(str) {
    let result = str[0].toUpperCase();

    for (var i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
            result += str[i].toUpperCase();
        } else {
            result += (str[i]);
        }
    }

    console.log(result)
    return result;
}

capitalize('a lazy fox');

module.exports = capitalize;
