// Создайте самостоятельную реализацию функции debounce().


// function debounce(fn, time) {
//
//   return function (arg) {
//
//     setTimeout(fn, time)
//   }
// }
//
//
// let a = () => console.log('foo');
// let b = debounce(a, 2000);
// b();
// b();
// b(); // только этот вызов должен вызывать a()

// [1, [1, 2, [3, 4]], [2, 4]] -> [1, 1, 2, 3, 4, 2, 4]


let bbb = [1, [1, 2, [3, 4]], [2, 4]];

function getArr(arr) {
  let toStr = arr.join();
  let toArr = toStr.split(',');
  return toArr
}

console.log(getArr(bbb));