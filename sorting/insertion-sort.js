function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const item = arr.splice(i, 1)[0];
                arr.splice(j, 0, item);
                break;
            }
        }
    }

    return arr;
}

console.log(insertionSort([3, 1, 2, 1, 0]));
