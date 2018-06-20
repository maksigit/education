// Создайте реализацию функции sort(), которая сортирует числовой массив за время O(N×log(N)).

function sort(arr) {
  let arrLenght = arr.length;
  for (let i = 0; i < (arrLenght + 1) ; i++) {
    for (let j = 0; j < arrLenght; j++) {
      if (arr[i] > arr[j + 1]) {
        continue
      } else {
        let temp = arr[i];
        arr[i] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  function n(value) {
    return value !== undefined;
  }
  arr = arr.filter(n);
  return arr;
}


console.log(sort([]));                              // []
console.log(sort([-4, 1, Infinity, 3, 3, 0]));      // [-4, 0, 1, 3, 3, Infinity]


// ???????????????????????????????????????????????????????? undefine, debbager

