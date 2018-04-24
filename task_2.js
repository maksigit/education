function sequence(start = 0, step = 1) {
    start -= step;

    return function () {
        return start += step;

    }
}

function take(gen, x) {
    let totalArr = [];

    for (let i = 0; i < x; i++) {
        totalArr.push(gen());
    }

    return totalArr
}

let gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]