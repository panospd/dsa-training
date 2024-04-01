function reverse(head, left, right) {
    let i = 1;
    let start = head;
    let mNode = null;
    let current = head;

    while (i < left) {
        start = current;
        current = current.next;
        i++;
    }

    mNode = current;
    let prev = null;

    while (i <= right) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
        i++;
    }

    console.log(prev, head);

    start.next = prev;
    mNode.next = current;

    return left === 1 ? prev : head;
}

let list = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};

let list2 = {
    val: 5,
    next: null,
};

let list3 = {
    val: 3,
    next: {
        val: 5,
        next: null,
    },
};

console.log(print(list3));
const result = reverse(list3, 1, 2);
console.log(print(result));

function print(list) {
    const arr = [];
    let cur = list;

    while (cur) {
        arr.push(cur.val);
        cur = cur.next;
    }

    return arr;
}

// 1 2 3 4

start = 1;
start;
