function traverseBfs(arr) {
    const values = [];
    const visited = [];

    const directions = resolveDirections(arr);

    const queue = [[0, 0]];
    markAsVisited(visited, 0, 0);

    while (queue.length > 0) {
        const [i, j] = queue.shift();
        values.push(arr[i][j]);

        for (let dir in directions) {
            const item = directions[dir](i, j);
            if (item !== null && !alreadyVisitedAt(visited, ...item)) {
                queue.push(item);
                markAsVisited(visited, ...item);
            }
        }
    }

    return values;
}

function resolveDirections(arr) {
    return {
        up: (i, j) => {
            return i > 0 ? [i - 1, j] : null;
        },
        right: (i, j) => {
            return j < arr[0].length - 1 ? [i, j + 1] : null;
        },
        down: (i, j) => {
            return i < arr.length - 1 ? [i + 1, j] : null;
        },
        left: (i, j) => {
            return j > 0 ? [i, j - 1] : null;
        },
    };
}

function markAsVisited(visited, r, c) {
    if (visited[r] === undefined) {
        visited[r] = [];
    }

    visited[r][c] = true;
}

function alreadyVisitedAt(visited, r, c) {
    return visited[r] !== undefined && visited[r][c] != undefined;
}

const arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
];

console.log(traverseBfs(arr));
