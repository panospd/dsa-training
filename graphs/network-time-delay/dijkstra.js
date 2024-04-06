const priorityQueue = require("./priority-queue");

function delay(n, k, times) {
    const graph = {};
    for (let i = 1; i <= n; i++) {
        graph[i] = {};
    }

    for (let time of times) {
        graph[time[0]][time[1]] = time[2];
    }

    const nodeTimes = new Array(n).fill(Infinity);

    nodeTimes[k - 1] = 0;
    const visited = [];
    visited[k] = true;
    const current = k;

    while (current !== null) {
        const targets = graph[current];

        for (let node in targets) {
            const delay = targets[node];
            if (visited(node)) continue;
            if (nodeTimes[node - 1] > delay) {
                nodeTimes[node - 1] = delay;
            }
        }
    }
}

const q = new priorityQueue.PriorityQueue();

console.log(q);

q.push({ delay: 5, closed: false });
console.log(q);

// console.log(
//     delay(5, 1, [
//         [1, 2, 9],
//         [1, 4, 2],
//         [2, 5, 1],
//         [4, 2, 18],
//         [4, 5, 6],
//         [3, 2, 3],
//         [5, 3, 7],
//         [3, 1, 5],
//     ])
// );
