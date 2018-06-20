// Создайте собственную реализацию функции indexOf() для массивов.

function indexOf(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i
    }
  }
  return -1
}

console.log(indexOf([1, 2, 3], 1));              // 0
console.log(indexOf([1, 2, 3], 2));              // 1
console.log(indexOf([1, 2, 3], 4));              // -1
console.log(indexOf([1, 2, 3], 5));              // -1