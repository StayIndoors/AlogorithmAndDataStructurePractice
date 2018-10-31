// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

//// First In LAST Out
//// or Last In First Out

class Stack {
    constructor() {
        this.dataStack = [];
    }

    push(record) {
        this.dataStack.push(record);
    }

    pop(record) {
        return this.dataStack.pop();
    }

    peek() {
        return this.dataStack[this.dataStack.length - 1];
    }
}

module.exports = Stack;
