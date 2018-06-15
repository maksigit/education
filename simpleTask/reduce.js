// Создайте собственную реализацию функции reduce().

function reduce(array, fn, value) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    value = fn(value, current, i, array) //???????
  }
  return value
}


console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // 10