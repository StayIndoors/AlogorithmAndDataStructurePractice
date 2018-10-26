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
// function fib(n) {
//     let sequence = [0, 1];

//     for (var i = 2; i <= n; i++) {
//         sequence.push(sequence[i - 2] + sequence[i - 1]);
//     }

//     return sequence[n];
// }

// // Recursive Solution
// // Exponential Time Solution
// // With recursion, the sought value is broken down into pieces (n - 1) and (n - 2) until left with a collection of fib(0) and fib(1) (or 0 and 1). Those added together have given us our value. When you increase the initial n (the position of the value in question) the amount of time fib() must be called increases exponentially.
// // A terrible solution to actually use
// function fib(n) {
//     if (n < 2 ) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

// // Improved Recursive Solution
// // Exponential Time Solution
// // With MEMOIZATION, we store the arguments of function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again.
function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function fib(n) {
    if (n < 2 ) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// Logically it works like this:
// function slowFib(n) {
//     if (n < 2 ) {
//         return n;
//     }

//     return fib(n - 1) + fib(n - 2);
// }

// const fib = memoize(slowFib);

module.exports = fib;
