function trappingRainwaterBrutForce(height) {
    let total = 0;
    for (let i = 0; i < height.length; i++) {
        const element = height[i];

        let maxL = element;
        let maxR = element;

        let pl = i;
        let pr = i;

        while (pl >= 0) {
            maxL = Math.max(maxL, height[pl]);
            pl--;
        }

        while (pr < height.length) {
            maxR = Math.max(maxR, height[pr]);
            pr++;
        }

        total += Math.min(maxL, maxR) - element;
    }

    return total;
}

console.log(trappingRainwaterBrutForce([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

function trappingWaterOptimised(height) {
    let pL = 0;
    let pR = height.length - 1;
    let maxL = 0;
    let maxR = 0;
    let total = 0;

    while (pL < pR) {
        if (height[pL] <= height[pR]) {
            if (maxL <= height[pL]) {
                maxL = height[pL];
            } else {
                total += maxL - height[pL];
            }
            pL++;
        } else {
            if (maxR <= height[pR]) {
                maxR = height[pR];
            } else {
                total += maxR - height[pR];
            }
            pR--;
        }
    }

    return total;
}

console.log(trappingWaterOptimised([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
