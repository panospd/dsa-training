function flattenNotPerformant(head) {
    let current = head;

    while (current) {
        if (!current.child) {
            current = current.next;
            continue;
        }

        let connectTo = current.next;

        current.next = current.child;
        current.child.prev = current;

        const lastNodeOfChild = lastNodeOf(current.child);

        lastNodeOfChild.next = connectTo;
        if (connectTo) {
            connectTo.prev = lastNodeOfChild;
        }

        current.child = null;

        current = current.next;
    }

    return head;
}

function lastNodeOf(head) {
    if (!head) return null;
    let currentNode = head;

    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    return currentNode;
}

function recursiveFlatten(head, current, connectTo = []) {
    current = current ?? head;

    while (current || connectTo.length > 0) {
        if (current.child) {
            let connect = current.next;
            connectTo.unshift(connect);
            current.next = current.child;
            current.child.prev = current;
            let child = current.child;
            current.child = null;
            current = child;
            recursiveFlatten(head, current, connectTo);
        }

        if (!current.next && connectTo.length > 0) {
            let connect = connectTo.shift();
            if (connect) {
                current.next = connect;
                connect.prev = current;
            }

            current = connect;
            return recursiveFlatten(head, current, connectTo);
        }

        current = current.next;
    }

    return head;
}

function flatten(head) {
    const connectTo = [];
    let current = head;

    while (current || connectTo.length > 0) {
        if (current.child) {
            let connect = current.next;
            if (connect) {
                connectTo.unshift(connect);
            }
            current.next = current.child;
            current.child.prev = current;
            let child = current.child;
            current.child = null;
            current = child;
            continue;
        }

        if (!current.next && connectTo.length > 0) {
            let connect = connectTo.shift();
            current.next = connect;
            connect.prev = current;

            current = connect;
            continue;
        }

        current = current.next;
    }

    return head;
}
