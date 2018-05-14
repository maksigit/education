console.log("///////////////////////////////////////// TODO LIST ///////////////////////////////////////////////////////");

function setToLoc(o) {
    localStorage.setItem('item', JSON.stringify(o));
}

let idM = 0;

function getId(arr) {
    let maxArr = [];
    if (!arr.length) {
        maxArr.push(0)
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            maxArr.push(arr[i].id)
        }
    }
    idM = Math.max.apply(null, maxArr);
    return idM + 1
}

let button = document.querySelector('.send-task');
let listOutput = document.querySelector('.list-output');
let item = JSON.parse(localStorage.getItem('item')) || [];
let itemLenght = item.length;

function eventRemoveOnButton (e) {
    e.preventDefault();
    let allThrough = document.querySelectorAll('.line-through');
    let allThoughtLenght = allThrough.length;
    let attr = [];
    for (let i = 0; i < allThoughtLenght; i++) {
        attr.push(allThrough[i].attributes[0].nodeValue);
    }

    let arrSort = item.filter(function (num) {
        for (let i = 0; i < attr.length; i++) {
            if (num.id == attr[i]) {
                return false
            }
        }
        return true;
    });

    item = arrSort;
    for (let i = 0; i < allThoughtLenght; i++) {
        allThrough[i].remove()
    }
    setToLoc(item);
}

function buttonOn() {
    let removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    removeButton.innerHTML = 'Удалить выбранные';
    removeButton.addEventListener('click', eventRemoveOnButton);
    listOutput.appendChild(removeButton);
}

button.addEventListener('click', function (e) {
    e.preventDefault();
    let getInput = document.getElementsByClassName('input-task')[0];
    let getInputValue;
    if (getInput.value) {
        getInputValue = getInput.value;
        let itemObj = {id: getId(item), title: getInputValue,  completed: false};
        item.push(itemObj);
        itemLenght = item.length;
        getInput.value = "";
        setToLoc(item);
        createLi(itemObj);
    } else {
        alert('INPUT TASK')
    }
});

function creatLIFromArray(value) { // value === [] or value === {}
    for (let i = 0; i < value.length; i++) {
        createLi(value[i])
    }
}
function handleLiOnClick(event)  {
    let getId = this.getAttribute('data');
    for (let i = 0; i < item.length; i++) {
        if (item[i].id == getId) {

            if (item[i].completed) {
                item[i].completed = false
            } else {
                item[i].completed = true
            }
        }
    }
    setToLoc(item);
    item = JSON.parse(localStorage.getItem('item'));
    let test = item.find(function (element) {
        return element.completed
    });
    if (test) {
        buttonOn()
    } else {
        document.querySelector('.remove-button').remove()
    }
    if (this.className === 'line-through') {
        this.className = 'item';
    } else {
        this.className = 'line-through';
    }
}

function createLi(val) {
    let newLi = document.createElement('li');
    newLi.setAttribute('data', val.id);
    let newInput = document.createElement('input');
    let close = document.createElement('span');
    close.className = 'close';
    newInput.setAttribute('type', 'checkbox');
    newInput.className = 'check';
    newInput.checked = val.completed;
    newLi.addEventListener('click', handleLiOnClick);
    newInput.checked ? newLi.className = 'line-through' : newLi.className = 'item';
    newLi.innerHTML = val.title;
    newLi.appendChild(newInput);
    newLi.appendChild(close);
    listOutput.appendChild(newLi);
}

listOutput.addEventListener('click', function (e) {
    if (e.target.className === 'close') {
        let takeID = e.target.parentElement.getAttribute('data');
        let newArr = [];
        for (let i = 0; i < itemLenght; i++) {
            if (item[i].id == takeID) {
                console.log('ggg');
            } else {
                newArr.push(item[i]);
            }
        }
        item = newArr;
        itemLenght = newArr.length;
        setToLoc(newArr);
        e.target.parentElement.remove();
    } else {
        console.log('ggg')
    }
});

creatLIFromArray(item);

console.log("///////////////////////////////////////// TODO LIST JSON ///////////////////////////////////////////////////////");

let addTasks = document.querySelector('.add-tasks');

addTasks.addEventListener('click' , function (e) {
    e.preventDefault();

    let myObj;
    // function reqListener () {
    //     console.log(this.responseText);
    //
    // }

// 1. Создаём новый объект XMLHttpRequest
    let xhr = new XMLHttpRequest();
    // xhr.onload = reqListener;

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos?userId=1', false);

// 3. Отсылаем запрос
    xhr.send();

    myObj = JSON.parse(xhr.responseText);
    let myObjLength = myObj.length;
    console.log(myObj);

    for (let i = 0; i < myObjLength; i++ ) {
        createLi(myObj[i])
    }
    
});






