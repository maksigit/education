// Реализуйте функцию isBalanced2(). Она похожа на функцию isBalanced() из предыдущей
// группы заданий, но поддерживает три типа скобок: фигурные {}, квадратные [], и круглые ().
// При передаче функции строки, в которой имеются неправильные скобочные последовательности,
// функция должна возвращать false.

function trueOrFalse(brecket, lenght) {
  let sl = 0;
  let sr = 0;
  let sl2 = 0;
  let sr2 = 0;
  let sl3 = 0;
  let sr3 = 0;

  for (let i = 0; i < lenght; i++) {
    if (brecket[i] === '{') {
      sl++
    } else if (brecket[i] === '}') {
      sr++
    } else if (brecket[i] === '(') {
      sl2++
    } else if (brecket[i] === ')') {
      sr2++
    } else if (brecket[i] === '[') {
      sl3++
    } else if (brecket[i] === ']') {
      sr3++
    }
  }

  if (sl === sr && sl2 === sr2 && sl3 === sr3) {
    return true
  } else {
    return false
  }
}


function isBalanced2(str) {
  let brecket = str.replace(/[^\()]/g, '');
  let brace = str.replace(/[^\{}]/g, '');
  let squareBracket = str.replace(/[^\[\]]/g, '');

  let brecketLenght = brecket.length;
  let braceLenght = brace.length;
  let squareBracketLenght = squareBracket.length;
  let BS = brecket + brace + squareBracket;
  let BL = brecketLenght + braceLenght + squareBracketLenght;
  
  return trueOrFalse(BS, BL)

}


console.log(isBalanced2('(foo { bar (baz) [boo] })')); // true
console.log(isBalanced2('foo { bar { baz }'));         // false
console.log(isBalanced2('foo { (bar [baz] } )'));      // false ???????????????????????????????
