// Реализуйте функцию assignDeep(), которая похожа на Object.assign(), но выполняет глубокое
// объединение объектов. Для того, чтобы не усложнять задачу, можно исходить из допущения,
// что объекты могут содержать только числа и другие объекты (в них не может быть массивов,
// строк, и так далее).


function assignDeep(obj1, obj2) {
  for(prop in obj2) {
    console.log("obj." + prop + " = " + obj2[prop]);
    obj1[prop] = obj2[prop]
  }
  return obj1
}


console.log(assignDeep({ a: 1 }, {}));              // { a: 1 }
console.log(assignDeep({ a: 1 }, { a: 2 }));        // { a: 2 }
console.log(assignDeep({ a: 1 }, { a: { b: 2 } })); // { a: { b: 2 } }
console.log(assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }));
// { a: { b: { c: 1, d: 2 }}, e: 3 }

// ?????????????????????????????????????????????????????????????????