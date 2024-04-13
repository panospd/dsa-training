function knight(n, k, r, c) {
    const dp = new Array(k + 1)
        .fill(0)
        .map((i) =>
            new Array(n).fill(0).map((i) => new Array(n).fill(undefined))
        );
    const res = probability(n, k, r, c, dp);
    for (let arr of dp) {
        console.log(arr);
    }
    return res;
}

function probability(n, k, r, c, dp) {
    if (outOfBoundsFor(n)([r, c])) return 0;
    if (k === 0) return 1;

    if (get(dp, k, [r, c])) return get(dp, k, [r, c]);

    let result = 0;

    for (let move of moves([r, c])) {
        result += probability(n, k - 1, move[0], move[1], dp) / 8;
    }

    set(dp, k, [r, c], result);

    return result;
}

function get(dp, k, [i, j]) {
    return dp[k][i][j];
}

function set(dp, k, [i, j], value) {
    dp[k][i][j] = value;
}

function outOfBoundsFor(n) {
    return ([r, c]) => {
        return r < 0 || c < 0 || r >= n || c >= n;
    };
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
