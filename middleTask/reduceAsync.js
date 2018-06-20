// Реализуйте функцию reduceAsync(), которая похожа на функцию reduce() из группы простых
// заданий, но работает с функциями, возвращающими promise-объекты, каждый из которых должен
// быть разрешён до перехода к следующему.


let a = () => Promise.resolve('a');
let b = () => Promise.resolve('b');
let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100));


// await reduceAsync([a, b, c], (acc, value) => [...acc, value], []);
// // ['a', 'b', 'c']
// await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d']);
// // ['d', 'a', 'c', 'b']


let test = new Promise((resolve, reject) => {
  (function (value) {
    return resolve(value)
  }())

});
console.log(test.resolve('a'));