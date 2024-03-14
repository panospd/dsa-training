function levelOrder(root) {
    return levelOrderOf([root], []);
}

function levelOrderOf(nodes, res) {
    if (nodes.length === 0) return res;
    res.push(nodes.map((n) => n.value));

    let children = [];

    for (let node of nodes) {
        node.left && children.push(node.left);
        node.right && children.push(node.right);
    }

    return levelOrderOf(children, res);
}

// Soltuion 2 - Iterative

function iterative(root) {
    if (!root) return [];

    const q = [root];

    let count = 0;
    let length = 1;
    const res = [[]];

    while (q.length > 0) {
        const node = q.shift();
        res[res.length - 1].push(node.value);

        count++;

        if (node.left) q.push(node.left);
        if (node.right) q.push(node.right);

        if (count === length && q.length > 0) {
            res.push([]);
            count = 0;
            length = q.length;
        }
    }

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
        },
    },
};

console.log(levelOrder(root));
console.log(iterative(root));
