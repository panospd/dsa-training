function islands(arr) {
    console.log(arr);
    let islands = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 1) {
                islands += mapIsland(arr, [i, j]);
            }
        }
    }
    return islands;
}

function mapIsland(arr, item) {
    if (arr[item[0]][item[1]] !== 1) return 0;

    const q = [];

    q.push(item);
    arr[item[0]][item[1]] = 0;

    const directions = resolveDirections(arr);

    while (q.length > 0) {
        const cur = q.shift();
        for (let dir in directions) {
            const child = directions[dir](...cur);
            if (child !== null && arr[child[0]][child[1]] === 1) {
                q.push(child);
                arr[child[0]][child[1]] = 0;
            }
        }
    }

    return 1;
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

const arr = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
];

console.log(islands(arr));

console.log();

const arr2 = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 1, 1, 0],
    [1, 0, 1, 0, 1],
];

console.log(islands(arr2));
