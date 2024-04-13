function climbStairs(steps) {
    const cost = [];
    return Math.min(
        minCost(steps, steps.length - 1, cost),
        minCost(steps, steps.length - 2, cost)
    );
}

function minCost(steps, i, cost) {
    if (i < 0) return 0;
    if (i < 2) return steps[i];

    if (!cost[i]) {
        cost[i] =
            steps[i] +
            Math.min(minCost(steps, i - 1, cost), minCost(steps, i - 2, cost));
    }

    return cost[i];
}

console.log(climbStairs([20, 15, 30, 5]));
console.log(climbStairs([20]));
