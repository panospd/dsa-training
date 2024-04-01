function bfs(root) {
    if (!root) return [];
    let q = [root];

    let length = 1;
    let count = 0;

    const result = [];

    while (q.length > 0) {
        const node = q.shift();
        count++;

        node.left && q.push(node.left);
        node.right && q.push(node.right);

        if (count === length) {
            result.push(node.value);
            count = 0;
            length = q.length;
        }
    }

    return result;
}

function dfs(root) {
    return dfsright(root, 1, []);
}

function dfsright(node, currentDepth, res) {
    if (!node) return res;

    if (res.length < currentDepth) {
        res.push(node.value);
    }

    return dfsright(
        node.left,
        currentDepth + 1,
        dfsright(node.right, currentDepth + 1, res)
    );
}

const root = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4,
            right: {
                value: 7,
                left: {
                    value: 8,
                },
                right: {
                    value: 11,
                },
            },
        },
        right: {
            value: 5,
            right: {
                value: 9,
            },
        },
    },
    right: {
        value: 3,
        right: {
            value: 6,
        },
    },
};

//        1
//      2   3
//    4    5  6
//          7
//         8
console.log(bfs(root));
console.log(dfs(root));
