// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // WORST CASE RUNTIME: n^2
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr
}

function selectionSort(arr) {
    // WORST CASE RUNTIME: n^2
    // This requires significantly more work as the data set grows. ONLY USE FOR KNOWN SMALL DATA SETS

}

function mergeSort(arr) {
    // WORST CASE RUNTIME: n*log(n)
    // This requires slightly more work as the data set grows. USE FOR LARGER OR UNKOWN DATA SET SIZES

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
