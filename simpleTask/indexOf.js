// Создайте собственную реализацию функции indexOf() для массивов.

function indexOf(arr, inx) {
  let arrLenght = arr.length;

  let indeOf = 0;

  for (let i = 0; i < arrLenght; i++) {
    if (arr[i] === inx) {
      indeOf = i;
      break
    } else {
      indeOf = arrLenght - inx
    }
  }
  return indeOf
}

console.log(indexOf([1, 2, 3], 1));              // 0
console.log(indexOf([1, 2, 3], 2));              // 1
console.log(indexOf([1, 2, 3], 4));              // -1
console.log(indexOf([1, 2, 3], 5));              // -2