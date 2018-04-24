function square(x) {
    return x * x;
}

function map(fn, array) {
    let arrayLenght = array.length;
    let totalArr = [];

    for (let i = 0; i < arrayLenght; i++) {
        totalArr.push(fn(array[i]));
    }
    return totalArr;
}

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]