// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

//// LINEAR TIME COMPLEXITY {O(n)}
//// CONSTANT SPEED COMPLEXITY {O(1)}

function circular(list) {
    if (!list.head) {
        return null;
    }

    let walker = list.head;
    let runner = list.head;

    while (runner.next && runner.next.next) {
        walker = walker.next;
        runner = runner.next.next;

        if (walker === runner) {
            return true;
        }
    }

    return false;
}

module.exports = circular;
