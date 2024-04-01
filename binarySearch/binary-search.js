function search(arr, target) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        const middle = Math.floor((l + r) / 2);

        if (target === arr[middle]) {
            return middle;
        } else if (target < middle) {
            r = middle - 1;
        } else {
            l = middle + 1;
        }
    }

    return -1;
}

console.log(search(["a", "b", "c", "d"], "d"));
/// a b c d
//  l m   r
//    l m r
//        lr
