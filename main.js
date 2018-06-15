// ['a', 'a', 'a', 'b', 'b'] => true  // 3 x 'a' and 2 x 'b'
// ['a', 'b', 'c', 'b', 'c'] => false // 1 x 'a', 2 x 'b' and 2 x 'c'
//     ['a', 'a', 'a', 'a', 'a'] => false // 5 x 'a'

var arrLetters = ['a', 'a', 'a', 'b', 'b', 'c'];
var arrLetters2 = ['a', 'b', 'c', 'b', 'c'];
var arrLetters3 = ['a', 'a', 'a', 'a', 'a'];
var arrLettersLenght = arrLetters.length;
var countLetter = 0;
var objCount = {};
var arrCount = [];
var count = "";
var alphabet = {
    'a': 0,
    'b': 0,
    'c': 0,
    'd': 0,
    'e': 0,
    'f': 0,
    'g': 0,
    'h': 0,
    'i': 0,
    'j': 0,
    'k': 0,
    'l': 0,
    'm': 0,
    'n': 0,
    'o': 0,
    'p': 0,
    'q': 0,
    'r': 0,
    's': 0,
    't': 0,
    'u': 0,
    'v': 0,
    'w': 0,
    'x': 0,
    'y': 0,
    'z': 0
};

function searchKey(stringa) {
    var stringaLenght = stringa.length;
    var exist = false;
    var isTrue = "true ";
    var isFalse = "false ";
    for (var i = 0; i < stringaLenght; i++) {
        if (stringa[i] === "2" || stringa[i] === "3") {
            stringa = isTrue + stringa;
            exist = true;
            break
        }
    }

    if (exist === false) {
        stringa = isFalse + stringa;
    }

    return stringa
}

function zeroing(object) {
    for (var key3 in object) {
        object[key3] = 0;
    }

    return object
}

function threeOrTwo(arrLetters) {
    var arrLettersLenght = arrLetters.length;
    for (var i = 0; i < arrLettersLenght; i++) {
        for (var key in alphabet) {
            if (arrLetters[i] === key) {
                alphabet[key] += 1;
            }
        }
    }
    var count = "";
    for (var key2 in alphabet) {
        if (alphabet[key2] != 0) {
            count += key2 + " x " + alphabet[key2] + ", ";
        }
    }
    zeroing(alphabet);
    console.log(alphabet);


    return searchKey(count);
}

console.log(threeOrTwo(arrLetters));
console.log(threeOrTwo(arrLetters2));
console.log(threeOrTwo(arrLetters3));


console.log("////////////////////////////////////////////////////////////////////////////////////////////////");


function strCount(str, letter) {
    var strLenght = str.length;
    var countLetter = 0;
    for (var i = 0; i < strLenght; i++) {
        if (str[i] === letter) {
            countLetter++;
        }
    }

    return countLetter;
}

console.log(strCount("", "z"));


console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

function maxInObj(obj) {
    var max = 0;
    for (var item in obj) {
        if (obj[item] > max) {
            max = obj[item];
        }
    }
    return max;
}

function charInObj(obj) {
    var max = 0;
    for (var item in obj) {
        if (obj[item] > max) {
            max = item;
        }
    }
    return max;
}

function createObj(str) {
    var strLenght = str.length;
    for (var i = 0; i < strLenght; i++) {
        for (var key in alphabet) {
            if (str[i] === key) {
                alphabet[key] += 1;
            }
        }
    }

    return alphabet
}

function addedChar(s1, s2) {
    var totalS1 = 0;
    var totalS2 = 0;
    createObj(s1);
    totalS1 = maxInObj(alphabet);
    createObj(s2);
    totalS2 = maxInObj(alphabet);

    if (totalS1 > totalS2) {
        return totalS1 + " " + charInObj(alphabet)
    } else {
        return totalS2 + " " + charInObj(alphabet)
    }

}

console.log(addedChar("aaaaaaaaaaaaahello", "bbbggggggggggggggg"));

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

function formatWords(arr) {
    var arrLenght = arr.length;
    var totalArr = "";
    for (var i = 0; i < arrLenght; i++) {
        if (arr[i]) {
            totalArr += arr[i] + " ";
        }
    }

    return totalArr
}

console.log(formatWords(['ninja', '', 'ronin']));

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

function reg(string, regExpr) {

    return regExpr.test(string)

}

