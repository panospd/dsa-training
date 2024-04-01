function bfs(arr) {
    const q = [0];
    const seen = [];
    const result = [];

    while (q.length > 0) {
        const vertex = q.shift();
        result.push(vertex);
        seen[vertex] = true;

        const connections = arr[vertex];

        if (connections) {
            for (let i = 0; i < connections.length; i++) {
                const connection = connections[i];
                if (!seen[connection]) {
                    q.push(connection);
                }
            }
        }
    }

    return result;
}

const arr = [[1, 3], [0], [3, 8], [0, 4, 5, 2], [3, 6], [3], [4, 7], [6], [2]];

console.log(bfs(arr));
