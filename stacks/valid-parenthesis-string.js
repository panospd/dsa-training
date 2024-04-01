function valid(str) {
    const ignore = {};
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        const el = str[i];

        if (el === "*") continue;

        if (stack.length === 0 || el === "(") {
            stack.unshift({ el, i });
            continue;
        }

        if (el === ")") {
            if (stack[0].el === ")") {
                stack.unshift({ el, i });
            } else {
                const top = stack.shift();
                ignore[top.i] = true;
                ignore[i] = true;
            }
        }
    }

    stack = [];

    for (let i = 0; i < str.length; i++) {
        const el = str[i];

        if (ignore[i]) continue;

        if (stack.length === 0) {
            stack.unshift(el);
            continue;
        }

        if (el === "(") {
            stack.unshift(el);
            continue;
        }

        if (el === "*") {
            if (stack[0] === "(") {
                stack.shift();
            } else if (stack[0] === ")") {
                return false;
            }

            continue;
        }

        if (stack[0] === ")") return false;
        stack.shift();
    }

    return stack.filter((el) => el !== "*").length === 0;
}

console.log(valid("(((((()*)(*)*))())())(()())())))((**)))))(()())()"));

// ignore: 5, 6
// ((((((

// (((((*)(*

// "***)))**)))"

// ")"
