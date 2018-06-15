// Создайте собственную реализацию функции filter().

function filter (arr, condition) {
  let arrLenght = arr.length;
  let total = [];

  for (let i = 0; i < arrLenght; i++) {
    let n = arr[i];

    if(n < 3) {
      total[i] = arr[i]
    }
  }

  return total
}

console.log(filter([1, 2, 3, 4], n => n < 3));  // [1, 2]
