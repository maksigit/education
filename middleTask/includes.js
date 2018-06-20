// Реализуйте функцию includes(), которая возвращает true или false в зависимости от того,
// встречается ли переданное ей число в переданном ей отсортированном массиве. Может ли функция
// решить эту задачу за время O(log(N))?

function includes(arr, num) {
  let arrLenght = arr.length;
  let check = false;

  for (let i = 0; i < arrLenght; i++) {
    if (arr[i] === num) {
      check = true;
    }
  }

  return check
}


console.log(includes([1, 3, 8, 10], 8));            // true
console.log(includes([1, 3, 8, 8, 15], 15));        // true
console.log(includes([1, 3, 8, 10, 15], 9));        // false