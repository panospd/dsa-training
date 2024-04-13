function knight(n, k, r, c) {
    return probability(n, k, r, c);
}

function probability(n, k, r, c, dp) {
    if (outOfBoundsFor(n)([r, c])) return 0;
    if (k === 0) return 1;

    let result = 0;

    for (let move of moves([r, c])) {
        result += knight(n, k - 1, move[0], move[1]) / 8;
    }

    return result;
}

function get(dp, [i, j]) {
    if (!dp[i]) return null;
    if (!dp[i][j]) return null;

    return dp[i][j];
}

function set(dp, [i, j], value) {
    if (!dp[i]) {
        dp[i] = [];
    }

    dp[i][j] = value;
}

function outOfBoundsFor(n) {
    return ([r, c]) => {
        return r < 0 || c < 0 || r >= n || c >= n;
    };
}

function outOfBounds([r, c]) {
    return r < 0 || c < 0 || r >= n || c >= n;
}
function moves([i, j]) {
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