var regExpr = /[0-9]|[A-Z]/;

const string = "qwerty567";

console.log(reg(string, regExpr));


console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

function wordValue(a) {
    var aLenght = a.length;
    var totalArr = [];
    var total = 0;

    for (var i = 0; i < aLenght; i++) {
        if (a[i]) {
            var totalElemLenght = a[i].length;
            var oneElem = 0;
            for (var j = 0; j < totalElemLenght; j++) {
                if (a[i][j] === " ") {
                    continue
                } else {
                    total += j + 1;
                }
            }
        }

        oneElem = total;
        totalArr.push(oneElem);
        totalElemLenght = 0;
        total = 0;
    }

    return totalArr;
}

console.log(wordValue(["asd", "asd asd", "qwe"]));

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");


function spam(number) {
    var span = "";
    for (var i = 0; i < number; i++) {
        span += "hue";
    }
    return span;
}

console.log(spam(3));

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");


var regEx = /[A-Z]/g;

var str = "VasyaPetya";

console.log(str.replace(/([A-Z])/g, ' $1').trim());

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");


var list = [];

for (var i = 2; i < 121; i++) {
    list.push(i);
}

function sieve(list) {
    var listLenght = list.length;
    var listFilter;
    var newArr = [];
    for (var j = 0; j < listLenght; j++) {
        for (var k = 1; k < listLenght; k++) {
            if (list[k + j] % list[j] === 0) {
                delete (list[k + j]);
            }
        }
    }

    listFilter = list.filter(function (value) {
        return value !== null
    });

    return listFilter
}

console.log(sieve(list));

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

function delay(ms) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // alert("ggg");
            resolve();
        }, ms)
    })

}

// delay(2000)
//     .then(() => alert("Hello!"));

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// function httpGet(url) {
//
//     return new Promise(function(resolve, reject) {
//
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url, true);
//
//         xhr.onload = function() {
//             if (this.status == 200) {
//                 resolve(this.response);
//             } else {
//                 let error = new Error(this.statusText);
//                 error.code = this.status;
//                 reject(error);
//             }
//         };
//
//         xhr.onerror = function() {
//             reject(new Error("Network Error"));
//         };
//
//         xhr.send();
//     });
//
// }
//
// let urls = [
//     'user.json',
//     'guest.json'
// ];
//
// // начало цепочки
// let chain = Promise.resolve();
//
// let results = [];
//
// // в цикле добавляем задачи в цепочку
// urls.forEach(function(url) {
//     chain = chain
//         .then(() => httpGet(url))
//         .then((result) => {
//             results.push(result);
//         });
// });
//
// // в конце — выводим результаты
// chain.then(() => {
//     alert(results);
// });

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// Улучшите готовый код кофеварки, который дан ниже: добавьте в кофеварку публичный метод stop(),
// который будет останавливать кипячение (через clearTimeout).

// function CoffeeMachine(power) {
//     this.waterAmount = 10;
//
//     var WATER_HEAT_CAPACITY = 4200;
//
//     var self = this;
//
//     var timerId = 1000;
//
//     function getBoilTime() {
//         return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//     }
//
//     function onReady() {
//         alert( 'Кофе готово!' );
//     }
//
//     function clearTimeout() {
//         alert( 'Кипячение оставновлено' );
//     }
//
//     this.stop = function () {
//         setTimeout(clearTimeout, timerId);
//     };
//
//     this.run = function() {
//         setTimeout(onReady, getBoilTime());
//     };
//
// }
//
// var cM = new CoffeeMachine(1000);
//
// cM.run();
// cM.stop();

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");


function Machine(power) {
    this._power = power;
    this._enabled = false;

    var self = this;

    this.enable = function () {
        self._enabled = true;
    };

    this.disable = function () {
        self._enabled = false;
    };
}


// function Fridge(power) {
//     // унаследовать
//     Machine.apply(this, arguments);
//
//     var food = []; // приватное свойство food
//
//     this.addFood = function() {
//         // if (!this._enabled) {
//         //     throw new Error("Холодильник выключен");
//         // }
//         // if (food.length + arguments.length > this._power / 100) {
//         //     throw new Error("Нельзя добавить, не хватает мощности");
//         // }
//         for (var i = 0; i < arguments.length; i++) {
//             food.push(arguments[i]); // добавить всё из arguments
//         }
//     };
//
//     this.getFood = function() {
//         // копируем еду в новый массив, чтобы манипуляции с ним не меняли food
//         return food.slice();
//     };
//
// }

