// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// SOLUTION 1: Iterative Solution
function chunk(array, size) {
    // create empty array to hold chunks called 'chunks'
    const chunked = [];
    
    // for each element in the *unchunked* array
    for (let element of array) {
        // retrieve the last element in 'chunked'
        const lastChunk = chunked[chunked.length - 1];
        // if last element does not exist or its length is equal to chunk size
        if (!lastChunk || lastChunk.length === size) {
            // push a new chunk into 'chunked' with the current element
            chunked.push([element]);
            // else add the current element into the last chunk
        } else {
            lastChunk.push(element);
        }
    }

    return chunked;
}

// SOLUTION 2: Using a while loop and slice
function chunk(array, size) {
    // create empty array to hold chunks called 'chunks'    
    const chunked = [];
    // create 'index' starting at 0 for tracking the elements of 'array' at which the chunks will be created
    let index = 0;

    // while the index is less than the original array's length
    while (index < array.length) {
        // push a slice of length 'size' from 'array' into 'chunked'
        chunked.push(array.slice(index, index + size));
        // add 'size' to 'index' so the next chunk begins at the correct element
        index += size;
    }

    return chunked;
}

module.exports = chunk;
