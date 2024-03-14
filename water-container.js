const maxWaterContainer = function (nums) {
    let max = 0;

    while (nums.length > 0) {
        const area =
            Math.min(nums[0], nums[nums.length - 1]) * (nums.length - 1);

        max = Math.max(area, max);

        if (nums[0] < nums[nums.length - 1]) {
            nums.shift();
        } else {
            nums.pop();
        }
    }

    return max;
};

console.log(maxWaterContainer([5, 7, 8]));
