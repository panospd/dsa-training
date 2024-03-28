function traverseDfs(arr) {
    const values = [];
    dfs(arr, 0, 0, {}, values);
    return values;
}

function dfs(arr, i, j, visited, values) {
    values.push(arr[i][j]);
    markAsVisited(visited, i, j);

    const directions = resolveDirections(arr);

    for (let dir in directions) {
        const item = directions[dir](i, j);
        if (item !== null) {
            goToIn(item, arr, visited, values);
        }
    }
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

function goToIn(item, arr, visited, values) {
    if (!alreadyVisitedAt(visited, ...item)) {
        return dfs(arr, ...item, visited, values);
    }
}

function markAsVisited(visited, r, c) {
    if (visited[r] === undefined) {
        visited[r] = {};
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

console.log(traverseDfs(arr));
