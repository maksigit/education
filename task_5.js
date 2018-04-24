function add(a, b) {
    return a + b;
}

function mult(a, b, c, d) {
    return a * b * c * d;
}

function partial(fn, ...partialArgs) {
    return function (...args) {
        return fn.apply(this, partialArgs.concat(args));
    }
}

let add5 = partial(add, 5);

console.log(add5(2)); // 7

let mult23 = partial(mult, 2, 3);

console.log(mult23(4, 5)); // 2*3*4*5 = 120