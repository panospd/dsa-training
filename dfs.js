function inOrder(root) {
    return traverseInOrder(root, []);
}

function traverseInOrder(node, res) {
    if (node.left) {
        traverseInOrder(node.left, res);
    }
    res.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, res);
    }

    return res;
}

function preOrder(root) {
    return traversePreOrder(root, []);
}

function traversePreOrder(node, res) {
    res.push(node.value);

    if (node.left) {
        traversePreOrder(node.left, res);
    }
    if (node.right) {
        traversePreOrder(node.right, res);
    }

    return res;
}

function postOrder(root) {
    return traversePostOrder(root, []);
}

function traversePostOrder(node, res) {
    if (node.left) {
        traversePostOrder(node.left, res);
    }
    if (node.right) {
        traversePostOrder(node.right, res);
    }

    res.push(node.value);

    return res;
}

const root = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
        },
        right: {
            value: 5,
        },
    },
    right: {
        value: 3,
        left: {
            value: 6,
        },
        right: {
            value: 7,
            right: {
                value: 8,
            },
        },
    },
};

//       1
//    2     3
//  4   5  6  7
//              8
console.log(postOrder(root));
