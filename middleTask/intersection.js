// Реализуйте функцию intersection(), которая принимает два массива и возвращает их пересечение.
// Можете ли вы добиться того, чтобы функция решала эту задачу за время O(M+N), где M и N —
// длины массивов?


function intersection(arr1, arr2) {
  let arr1Lenght = arr1.length;
  let arr2Lenght = arr2.length;
  let total = [];

  let arrLenght = arr1Lenght < arr2Lenght ? arr1Lenght : arr2Lenght;

  for (let i = 0; i < arrLenght; i++) {
    for (let j = 0; j < arr2Lenght; j++) {
      if (arr1[i] === arr2[j]) {
        total.push(arr1[i])
      }
    }
  }

  return total
}



console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));    // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12]));             // []