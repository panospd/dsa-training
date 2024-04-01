function selection(arr) {
    let floor = 0;

    while (floor < arr.length - 1) {
        let minAtIndex = floor;

        for (let i = floor + 1; i < arr.length; i++) {
            if (arr[i] < arr[minAtIndex]) {
                minAtIndex = i;
            }
        }

        if (minAtIndex > floor) {
            const temp = arr[floor];
            arr[floor] = arr[minAtIndex];
            arr[minAtIndex] = temp;
        }

        floor++;
    }

    return arr;
}

console.log(selection([5, 4, 3, 3, 2, 1]));
