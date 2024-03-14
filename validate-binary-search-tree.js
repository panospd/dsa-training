function validate(root) {
    return validateBinary(root, null, null);
}

function validateBinary(node, min, max) {
    return (
        !node ||
        ((!min || node.value > min) &&
            (!max || node.value < max) &&
            validateBinary(node.left, min, node.value) &&
            validateBinary(node.right, node.value, max))
    );
}

const root = {
    value: 1,
    left: {
        value: 2,
    },
    right: {
        value: 4,
        left: {
            value: 3,
        },
        right: {
            value: 5,
            left: {
                value: 6,
            },
            right: {
                value: 7,
            },
        },
    },
};

//               1
//          2          4
//                  3       5
//                        6    7

console.log(validate(root));
