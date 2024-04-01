function maxDepth(root) {
    return findDepth(root, 0);
}

function findDepth(node, depth) {
    if (!node) return depth;
    depth++;
    return Math.max(findDepth(node.left, depth), findDepth(node.right, depth));
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
            left: {
                value: 6,
                right: {
                    value: 7,
                },
            },
        },
    },
    right: {
        value: 2,
        left: {
            value: 4,
        },
        right: {
            value: 5,
            left: {
                value: 6,
                right: {
                    value: 7,
                    left: {
                        value: 6,
                        right: {
                            value: 7,
                            left: {
                                value: 6,
                                right: {
                                    value: 7,
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

console.log(maxDepth(root));
