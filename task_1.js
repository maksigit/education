function sequence(start = 0, step = 1) {
    start -= step;

    return function () {
        return start += step;

    }
}


let generator = sequence(10, 3);

console.log(generator()); // 10
console.log(generator()); // 13