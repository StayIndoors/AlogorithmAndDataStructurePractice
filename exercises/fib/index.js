// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// // Iterative Solution
// // Linear Time Solution
// // As n is increased, the loop (which is all of the work in this case) must run 1 additional time.
// // The prefered solution
function fib(n) {
    let sequence = [0, 1];

    for (var i = 2; i <= n; i++) {
        sequence.push(sequence[i - 2] + sequence[i - 1]);
    }

    return sequence[n];
}

module.exports = fib;
