1. Напиши функцию создания генератора `sequence(start, step)`. Она при вызове возвращает другую функцию-генератор, которая при каждом вызове дает число на 1 больше, и так до бесконечности. Начальное число, с которого начинать отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.

    ```javascript
    var generator = sequence(10, 3);
    var generator2 = sequence(7, 1);

    console.log(generator()); // 10
    console.log(generator()); // 13

    console.log(generator2()); // 7

    console.log(generator()); // 16

    console.log(generator2()); // 8
    ```

2. Также, нужна функция `take(gen, x)` которая вызвает функцию `gen` заданное число (`x`) раз и возвращает массив с результатами вызовов. Она нам пригодится для отладки:

    ```javascript
    var gen2 = sequence(0, 2);
    console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
    ```

3. Напиши функцию `map(fn, array)`, которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример: 
            
    ```javascript
    function square(x) { return x * x; } // возведение в квадрат
    console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
    console.log(map(square, [])); // []
    ```

    Обрати внимание: функция не должна изменять переданный ей массив: 

    ```javascript    
    var arr = [1, 2, 3];
    console.log(map(square, arr)); // [1, 4, 9]
    console.log(arr); // [1, 2, 3]
    ```

    Это аналог `array_map` из PHP.

4. Напиши функцию `fmap(a, gen)`, которая принимает на вход 2 функции, `a` и `gen`, где `gen` — функция-генератор вроде той, что была в первом задании. `fmap` возвращает новую функцию-генератор, которая при каждом вызове берет следующее значение из `gen` и пропускает его через функцию `a`. Пример: 

    ```javascript
    var gen = sequence(1, 1);
    function square(x) { return x * x; }
    var squareGen = fmap(square, gen);

    console.log(squareGen()); // 1
    console.log(squareGen()); // 4
    console.log(squareGen()); // 9
    console.log(squareGen()); // 16
    ```

    А, еще, сделай тогда, чтобы в качестве `gen` можно было указать функцию с аргументами, и при вызове

    ```javascript
    function add(a, b) { 
        return a + b; 
    }

    // Мы получаем новую функцию, которая вызвает add, и результат пропускает через функцию square
    var squareAdd = fmap(square, add);
    console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
    console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
    ```

    Эти аргументы бы передавались функции `gen`. Аргументов может быть любое количество.
    
    Подсказка: если непонятно, как сделать функцию, принимающую произвольное число аргументов, то стоит погуглить про псевдопеременную `arguments` (псевдопеременная значит, что она выглядит как переменная, но формально ей не является). Чтобы понять, как вызвать функцию с заранее неизвестным числом аргументов, можно погуглить `Function.prototype.call` и `Function.prototype.apply`. В JS функции - это объекты, и у них есть полезные методы и свойства. 

5. Частичное применение (partial application)

    вики: http://ru.wikipedia.org/wiki/%D0%A7%D0%B0%D1%81%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%BF%D1%80%D0%B8%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5
    
    Напиши функцию `partial(fn, a1, a2, ....)`, которая позволяет зафиксировать один или несколько аргументов функции. Пример: 
    
    ```javascript
    function add(a, b) { return a + b; }
    function mult(a, b, c, d) { return a * b * c * d; }
    
    var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5
    
    console.log(add5(2)); // 7
    console.log(add5(10)); // 15
    console.log(add5(8)); // 13
    
    var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3
    
    console.log(mult23(4, 5)); // 2*3*4*5 = 120
    console.log(mult23(1, 1)); // 2*3*1*1 = 6
    ```

    Есть функция с аргументами: 

    ```javascript
    f1(a, d, c, d)
    ```

    Мы можем с помощью `partial` сделать из нее функцию с меньшим числом аргументов, заранее задав значения для нескольких из них, например:
    
    ```javascript
    var f2 = partial(f1, 1, 2); // фиксируем a = 1, b = 2
    ```

    И вызов:
    
    ```javascript
    f2(x, y)
    ```

    будет равносилен вызову:
    
    ```javascript
    f1(1, 2, x, y)
    ```
    
    Кстати, имеющийся в новых версиях JS метод `bind()` тоже может делать частичное применение: http://frontender.info/partial-application-in-javascript-using-bind/ Но ты должен обойтись без его использования, и написать свой велосипед.

6. Наша функция `partial` позволяет фиксировать только первые аргументы. Усовершенствуй ее, чтобы зафиксировать можно было любые аргументы, пропущенные аргументы обозначаются с помощью undefined. Обрати внимание, что теперь мы переименовали ее в `partialAny`, чтобы не путать с предыдущей:

    ```javascript
    function test(a, b, c) { return 'a=' + a + ',b=' + b + ',c=' + c; }
    var test1_3 = partialAny(test, 1, undefined, 3);
    console.log(test1_3(5)); // a=1,b=5,c=3
    ```
    
7. напиши функцию `bind`, которая позволяет привязать контекст (значение `this`) к функции:

    ```javascript
    window.x = 1;
    var ctx = { x: 2 };

    function testThis(a) { console.log("x=" + this.x + ", a=" + a); }
    console.log(testThis(100)); // x=1, a=100
    var boundFunction = bind(testThis, ctx);
    console.log(boundFunction(100)); // x=2, a= 100
    ```

    В новых браузерах и функций есть метод `bind()`, делающий аналогичную вещь: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    
    В библиотеках тоже есть такой метод: http://lodash.com/docs#bind

8. напиши функцию `pluck`, которая берет массив объектов и возвращает массив значений определенного поля:
    
    ```javascript
    var characters = [
      { 'name': 'barney', 'age': 36 },
      { 'name': 'fred', 'age': 40 }
    ];

    console.log(pluck(characters, 'name')); // ['barney', 'fred']
    ```

    ~~Такая функция была в lodash: http://lodash.com/docs#pluck~~ но теперь вместо нее советуют использовать map: https://lodash.com/docs/4.15.0#map
    
    Функция не должна изменять исходный массив.

9. напиши функцию `filter`, которая принимает функцию-предикат и массив. Возвращает она массив значений, для которых предикат вернет true.

    ```javascript
    var input = [1, 2, 3, 4, 5, 6];
    function isEven(x) { return x % 2 == 0; } // проверяет на четность
    console.log(filter(input, isEven)); // [2, 4, 6]
    ```
    
    Функция не должна изменять исходный массив:
    
    ```javascript
    console.log(input); // [1, 2, 3, 4, 5, 6]
    ```
    
    Аналог из lodash: http://lodash.com/docs#filter
    В новых браузерах у массивов есть метод `filter`.

10. Напиши функцию, считающую число свойств в объекте:

    ```javascript
    var a = { a: 1, b: 2 };
    console.log(count(a)); // 2
    var b = function () {};
    console.log(count(b)); // 0
    var c = [1, 2, 3];
    console.log(count(c)); // 3
    var d = [];
    d[100] = 1;
    console.log(count(d)); // 1
    ```

    Кстати, в новых браузерах с поддержкой Javascript ES5 есть метод `Object.keys(x)`, возвращающий массив ключей у объекта.