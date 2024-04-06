class PriorityQueue {
    constructor() {
        this._heap = [];
        this._comparer = (i, j) => {
            const a = this._heap[i];
            const b = this._heap[j];

            if (a.closed && b.closed) return a.delay > b.delay;
            if (!a.closed && !b.closed) return a.delay > b.delay;

            if (a.closed) {
                return true;
            }

            return false;
        };
    }

    _swap(i, j) {
        const a = this._heap[i];
        this._heap[i] = this._heap[j];
        this._heap[j] = a;
    }

    push(node) {
        this._heap.push(node);
        this._siftUp();
    }

    pop() {
        if (this.size() > 1) {
            this._swap(0, this.size() - 1);
        }

        const poppedValue = this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    _siftDown() {
        let currentIndex = 0;

        while (
            (this._left(currentIndex) < this.size() &&
                this._comparer(currentIndex, this._left(currentIndex))) ||
            (this._right(currentIndex) < this.size() &&
                this._comparer(currentIndex, this._right(currentIndex)))
        ) {
            const smallerIndex =
                this._right(currentIndex) < this.size() &&
                this._comparer(
                    this._left(currentIndex),
                    this._right(currentIndex)
                )
                    ? this._right(currentIndex)
                    : this._left(currentIndex);

            this._swap(currentIndex, smallerIndex);
            currentIndex = smallerIndex;
        }
    }

    _left(index) {
        return 2 * index + 1;
    }

    _right(index) {
        return 2 * index + 2;
    }

    _siftUp() {
        let currentIndex = this.size() - 1;
        while (
            currentIndex > 0 &&
            this._comparer(this._parentOf(currentIndex), currentIndex)
        ) {
            this._swap(this._parentOf(currentIndex), currentIndex);
            currentIndex = this._parentOf(currentIndex);
        }
    }

    size() {
        return this._heap.length;
    }

    _parentOf(index) {
        return Math.floor((index - 1) / 2);
    }
}

exports.PriorityQueue = PriorityQueue;
