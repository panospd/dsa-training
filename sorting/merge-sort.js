function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let middle = Math.floor((arr.length - 1) / 2);

    const l = arr.splice(0, middle + 1);
    const r = arr;

    return merge(mergeSort(l), mergeSort(r));
}

function merge(left, right) {
    let res = [];
    let l = 0;
    let r = 0;
    while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
            res.push(left[l]);
            l++;
        } else {
            res.push(right[r]);
            r++;
        }
    }

    if (l < left.length) {
        return [...res, ...left.splice(l, left.length - l)];
    }

    return [...res, ...right.splice(r, right.length - r)];
}

console.log(mergeSort([2, 3, 4, 2, 2, 5]));

// [5, 3, 4, 1, 2])

//[5, 3]    [4,1,2]

//
