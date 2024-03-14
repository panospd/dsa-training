function nodesCount(root) {
    const h = maxDepth(root);
    const n = Math.pow(2, h + 1) - 1;

    const leafNodes = leafNodesCount(root, 0, h, 0);
    const maxLeafs = Math.pow(2, h);
    return n - (maxLeafs - leafNodes);
}

function leafNodesCount(node, depth, maxDepth, count) {
    if (!node || stop) return count;

    console.log(node.value);

    if (node && depth == maxDepth) {
        count++;
    }

    if (!node.left) return count;

    count = leafNodesCount(node.left, depth + 1, maxDepth, count);

    if (!node.right) {
        return count;
    }

    count = leafNodesCount(node.right, depth + 1, maxDepth, count);

    return count;
}

function maxDepth(root) {
    let cur = root;
    let depth = -1;

    while (cur) {
        depth++;
        cur = cur.left;
    }

    return depth;
}

function postOrder(node, res) {
    if (!node) return res;

    if (node.left) {
        postOrder(node.left, res);
    }

    if (node.right) {
        postOrder(node.right, res);
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
            left: {
                value: 8,
            },
            right: {
                value: 9,
            },
        },
        right: {
            value: 5,
            left: {
                value: 8,
            },
            right: {
                value: 9,
            },
        },
    },
    right: {
        value: 3,
        left: {
            value: 6,
            left: {
                value: 8,
            },
            right: {
                value: 9,
            },
        },
        right: {
            value: 7,
            left: {
                value: 8,
            },
            right: {
                value: 9,
            },
        },
    },
};

//       1
//     2     3
//   4   5  6  7
// 8  9

// [4, 5, 2, 6, 8, 7, 3]
//console.log(nodesCount(root));

function nodesCountOptimized(root) {
    if (!root) return 0;
    const h = maxDepth(root);
    const leafNodes = numberOfLeafNodes(root, h);

    const totalExludingLeaf = Math.pow(2, h) - 1;

    return totalExludingLeaf + leafNodes;
}

function numberOfLeafNodes(root, h) {
    let left = 0;
    let right = Math.pow(2, h) - 1;
    let m = Math.ceil((left + right) / 2);

    while (left <= right) {
        let res = printAt(root, m, 0, h, 0, Math.pow(2, h) - 1);

        if (res === null) {
            right = m - 1;
        } else {
            left = m + 1;
        }

        m = Math.ceil((left + right) / 2);
    }
    return m;
}

function printAt(node, index, depth, maxDepth, l, r) {
    const m = Math.ceil((l + r) / 2);

    if (depth === maxDepth) {
        if (!node) {
            return null;
        } else {
            return index;
        }
    }

    if (index < m) {
        return printAt(node.left, index, depth + 1, maxDepth, l, m - 1);
    } else {
        return printAt(node.right, index, depth + 1, maxDepth, m + 1, r);
    }
}

console.log("Res", nodesCountOptimized(root));
