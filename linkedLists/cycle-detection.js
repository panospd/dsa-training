function hasCycle(head) {
    let current = head;
    const visited = new Set();

    while (current) {
        if (visited.has(current)) {
            return true;
        }

        visited.add(current);
        current = current.next;
    }

    return false;
}

function floyd(head) {
    if (!head) return false;

    let hare = head;
    let tortoise = head;

    while (true) {
        hare = hare.next;
        tortoise = tortoise.next;

        if (hare === null || hare.next === null) return null;

        hare = hare.next;

        if (hare === tortoise) {
            break;
        }
    }

    let p1 = head;
    let p2 = hare;

    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
}
