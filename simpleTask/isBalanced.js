// Реализуйте функцию isBalanced() которая принимает строку и возвращает true или false,
// указывая на то, сбалансированы ли фигурные скобки, находящиеся в строке.

function isBalanced(str) {
  str = str.replace(/[^\{}]/g, '');
  let strLenght = str.length;

  let sl = 0;
  let sr = 0;

  for (let i = 0; i < strLenght; i++) {
    if (str[i] === '{') {
      sl++
    } else if (str[i] === '}') {
      sr++
    }
  }

  if (sl === sr) {
    return true
  } else {
    return false
  }
}

console.log(isBalanced('{{}'));                     // false
console.log(isBalanced('{}{}'));                    // true
console.log(isBalanced('foo { bar { baz } boo }')); // true
console.log(isBalanced('foo { bar { baz }'));       // false
console.log(isBalanced('foo { bar } }'));           // false