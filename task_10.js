let a = {a: 1, b: 2};
let b = function () {};
let c = [1, 2, 3];
const d = [];
d[100] = 1;

function count(obj) {

    let i = 0;

    for (key in obj) {
        i++
    }
    return i
}

console.log(count(a)); // 2

console.log(count(b)); // 0

console.log(count(c)); // 3

console.log(count(d)); // 1
