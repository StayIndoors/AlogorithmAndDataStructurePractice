// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let counters = [0];
    let arr = [root, 'stop'];
    
    while (arr.length > 1) {
        let node = arr.shift(arr[0]);

        if (node === 'stop') {
            arr.push('stop');
            counters.push(0);
        } else {
            counters[counters.length - 1]++;
            arr.push(...node.children);
            // if (node.children) {
            //     for (let child of node.children) {
            //         arr.push(child);
            //     }
            // }
        } 
    }
    
    return counters;
}

module.exports = levelWidth;