// var fridge = new Fridge(500);
//
// fridge.addFood("pivo", "pivooo");
// alert(fridge.getFood());


console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

//
// var a = 1;
//
//
//
// if (a == 1 && a == 2 && a == 3) {
//     console.log("ggg")
// }

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// 1. Напиши функцию создания генератора sequence(start, step).
// Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает
// число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет,
// и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному.
// Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
//
// var generator = sequence(10, 3);
// var generator2 = sequence(7, 1);
//
// console.log(generator()); // 10
// console.log(generator()); // 13
//
// console.log(generator2()); // 7
//
// console.log(generator()); // 16
//
// console.log(generator2()); // 8

function sequence(start = 0, step = 1) {
    start -= step;

    return function () {
        return start += step;

    }
}

// console.log(sequence());
let tst = sequence(1, 2);
console.log(tst());
console.log(tst());
console.log(tst());
console.log(tst);


let generator = sequence(10, 3);

console.log(generator()); // 10
console.log(generator()); // 13

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// 2. Также, нужна функция take(gen, x) которая вызвает функцию gen заданное число (x)
// раз и возвращает массив с результатами вызовов. Она нам пригодится для отладки:
//
// var gen2 = sequence(0, 2);
// console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

function take(gen, x) {
    let totalArr = [];

    for (let i = 0; i < x; i++) {
        totalArr.push(gen());
    }

    return totalArr
}

let gen2 = sequence(0, 2);
console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// 3. Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
// и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
//
// function square(x) { return x * x; } // возведение в квадрат
// console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(map(square, [])); // []
// Обрати внимание: функция не должна изменять переданный ей массив:
//
// var arr = [1, 2, 3];
// console.log(map(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]
// Это аналог array_map из PHP.


function square(x) {
    return x * x;
}

function map(fn, array) {
    let arrayLenght = array.length;
    let totalArr = [];

    for (let i = 0; i < arrayLenght; i++) {
        totalArr.push(fn(array[i]));
    }
    return totalArr;
}

console.log(map(square, [1, 2, 3, 4]));

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen,
// где gen — функция-генератор вроде той, что была в первом задании. fmap возвращает
// новую функцию-генератор, которая при каждом вызове берет следующее значение из gen и
// пропускает его через функцию a. Пример:
//
// var gen = sequence(1, 1);
// function square(x) { return x * x; }
// var squareGen = fmap(square, gen);
//
// console.log(squareGen()); // 1
// console.log(squareGen()); // 4
// console.log(squareGen()); // 9
// console.log(squareGen()); // 16
// А, еще, сделай тогда, чтобы в качестве gen можно было указать функцию с аргументами, и при вызове
//
// function add(a, b) {
//     return a + b;
// }
//
// // Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
// var squareAdd = fmap(square, add);
// console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
// console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
// Эти аргументы бы передавались функции gen. Аргументов может быть любое количество.
//
// Подсказка: если непонятно, как сделать функцию, принимающую произвольное число аргументов,
// то стоит погуглить про псевдопеременную arguments (псевдопеременная значит, что она выглядит
// как переменная, но формально ей не является). Чтобы понять, как вызвать функцию с заранее
// неизвестным числом аргументов, можно погуглить Function.prototype.call и Function.prototype.apply.
// В JS функции - это объекты, и у них есть полезные методы и свойства.

// let gen = sequence(1, 1);
// function square2(x) { return x * x; }
//
// function fmap(a, gen) {
//
//     return function () {
//         return a(gen())
//     }
// }

let gen = sequence(1, 1);

function square2(x) {
    return x * x;
}

function add(a, b) {
    return a + b;
}

function fmap(squereFn, addFn) {

    return function (...arg) {
        let sum = 0;
        for (let i = 0; i < arg.length; i = i + 2) {
            sum += addFn(arg[i], arg[i + 1])
        }
        return squereFn(sum)
    }
}

const squareAdd = fmap(square2, add);
console.log(squareAdd);
console.log('fffffffffffffffffffffff');
console.log(squareAdd(1, 2, 3, 4));
console.log(squareAdd(1, 2));


// let add =  ;

