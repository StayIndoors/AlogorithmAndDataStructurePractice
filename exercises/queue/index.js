// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

//// First In First Out

class Queue {
    constructor() {
        // data is a new we made up. could be anything.
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove(record) {
        return this.data.pop();
    }
    
    peek() {
        return this.data[this.data.length - 1];
    }
}


module.exports = Queue;
