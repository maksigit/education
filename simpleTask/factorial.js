// Реализуйте функцию factorial(), которая возвращает факториал переданного ей числа.

function factorial (num) {

  let sum = 1;

  for(let i = 1; i <= num; i++) {
    sum = sum * i
  }

  return sum
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));
console.log(factorial(10));