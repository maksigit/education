// Реализуйте функцию isPalindrome(), которая возвращает true или false в зависимости от того, 
// является ли переданная ей строка палиндромом (функция нечувствительна к регистру и к наличию 
// в строке пробелов).

// import Revers from './revers' ????????????????????????????????????????

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

function  toSame(str) {
  str = str.toLowerCase();
  str = str.replace(/\s+/g, '');
  return str
}

function isPalindrome(str) {
  let toLC = toSame(str);
  let strTest = reverse(toLC);

  if(strTest === toLC) {
    return true
  } else {
    return false
  }

}

console.log(isPalindrome(''));                                // true
console.log(isPalindrome('abcdcba'));                         // true
console.log(isPalindrome('abcd'));                            // false
console.log(isPalindrome('A man a plan a canal Panama'));     // true