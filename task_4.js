function sequence(start = 0, step = 1) {
    start -= step;

    return function () {
        return start += step;

    }
}

let gen = sequence(1, 1);

function square2(x) {
    return x * x;
}

function add(a, b) {
    return a + b;
}

function fmap1(a, gen) {

    return function () {
        return a(gen())
    }
}

function fmap2(squereFn, addFn) {

    return function (...arg) {
        let sum = 0;
        for (let i = 0; i < arg.length; i = i + 2) {
            sum += addFn(arg[i], arg[i + 1])
        }
        return squereFn(sum)
    }
}


let squareGen = fmap1(square2, gen);
console.log(squareGen()); // 1
console.log(squareGen()); // 4

const squareAdd = fmap2(square2, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2