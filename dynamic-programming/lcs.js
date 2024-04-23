function lcs(text1, text2) {
    const dp = create_dp(text1, text2);

    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1[i] === text2[j]) {
                dp[i][j] = 1 + get(dp, i - 1, j - 1);
            } else {
                dp[i][j] = Math.max(get(dp, i - 1, j), get(dp, i, j - 1));
            }
        }
    }

    return dp[text1.length - 1][text2.length - 1];
}

function create_dp(text1, text2) {
    return new Array(text1.length)
        .fill(0)
        .map((i) => new Array(text2.length).fill(0));
}

function get(dp, i, j) {
    if (i < 0 || j < 0) return 0;
    return dp[i][j];
}

console.log(lcs("ace", "abcde"));

// ace
// abcde

//    a  b  c  d  e
// a  1  1  1  1  1
// c  1  1  2  2  2
// e  1  1  2  2  3

//
