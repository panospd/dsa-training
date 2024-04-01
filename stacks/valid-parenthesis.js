function valid(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const element = str[i];

        const opening = openingOf(element);

        if (opening === null) {
            stack.unshift(element);
        } else {
            if (stack[0] === openingOf(element)) {
                stack.shift();
            } else {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function openingOf(c) {
    switch (c) {
        case ")":
            return "(";
        case "}":
            return "{";
        case "]":
            return "[";
        default:
            return null;
    }
}

let str = "{()()(()())}}";
console.log(valid(str));

// (((*)*

// ((**

// (*)*))

//
