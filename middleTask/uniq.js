// Реализуйте функцию uniq(), которая принимает массив чисел и возвращает уникальные числа,
// найденные в нём. Может ли функция решить эту задачу за время O(N)?


function uniq(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] === arr[i + j]) {
        delete arr[i + j];
      }
    }
  }

  function n(value) {
    return value !== undefined;
  }
  arr = arr.filter(n);
  return arr;
}


console.log(uniq([]));                              // []
console.log(uniq([1, 4, 2, 2, 3, 4, 8]));           // [1, 4, 2, 3, 8]