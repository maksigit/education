// Реализуйте функцию isPrime(), которая возвращает true или false, указывая, является ли переданное ей число простым.

function isPrime(num) {
  if (num === 2) {
    return true
  } else if (num !== 1 && num % 2 === 1) {
    return true
  } else {
    return false
  }
}

console.log(isPrime(0));                       // false
console.log(isPrime(1));                       // false
console.log(isPrime(2));                       // true
console.log(isPrime(3));                       // true
console.log(isPrime(5));                       // true
console.log(isPrime(7));                       // true
console.log(isPrime(11));                      // true
console.log(isPrime(13));                      // true
console.log(isPrime(17));                      // true
console.log(isPrime(10000000000000));          // false

// 2, 3, 5, 7, 11, 13,