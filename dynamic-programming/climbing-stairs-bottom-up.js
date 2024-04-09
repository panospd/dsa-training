function climbStairs(steps) {
    if (steps.length < 2) return 0;

    let twoBefore = steps[0];
    let oneBefore = steps[1];

    for (let i = 2; i < steps.length; i++) {
        const current = steps[i] + Math.min(oneBefore, twoBefore);

        twoBefore = oneBefore;
        oneBefore = current;
    }

    return Math.min(oneBefore, twoBefore);
}

console.log(climbStairs([20, 15, 30, 5]));
console.log(climbStairs([20]));
