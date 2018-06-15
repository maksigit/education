// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел
// (то есть, числа в нём не повторяются) от 1 до некоего числа n, и возвращает число, отсутствующее
// в последовательности. Там может быть либо одно отсутствующее число, либо их может не быть вовсе.
//
//   Способны ли вы добиться того, чтобы функция решала задачу за время O(N)? Подсказка: есть
// одна хорошая формула, которой вы можете воспользоваться.

function missing (arr) {
  let arrSort = arr.sort();
  console.log(arrSort);
  let arrLenght = arr.length;
  let shortage = undefined;

  for(let i = 0; i < arrLenght - 1; i++) {
    let current = arrSort[i];
    if (arrSort[0] === 2) {
      shortage = 1;
    } else if ((arrSort[i+1] - current) > 1) {
      shortage = current + 1
    }
  }
  return shortage
}

console.log(missing([]));                         // undefined
console.log(missing([1, 4, 3]));                  // 2
console.log(missing([2, 3, 4]));                  // 1
console.log(missing([5, 1, 4, 2]));               // 3
console.log(missing([1, 2, 3, 4]));               // undefined