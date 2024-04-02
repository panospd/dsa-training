function dfs(arr) {
    const seen = [];
    const res = [];

    visit(arr, 0, seen, res);

    return res;
}

function visit(arr, vertex, seen, result) {
    result.push(vertex);
    seen[vertex] = true;

    const connections = arr[vertex];

    if (connections) {
        for (let i = 0; i < connections.length; i++) {
            const connection = connections[i];
            if (!seen[connection]) {
                visit(arr, connection, seen, result);
            }
        }
    }
}

const arr = [[1, 3], [0], [3, 8], [0, 4, 5, 2], [3, 6], [3], [4, 7], [6], [2]];

console.log(dfs(arr));
