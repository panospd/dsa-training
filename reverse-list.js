function reverseList(head) {
    let currentNode = head;
    let prev = null;

    while (currentNode) {
        let next = currentNode.next;

        currentNode.next = prev;
        prev = currentNode;

        currentNode = next;
    }

    return reversed;
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

let result = reverseList(list);

console.log(result);

let arr = [];

let cur = result;

while (cur !== null) {
    arr.push(cur.val);
    cur = cur.next;
    console.log(cur);
}

console.log(arr);
