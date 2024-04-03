function scheduler(n, pairs) {
    const graph = new Array(n).fill(1).map((i) => []);
    const inDegree = new Array(n).fill(0);
    for (let pair of pairs) {
        graph[pair[1]].push(pair[0]);
        inDegree[pair[0]]++;
    }

    const startingPoints = [];

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            startingPoints.push(i);
        }
    }

    while (startingPoints.length > 0) {
        const next = startingPoints.pop();
        const vertexes = graph[next];

        for (let v = 0; v < vertexes.length; v++) {
            const vertex = vertexes[v];
            inDegree[vertex] -= 1;

            if (inDegree[vertex] === 0) {
                startingPoints.push(vertex);
            }
        }
    }

    return inDegree.filter((i) => i !== 0).length === 0;
}

console.log(
    scheduler(6, [
        [1, 0],
        [2, 1],
        [2, 5],
        [0, 3],
        [4, 3],
        [3, 5],
        [4, 5],
    ])
);
