function knight(n, k, r, c) {
    const dp = new Array(n).fill(0).map((i) => new Array(n).fill(0));
    dp[r][c] = 1;
    const q = [[r, c]];

    console.log(dp);

    for (let step = 1; step <= k; step++) {
        let movesToAdd = [];
        while (q.length > 0) {
            const cur = q.pop();

            for (let move of movesFor(cur)) {
                if (outOfBounds(n, move)) continue;
                dp[move[0]][move[1]] += dp[cur[0]][cur[1]] / 8;
                movesToAdd.push(move);
            }

            dp[cur[0]][cur[1]] = 0;
        }

        console.log(dp);

        q.push(...movesToAdd);
    }

    return dp.reduce((acc, cur) => {
        acc += cur.reduce((a, n) => {
            a += n;
            return a;
        }, 0);
        return acc;
    }, 0);
}

function outOfBounds(n, [r, c]) {
    return r < 0 || c < 0 || r >= n || c >= n;
}

function movesFor([i, j]) {
    return [
        [-2, -1],
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, -1],
        [2, 1],
        [1, -2],
        [-1, -2],
    ].map((move) => {
        return [i + move[0], j + move[1]];
    });
}

console.log(knight(6, 2, 2, 2));
