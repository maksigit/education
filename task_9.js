let input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    return x % 2 == 0;
} // проверяет на четность

function filter(arr, Fn) {

    let totalArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Fn(arr[i]) == true) {
            totalArr.push(arr[i])
        }
    }

    return totalArr
}

console.log(filter(input, isEven)); // [2, 4, 6]
console.log(input); // [1, 2, 3, 4, 5, 6]