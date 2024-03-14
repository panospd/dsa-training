function removeInvalidParentheses(str) {
    const arr = str.split("");

    const openParenthesis = [];

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];

        if (el === "(") {
            openParenthesis.push(i);
        } else if (el === ")") {
            const open = openParenthesis.pop();

            if (open === undefined) {
                arr[i] = "";
            }
        }
    }

    while (openParenthesis.length > 0) {
        const indextoRemove = openParenthesis.pop();

        arr[indextoRemove] = "";
    }

    return arr.join("");
}

const input = "(aaaaa()";
console.log(removeInvalidParentheses(input));
