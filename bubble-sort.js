function bubble(arr) {
    let ceiling = arr.length - 1;

    while (ceiling > 0) {
        for (let i = 0; i < ceiling; i++) {
            if (arr[i] > arr[i + 1]) {
                const a = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = a;
            }
        }

        ceiling--;
    }

    return arr;
}

console.log(bubble([6, 5, 0]));
