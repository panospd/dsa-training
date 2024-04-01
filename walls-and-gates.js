function wallsAndGates(arr) {
    console.log(arr);
    const gates = getGates(arr);
    const directions = resolveDirections(arr);

    for (let i = 0; i < gates.length; i++) {
        const room = gates[i];
        paths(arr, room, directions, 0);
    }

    return arr;
}

function paths(arr, current, directions, steps) {
    if (current === null) return;
    const [i, j] = current;

    if (steps > arr[i][j]) return;
    arr[i][j] = steps;

    for (let dir in directions) {
        paths(arr, directions[dir](current), directions, steps + 1);
    }
}

function getGates(arr) {
    const gates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                gates.push([i, j]);
            }
        }
    }

    return gates;
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
//console.log(wallsAndGates(arr2));
