const findTwoSum = (nums, target) => {
    for (let p1 = 0; p1 < nums.length - 1; p1++) {
        for (let p2 = p1 + 1; p2 < nums.length; p2++) {
            if (nums[p1] + nums[p2] === target) {
                return [p1, p2];
            }
        }
    }

    return null;
};

//console.log(findTwoSum([1, 5, 7, 2, 9], 11));

const optimizedFindTwoSum = (nums, target) => {
    const numsMap = {};

    for (let p = 0; p < nums.length; p++) {
        const currentMapVal = numsMap[nums[p]];
        if (currentMapVal >= 0) return [currentMapVal, p];
        const numberToFind = target - nums[p];
        numsMap[numberToFind] = p;
    }

    return null;
};

console.log(optimizedFindTwoSum([1, 5, 7, 2, 9], 11));
