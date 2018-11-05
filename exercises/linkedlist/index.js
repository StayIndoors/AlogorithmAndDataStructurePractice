// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

//// We’d use a linked list over an array when we need faster insertion and deletion, but we can tolerate slow item retrieval and we’re o.k. with extra space taken up. If we’re space-limited or access speed is important, we’d use an array.

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        // you can save the size and change as needed with addition or removal of nodes. this saves time over using size() since when using a Linked List, space is usually not a concern.
        // this.length = 0;
    }

    // O(n) TIME COMPLEXITY
    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next
        }

        return counter;
    }

    // O(1) TIME COMPLEXITY
    clear() {
        this.head = null;
    }

    // O(n) TIME COMPLEXITY
    getAt(index) {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }

        return null;
    }

    // O(n) TIME COMPLEXITY
    removeAt(index) {
        if (!this.head) {
            return;
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            return;
        }

        previous.next = previous.next.next;
        return this;
    }

    // O(1) TIME COMPLEXITY with a stored reference to the node
    // O(n) TIME COMPLEXITY if traversing the list
    insertAt(data, index) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (index === 0) {
            this.head = new Node(data, this.head)
            return;
        }

        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(data, previous.next);
        previous.next = node;
        return this;
    }

    // getHead()
    // O(1) TIME COMPLEXITY
    getFirst() {
        return this.head;
        // return this.getAt(0);
    }

    // getTail()
    // O(n)nTIME COMPLEXITY
    getLast() {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
        // Simplifiying by reusing getAt method needs to run size(), thus making it less efficient due to 2 loops
    }

    // O(n)
    removeFirst() {
        // if (!this.head) {
        //     return;
        // }

        // this.head = this.head.next;
        this.removeAt(0);
        return this;
    }

    // O(1) TIME COMPLEXITY with a tail pointer or stored reference to the last node
    // O(n) TIME COMPLEXITY if traversing the list
    removeLast() {
        if (!this.head) {
            return;
        }

        if (!this.head.next){
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
        return this;
        // Simplifiying by reusing removeAt method needs to run size(), thus making it less efficient due to the extra loop
    }

    // O(1) TIME COMPLEXITY
    insertFirst(data) {
        this.head = new Node(data, this.head);
        return this;
        // this.insertAt(data, 0);
    }

    // O(1) TIME COMPLEXITY with a tail pointer or stored reference to the last node
    // O(n) TIME COMPLEXITY if traversing the list
    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
        return this;
        // Simplifiying by reusing insertAt method needs to run size(), thus making it less efficient due to the extra loop
    }

    // LOOP - can easily keep track of the index if needed
    forEach(func) {
        if (!this.head) {
            return null;
        }

        let node = this.head;
        let counter = 0;

        while (node) {
            func(node, counter);
            node = node.next;
            counter++;
        }
        return this;
    }

    // RECURSIVE
    // forEach(func) {
    //     function modifyNode(node, fn) {
    //         if (node) {
    //             func(node);
    //             modifyNode(node.next, fn);
    //         }
    //     }
    //     modifyNode(this.head, func, 0);
    // }

    // For of loop automatically look for Symbol.Iterator. The * makes it a generator.  
    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };
