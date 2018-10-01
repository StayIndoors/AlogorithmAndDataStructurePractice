// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// Solution 1: Iterating through column (j), checking if current column is equal or less than the current row while iterating though the rows (i)
function steps(n) {
    // From 0 to n iternate through the rows
    for (var i = 0; i < n; i++) {
        // Create an empty string, 'stair'
        var stair = "";

        // From 0 to n iterate through columns
        for (var j = 0; j < n; j++) {
            // If the current column is equal to or less than the current row add a "#" to 'stair'
            if (j <= i) {
                stair += "#";
                // Else add a space to 'stair'
            } else {
                stair += " ";
            }
        }
        // Print stair
        console.log(stair);
    }
}

// Solution 2: Building the strings from the front and back while iterating through the rows.
function steps(n) {
    // Shut up the wise guys
    if (n < 1) {
        console.log("");
        return;
    } else {
    // From 0 to n iterate through the rows
    for (var i = 0; i < n; i++) {
        // Create the empty strings used to build 'stair'
        var hashes = "";
        var spaces = "";
        var stair = "";

        // Add the row's amount of "#" to hashes
        hashes += "#".repeat(i + 1);
        // Add the row's amount of spaces to spaces
        spaces += " ".repeat(n - i - 1);
        // Combine hashes and spaces
        string = hashes + spaces;
        // Console.log 'stair'
        console.log(string);
        }
    }
    return; 
}

// Solution 3: RECURSION
function steps(n, row = 0, stair = '') {
    // If row === n then we have reached the end of the problem
    if (n === row) {
        return;
    } 

    // If the 'stair' string is as long as n then we have reached the end of a row and should be console logged and a new row is started
    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    } 

    // If the length of the 'stair' string is less than or equal to the row number we're working on, we add a "#" to 'stair', otherwise we add a space
    // We then continue adding to 'stair' before it is length n
    const add = stair.length <= row ? "#" : " ";
    return steps(n, row, stair + add);
    // Above is the TERNARY way to write the if/else statement below
    // if (stair.length <= row) {
    //     stair += "#";
    // } else {
    //     stair += " ";
    // }
    // return steps(n, row, stair);
}

module.exports = steps;
