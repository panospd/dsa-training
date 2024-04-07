function delay(n, k, times) {
    const distances = new Array(n).fill(Infinity);
    distances[k - 1] = 0;

    let anyValueUpdated = true;
    let count = 0;
    while (anyValueUpdated) {
        console.log(distances);
        count++;
        if (count > n - 1) return -1;
        anyValueUpdated = false;
        for (let time of times) {
            const [s, t, w] = time;

            if (distances[s - 1] + w < distances[t - 1]) {
                distances[t - 1] = distances[s - 1] + w;
                anyValueUpdated = true;
            }
        }
    }

    const ans = Math.max(...distances);

    return ans === Infinity ? -1 : ans;
}

console.log(
    delay(5, 1, [
        [1, 2, 9],
        [1, 4, 2],
        [2, 5, 1],
        [4, 2, 4],
        [4, 5, 6],
        [3, 2, 3],
        [5, 3, 7],
        [3, 1, -15],
    ])
);
