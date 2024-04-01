function rottingOranges(arr) {
    let { rotten, fresh } = oranges(arr);
    let qLength = rotten.length;

    const directions = resolveDirections(arr);

    let maxMinutes = 0;
    while (rotten.length > 0) {
        if (qLength === 0 && rotten.length > 0) {
            maxMinutes++;
            qLength = rotten.length;
        }

        const { i, j } = rotten.shift();
        qLength--;

        for (let dir in directions) {
            const item = directions[dir](i, j);
            if (item !== null && arr[item[0]][item[1]] === 1) {
                fresh--;
                arr[item[0]][item[1]] = 2;
                rotten.push({ i: item[0], j: item[1] });
            }
        }
    }

    return fresh > 0 ? -1 : maxMinutes;
}

function oranges(arr) {
    const rotten = [];
    let fresh = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 2) {
                rotten.push({ i, j });
            } else if (arr[i][j] === 1) {
                fresh++;
            }
        }
    }

    return { rotten, fresh };
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
    [2, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1],
];

const arr2 = [
    [2, 0, 0, 0, 0],
    [1, 1, 0, 0, 2],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1],
];

console.log(rottingOranges(arr));
console.log(rottingOranges(arr2));
