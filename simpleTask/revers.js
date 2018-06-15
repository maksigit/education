// Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки.
// Не пользуйтесь встроенной функцией reverse().

function reverse (str) {
  let strLenght = str.length;
  let totalArr = '';
  let j = 0;

  for(let i = strLenght - 1; 0 <= i; i--) {
    totalArr = totalArr + str[i];
    j++
  }

  return totalArr
}

console.log(reverse(''));                       // ''
console.log(reverse('abcdef'));                 // 'fedcba'
