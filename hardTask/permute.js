// Реализуйте функцию permute(), которая возвращает массив строк,
// содержащий все пермутации заданной строки.

function change(str) {
  let arrStr = [...str];
  let totalArr = '';

  let strLenght = str.length - 1;

  console.log(arrStr);

  let temp = arrStr[strLenght - 1];

  console.log(temp);

  arrStr[strLenght - 1] = arrStr[strLenght];

  arrStr[strLenght] = temp;

  for (let i = 0; i < strLenght + 1; i++) {
    totalArr = totalArr + arrStr[i]
  }

  return totalArr
}

function permute(str) {
  let totalArr = [];
  let totalArrLenght = totalArr.length;

  // let test = change(str);

  for (let i = 0; i < 6; i++) {
    if (str === totalArr[i]) {
      str = change(str);
      totalArr.push(str);
    } else {
      totalArr.push(str);
    }
  }

  // console.log(test);

return totalArr

  // let strLenght = str.length;
  // let sum = strLenght;
  //
  // for (let i = 0; i < strLenght - 1; i++) {
  //   sum = sum * (strLenght - (1 + i))
  // }
  //
  //
  // return sum

}


console.log(permute('abc'));

// permute('')             // []
// permute('abc')          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']