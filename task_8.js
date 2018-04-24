let characters = [
    {'name': 'barney', 'age': 36},
    {'name': 'fred', 'age': 40}
];

function pluck(obj, field) {
    let someArr = [];

    for (let num of obj) {
        someArr.push(num[field])
    }

    return someArr
}

console.log(pluck(characters, 'name'));