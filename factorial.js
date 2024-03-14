function factorial(x) {
    return factorialCalc(x);
}

function factorialCalc(x, total = 1) {
    if (x === 0) return total;

    return factorialCalc(x - 1, total * x);
}

console.log(factorial(4));
