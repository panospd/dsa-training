function quickSelect(arr, k) {
    return select(arr, 0, arr.length - 1, arr.length - k);
}

// 1 2 3 4 5 6

function select(arr, left, right, k) {
    if (left < right) {
        const p = partition(arr, left, right);

        if (p === k) {
            return arr[k];
        }

        if (k < p) {
            return select(arr, left, p - 1, k);
        } else {
            return select(arr, p + 1, right, k);
        }
    }
}

function partition(arr, left, right) {
    let p = right;
    let i = left;

    while (i < p) {
        if (arr[i] > arr[p]) {
            if (p === i + 1) {
                const a = arr[i];
                arr[i] = arr[p];
                arr[p] = a;
            } else {
                const prev = arr[p - 1];
                arr[p - 1] = arr[p];
                arr[p] = arr[i];
                arr[i] = prev;
            }

            p--;
        } else {
            i++;
        }
    }

    return p;
}

console.log(quickSelect([5, 3, 4, 3, 2, 1], 3));
