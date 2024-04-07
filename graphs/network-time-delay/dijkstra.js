const priorityQueue = require("../../heaps/priority-queue");

function delay(n, k, times) {
    const distances = new Array(n).fill(Infinity);
    distances[k - 1] = 0;
    const graph = distances.map(() => []);

    for (let time of times) {
        const [source, target, weight] = time;
        graph[source - 1].push([target - 1, weight]);
    }

    const heap = new priorityQueue.PriorityQueue(
        (a, b) => distances[a] < distances[b]
    );

    heap.push(k - 1);

    while (!heap.isEmpty()) {
        const currentVertex = heap.pop();
        const children = graph[currentVertex];

        for (let i = 0; i < children.length; i++) {
            const [child, weight] = children[i];

            if (distances[currentVertex] + weight < distances[child]) {
                distances[child] = distances[currentVertex] + weight;
                heap.push(child);
            }
        }
    }

    const ans = Math.max(...distances);

    return ans === Infinity ? -1 : ans;
}

console.log(
    delay(5, 1, [
        [1, 2, 9],
        [1, 4, 2],
        [2, 5, 1],
        [4, 2, 4],
        [4, 5, 6],
        [3, 2, 3],
        [5, 3, 7],
        [3, 1, 5],
    ])
);
