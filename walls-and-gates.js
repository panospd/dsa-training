function wallsAndGates(arr) {
    console.log(arr);
    const emptyRooms = getEmptyRooms(arr);
    const directions = resolveDirections(arr);

    for (let i = 0; i < emptyRooms.length; i++) {
        const room = emptyRooms[i];
        arr[room[0]][room[1]] = paths(arr, room, directions, 0, []);
    }

    return arr;
}

function paths(arr, current, directions, steps, visited) {
    const [i, j] = current;

    if (arr[i][j] === -1) return Infinity;
    if (arr[i][j] === 0) return steps;

    const results = [];

    for (let dir in directions) {
        const item = directions[dir](current);

        if (item !== null && !alreadyVisitedAt(visited, item)) {
            const pathVisited = [...visited];
            markAsVisited(pathVisited, item);
            const res = paths(arr, item, directions, steps + 1, pathVisited);
            results.push(res);
        }
    }

    return Math.min(...results);
}

function markAsVisited(visited, [r, c]) {
    if (visited[r] === undefined) {
        visited[r] = {};
    }

    visited[r][c] = true;
}

function alreadyVisitedAt(visited, [r, c]) {
    return visited[r] !== undefined && visited[r][c] != undefined;
}

function getEmptyRooms(arr) {
    const empty = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === Infinity) {
                empty.push([i, j]);
            }
        }
    }

    return empty;
}

function resolveDirections(arr) {
    return {
        up: ([i, j]) => {
            return i > 0 ? [i - 1, j] : null;
        },
        right: ([i, j]) => {
            return j < arr[0].length - 1 ? [i, j + 1] : null;
        },
        down: ([i, j]) => {
            return i < arr.length - 1 ? [i + 1, j] : null;
        },
        left: ([i, j]) => {
            return j > 0 ? [i, j - 1] : null;
        },
    };
}

const arr = [
    [Infinity, -1, 0, Infinity],
    [Infinity, Infinity, Infinity, -1],
    [Infinity, -1, Infinity, -1],
    [0, -1, Infinity, Infinity],
];

const arr2 = [
    [Infinity, -1, 0, Infinity],
    [Infinity, Infinity, Infinity, -1],
    [Infinity, -1, Infinity, -1],
    [0, -1, -1, Infinity],
];

console.log(wallsAndGates(arr));
console.log(wallsAndGates(arr2));