// let squareGen = fmap(square2, gen);
//
// console.log(squareGen()); // 1
// console.log(squareGen()); // 4
// console.log(squareGen()); // 9
// console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// 5.

function add(a, b) {
    return a + b;
}

function mult(a, b, c, d) {
    return a * b * c * d;
}

function partial(fn, ...partialArgs) {
    return function (...args) {
        return fn.apply(this, partialArgs.concat(args));
    }
}

let add5 = partial(add, 5);

console.log(" clean " + add5); // 7
console.log(add5(2)); // 7

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// 6. Наша функция partial позволяет фиксировать только первые аргументы. Усовершенствуй ее, чтобы
// зафиксировать можно было любые аргументы, пропущенные аргументы обозначаются с помощью undefined.
// Обрати внимание, что теперь мы переименовали ее в partialAny, чтобы не путать с предыдущей:
//
// function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
// var test1_3 = partialAny(test, 1, undefined, 3);
// console.log(test1_3(5)); // a=1,b=5,c=3

function test(a, b, c) {
    return 'a=' + a + ',b=' + b + ',c=' + c;
}

function partialAny(fn, ...partialArgs) {
    return function (...args) {
        for (let i = 0; i < partialArgs.length; i++) {
            if (partialArgs[i] === undefined) {
                partialArgs[i] = args;
            }
        }
        return fn.apply(this, partialArgs.concat(args));
    }
}

let test1_3 = partialAny(test, 1, undefined, 3);
console.log(test1_3(5)); // a=1,b=5,c=3

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// 7. напиши функцию bind, которая позволяет привязать контекст (значение this) к функции:
//
// window.x = 1;
// let ctx = { x: 2 };
//
// function testThis(a) { console.log("x=" + this.x + ", a=" + a); }
// console.log(testThis(100)); // x=1, a=100
// var boundFunction = bind(testThis, ctx);
// console.log(boundFunction(100)); // x=2, a= 100

window.x = 1;
let ctx = {x: 2};

function testThis(a) {
    console.log("x=" + this.x + ", a=" + a);
}

console.log(testThis(100)); // x=1, a=100


function bind(fn, obj) {
    x = obj.x;

    return function (arg) {
        return fn(arg)
    }
}

let boundFunction = bind(testThis, ctx);
console.log(boundFunction(100)); // x=2, a= 100

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// 8. напиши функцию pluck, которая берет массив объектов и возвращает массив значений
// определенного поля:
//
//     var characters = [
//         { 'name': 'barney', 'age': 36 },
//         { 'name': 'fred', 'age': 40 }
//     ];
//
// console.log(pluck(characters, 'name')); // ['barney', 'fred']


let characters = [
    {'name': 'barney', 'age': 36},
    {'name': 'fred', 'age': 40}
];

function pluck(obj, field) {
    let someArr = [];

    for (let num of obj) {
        someArr.push(num[field])
    }

    return someArr
}

console.log(pluck(characters, 'name'));

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// 9. напиши функцию filter, которая принимает функцию-предикат и массив. Возвращает она массив
// значений, для которых предикат вернет true.

// var input = [1, 2, 3, 4, 5, 6];
// function isEven(x) { return x % 2 == 0; } // проверяет на четность
// console.log(filter(input, isEven)); // [2, 4, 6]
// Функция не должна изменять исходный массив:
//
// console.log(input); // [1, 2, 3, 4, 5, 6]

let input = [1, 2, 3, 4, 5, 6];

function isEven(x) {
    return x % 2 == 0;
} // проверяет на четность

function filter(arr, Fn) {

    let totalArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Fn(arr[i]) == true) {
            totalArr.push(arr[i])
        }
    }

    return totalArr
}

console.log(filter(input, isEven)); // [2, 4, 6]
console.log(input); // [1, 2, 3, 4, 5, 6]

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// 10. Напиши функцию, считающую число свойств в объекте:

let a = {a: 1, b: 2};
// console.log(count(a)); // 2
// var b = function () {};
// console.log(count(b)); // 0
// var c = [1, 2, 3];
// console.log(count(c)); // 3
// var d = [];
// d[100] = 1;
// console.log(count(d)); // 1
// Кстати, в новых браузерах с поддержкой Javascript ES5 есть метод Object.keys(x),
// возвращающий массив ключей у объекта.

