// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next
        }

        return counter;
    }

    clear() {
        this.head = null;
    }

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
    }

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
    }

    // getHead()
    getFirst() {
        return this.head;
        // return this.getAt(0);
    }

    // getTail()
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

    removeFirst() {
        // if (!this.head) {
        //     return;
        // }

        // this.head = this.head.next;
        this.removeAt(0);
    }

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
        // Simplifiying by reusing removeAt method needs to run size(), thus making it less efficient due to the extra loop
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
        // this.insertAt(data, 0);
    }

    insertLast(data) {
        const last = this.getLast();

        if (last) {
            last.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
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
