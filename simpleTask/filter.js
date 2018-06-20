// Создайте собственную реализацию функции filter().

function filter(arr, fn) {
  let arrLenght = arr.length;
  let total = [];

  for (let i = 0; i < arrLenght; i++) {
    let n = arr[i];
    if (fn(n)) {
      total[i] = n
    }
  }

  return total
}

console.log(filter([1, 2, 3, 4], n => n < 3));  // [1, 2]
