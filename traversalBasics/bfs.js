function bfs(root) {
    const q = [];

    if (!root) return [];

    q.push(root);

    const res = [];

    while (q.length > 0) {
        const el = q.shift();

        res.push(el.value);

        el.left && q.push(el.left);
        el.right && q.push(el.right);
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
    },
};

console.log(bfs(root));
