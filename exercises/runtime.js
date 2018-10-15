// LIST OF COMMON RUNTIME COMPLEXITIES

// 1 - CONSTANT TIME (1) : No matter how many elements we are working with, the algorithm/operation/etc will always take the same amount of time.

// 2 - LOGARITHMIC TIME (log(n)) : If doubling the number of elements you are iterating over doesn't double the amount of work.
    // Examples : Searching operations are log(n)

// 3 - LINEAR TIME (n) : Iterating through all the elements in a collection of data.
    // Examples : A For Loop spanning from 0 to array.length is likely linear

// 4 - QUASILINEAR TIME (n * log(n)) : If doubling the number of elements you are iterating over doesn't double the amount of work.
    // Examples : Sorting operations are n * log(n)

// 5 - QUADRATIC TIME (n^2) : Every element in a collection has to be compared to every other element.
    // Examples : The Handshake Problem, Steps Problem, Pyramid Problem

// 6 - EXPONENTIAL TIME (2^n) : If you add a single element to a collection, the processing power required doubles.

//////////////////////////////////////

// BIG 'O' NOTATION

// O(something) : The something is the complexities above. This is for notation.

//////////////////////////////////////

// IDENTIFTING RUNTIME COMPLEXITY

// Iterating with a simple loop through a collection? Probably O(n)
// Iterating through half a collection? Still O(n). There are no constants in runtime.
// Iterating through two *different* collections with seperate loops? O(n + m)
// Two nested loops iterating over the same collection? O(n^2)
// Two nested loops iterating over different collections? O(n*m)
// Sorting? O(n * log(n))
// Searching a sorted array? O(log(n))

//////////////////////////////////////

// SPACE COMPLEXITY

// How much more memory is required by doubling the problem set?
    // Follows similar rules and notation. For every element added how many extra elements are returned. Space and Time are not always identical.
        // Examples : Steps is also Quadratic since for every added element added (increasing the n input by 1) the output is squared.