function count2(obj) {

    let i = 0;

    for (key in obj) {
        i++
    }
    return i
}

console.log(count2(a)); // 2

console.log("////////////////////////////////////////////////////////////////////////////////////////////////");

// let ac = {
//
//     count: 1,
//
//     valueOf() {
//         return this.count++
//     }
//
// };

ac = {
    counter: 0,
    valueOf: function () {
        return ++this.counter;
    },
};


let testObg = ac == 1 && ac == 2 && ac == 3;

console.log(testObg);
console.log(testObg);
console.log(testObg);
console.log(ac);

console.log("///////////////////////////////////////// GAMBURGER ///////////////////////////////////////////////////////");

// const SIZE_SMALL = 'size_small';

// const STUFFINGS = [
//     {name: 'CHEESE', cost: 10, calories: 20},
//     {name: 'SALAD', cost: 20, calories: 5},
//     {name: 'POTATO', cost: 15, calories: 10},
//
// ];
const TOPPINGS = [
    {name: 'MAYO', cost: 20, calories: 5},
    {name: 'SPICE', cost: 15, calories: 0},
];

class Hamburger {
    constructor(size, stuffing) {
        console.log(arguments);
        if (!humburgerConst[size]) {
            this.HamburgerException()
        }
        if (!humburgerConst[stuffing]) {
            this.HamburgerException()
        }

        size = humburgerConst[size];
        stuffing = humburgerConst[stuffing];

        this.calories = size.calories;
        this.coast = size.coast;
        this.stuffingS = stuffing.calories;
        this.stuffingC = stuffing.coast;
        this.cache = [];
    }

    existTopping(topping) {
        let test = false;
        this.cache.forEach(function (item, i, arr) {
            // console.log(item)
            if (item.name === topping) {
                test = true;
            }
        });
        return !test;
    }

    addTopping(topping) {
        try {
            const toppingInMenu = TOPPINGS.find(function (value) {
                return value.name === topping;
            });
            if (toppingInMenu && this.existTopping(topping)) {
                this.cache.push(toppingInMenu);
            }
            else {
                throw Error('Not exits')
            }
        } catch (error) {
            console.error(error)
        }
    }

    removeTopping(remTopping) {
        for (let i = 0; i < TOPPINGS.length; i++) {
            for (key in TOPPINGS[i]) {
                if (TOPPINGS[i][key] === remTopping) {
                    for (key in TOPPINGS[i]) {
                        TOPPINGS[i][key] = 0
                    }
                }
            }
        }
    }

    getSize() {
        return this.calories
    }

    calculateCalories() {
        let totalCalories = 0;

        this.cache.forEach(function (item, i, arr) {
            totalCalories += item.calories;
        });

        return totalCalories + this.calories + this.stuffingS
    }

    calculatePrice() {
        let totalCalories = 0;

        this.cache.forEach(function (item, i, arr) {
            totalCalories += item.cost;
        });

        return totalCalories + this.coast + this.stuffingC
    }

    HamburgerException() {
        throw new Error('error input text');
    }

}

Hamburger.SIZE_SMALL = 'size_small';
Hamburger.SIZE_LARGE = 'size_large';

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_POTATO = 'STUFFING_POTATO';

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_MAYO = 'TOPPING_MAYO';

const humburgerConst = {
    [Hamburger.SIZE_SMALL]: {calories: 20, coast: 50},
    [Hamburger.SIZE_LARGE]: {calories: 40, coast: 100},

    [Hamburger.STUFFING_CHEESE]: {calories: 20, coast: 10},
    [Hamburger.STUFFING_SALAD]: {calories: 5, coast: 20},
    [Hamburger.STUFFING_POTATO]: {calories: 10, coast: 15},

    [Hamburger.TOPPING_SPICE]: {calories: 15, coast: 0},
    [Hamburger.TOPPING_MAYO]: {calories: 20, coast: 5}
};

let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping('MAYO');
hamburger.addTopping('SPICE');
// hamburger.addTopping('SPICE');
console.log(hamburger.cache);
// hamburger.removeTopping('MAYO');
console.log("Is hamburger large: %s", hamburger.getSize() === humburgerConst.size_small.calories);

console.log("this is total obj", hamburger);
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
console.log("Size: " + hamburger.getSize());


console.log("///////////////////////////////////////// TODO LIST ///////////////////////////////////////////////////////");



