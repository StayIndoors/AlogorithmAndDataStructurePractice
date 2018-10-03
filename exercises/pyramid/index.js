// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######' 

// Solution 1: Iterate through the columns while iterating through the rows. In an empty string 'level' add a # to the correct columns else add a space. Log stair and continue iterating through the rows.
function pyramid(n) {
    // Handle zero and negative numbers
    if (n < 0) {
        console.log("");
        return;
    }
    // Simplify for n === 1
    if (n === 1) {
        console.log("#");
        return;
    }

    // From 0 to n, iterate through the rows i
    for (var row = 0; row < n; row++) {
        // Create an empty string for each row
        var level = "";
        const midpoint = Math.floor((2 * n - 1) / 2);

        // Iterate throught the columns within a row
        for (var col = 0; col < 2 * n - 1; col++) {
            if (midpoint - row <= col && midpoint + row >= col) {
                level += "#" ;   
            } else {
                level += " ";
            }
        }
        
        // Consoel log level
        console.log(level);
    }

    return;
}

// Solution 2 Recursion
function pyramid(n, row = 0, level = '') {
    // If row === n then we have reached the end of the problem
    if (n === row) {
        return;
    } 

    // If the length of the 'level' string has reached the length of a full column, move to the next row
    if (level.length === (2 * n - 1)) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    // Create the midpoint of a column and the variable used to hold the proper character to add to 'level'
    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;

    // Check the next position to determine which character will be added to 'level'
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    // Call the function passing in the next value of level, whose length will be checked before determining if 'level' needs to continue being constructed or if 'level' is long enough to be logged and advance to the next row. Then row will be checked to see if we have filled all the rows asked of us
    pyramid(n, row, level + add);
}

// Solution 3 Recursion using .repeat
function pyramid(n, i = 1) {
    // As n is decremented, if it reaches 0 we are done
    // n is the amount of rows remaining to log
    // i is the row we are on using traditional counting
    if(n === 0) {
        return;
    }

    // Build the string to log (number of spaces on each side equals n - 1 and number of # in the middle equals 2 * i - 1)
    console.log(" ".repeat(n - 1) + "#".repeat((2 * i) - 1) + " ".repeat(n - 1));
    // CAll pyramid with a decremented n and an incremented i
    pyramid(n - 1, i + 1);
}
module.exports = pyramid;
