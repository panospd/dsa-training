function binarySearch(arr, target, left, right) {
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (arr[middle] === target) {
            return middle;
        }

        if (target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return -1;
}

function search(arr, target) {
    const m = binarySearch(arr, target, 0, arr.length - 1);

    if (m === -1) return [-1, -1];

    let start = m;
    let lastLeft = m;
    let end = m;
    let lastEnd = m;

    while (start !== -1) {
        lastLeft = start;
        start = binarySearch(arr, target, 0, start - 1);
    }

    start = lastLeft;

    while (end !== -1) {
        lastEnd = end;
        end = binarySearch(arr, target, end + 1, arr.length - 1);
    }

    end = lastEnd;

    return [start, end];
}

console.log(search([1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4], 4));
