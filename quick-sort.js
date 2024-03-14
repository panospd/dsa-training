function quickSort(arr) {
    sort(arr, 0, arr.length - 1);
    return arr;
}

function sort(arr, left, right) {
    if (left < right) {
        const p = partition(arr, left, right);
        sort(arr, left, p - 1);
        sort(arr, p + 1, right);
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

console.log(quickSort([5, 3, 4, 3, 2, 1]));
