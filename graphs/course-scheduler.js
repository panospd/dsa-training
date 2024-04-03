function scheduler(n, pairs) {
    const graph = new Array(n).fill(1).map((i) => []);
    for (let pair of pairs) {
        graph[pair[1]].push(pair[0]);
    }

    for (
        let startingCourse = 0;
        startingCourse < graph.length;
        startingCourse++
    ) {
        const q = [...graph[startingCourse]];
        const seen = {};

        while (q.length > 0) {
            const current = q.shift();
            seen[current] = true;

            if (current === startingCourse) return false;

            for (let next of graph[current]) {
                if (!seen[next]) {
                    q.push(next);
                }
            }
        }
    }

    return true;
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
