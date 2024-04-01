class Queue {
    constructor() {
        this.left = [];
        this.right = [];
    }

    enqueue(item) {
        this.left.push(item);
    }

    dequeue() {
        if (this.right.length === 0) {
            while (this.left.length > 0) {
                this.right.push(this.left.pop());
            }
        }

        return this.right.pop();
    }

    peek() {
        if (this.right.length === 0) {
            while (this.left.length > 0) {
                this.right.push(this.left.pop());
            }
        }

        return this.right[this.right.length - 1];
    }

    empty() {
        this.left.length === 0 && this.right.length === 0;
    }
}
