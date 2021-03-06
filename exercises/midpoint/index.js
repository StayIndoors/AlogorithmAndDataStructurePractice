// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

//// LINEAR TIME - A single loop.
//// CONSTANT SPACE - Nothing is created or destroyed. The data structure does not change in size.

function midpoint(list) {
    if (!list.head) {
        return null;
    }

    let walker = list.getFirst();
    let runner = list.getFirst();

    while (runner.next && runner.next.next) {
        walker = walker.next;
        runner = runner.next.next;
    }

    return walker;
}

module.exports = midpoint;
