// Реализуйте функцию fib2(). Она похожа на функцию fib() из предыдущей группы заданий,
// но поддерживает числа вплоть до 50. Подсказка: используйте мемоизацию.

function fib2(quantity) {
  let fibArr = [0, 1];
  for (let i = 0; i < quantity - 1; i++) {
    fibArr[i + 2] = fibArr[i] + fibArr[i + 1];
  }
  return fibArr[quantity];
}

console.log(fib2(0));                               // 0
console.log(fib2(1));                               // 1
console.log(fib2(10));                              // 55
console.log(fib2(50));                              // 12586269025