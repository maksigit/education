console.log("///////////////////////////////////////// TODO LIST ///////////////////////////////////////////////////////");

function setToLoc(o) {
    localStorage.setItem('item', JSON.stringify(o));
}

let idM = 0;
function getId(arr) {
    let maxArr = [];
    if(!arr.length) {
        maxArr.push(0)
    }
    else {
        for(let i = 0; i < arr.length; i++) {
            maxArr.push(arr[i].id)
        }
    }
    idM = Math.max.apply(null, maxArr);
    return idM + 1
}

let button = document.querySelector('.send-task');
let listOutput = document.querySelector('.list-output');
let testTrue = true;
let item = JSON.parse(localStorage.getItem('item')) || [];
let itemLenght = item.length;
console.log(item);

button.addEventListener('click', function (e) {
    e.preventDefault();
    let getInput = document.getElementsByClassName('input-task')[0];
    let getInputValue;
    if(getInput.value) {
        getInputValue = getInput.value;
        let itemObj = {text: getInputValue, id: getId(item), flag: false};

        item.push(itemObj);
        itemLenght = item.length;

        getInput.value = "";
        setToLoc(item);

        createLi(itemObj);
    } else {
        alert("INPUT TASK")
    }

    // let removeButton = document.createElement('button');
    //     removeButton.className = "remove-button";
    //     removeButton.innerHTML = 'Удалить выбранные';
    //     removeButton.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         let allThrough = document.querySelector('.line-through');
    //         console.log(allThrough);
    //         let allThoughtLenght = allThrough.length;
    //         let toDel = [];
    //         for (let i = 0; i < allThoughtLenght; i++) {
    //
    //             allThrough[0].remove();//????????????????????????????????????????????????????
    //             // toDel.push()
    //         }
    //
    //     });
    // listOutput.appendChild(removeButton);
///////////////////////////////////////////////////////////
//     let text = document.createTextNode(getInputValue);
//
//
//     let button = document.createElement('button');
//         button.className = "remove-button";
//         button.innerHTML = 'Удалить выбранные';
//         button.addEventListener('click', function (e) {
//             e.preventDefault();
//             console.log('ggg');
//             let allThrough = document.getElementsByClassName('line-through');
//             console.log(allThrough.length);
//             for (let i = 0; i <= allThrough.length; i++) {
//                 allThrough[0].remove();//????????????????????????????????????????????????????
//             }
//             console.log(allThrough);
//         });
//     console.log(button);
////////////////////////////////////////////////////////////
//     let newLi = document.createElement('li');
//     newLi.className = "item";
//     newLi.addEventListener('click', function (event) {
//         if (this.className === "line-through") {
//             this.className = ""
//         } else {
//             this.className = "line-through";
//         }
//     });
//
//     let close = document.createElement('span');
//     close.className = "close";
//     close.addEventListener('click', function (event) {
//         this.parentNode.remove();
//     });
//
//
//     let newInput = document.createElement('input');
//     newInput.setAttribute('type', 'checkbox');
//     newLi.appendChild(newInput);
//     newLi.insertBefore(close, newInput);
//     newLi.insertBefore(text, newLi.nextSibling);
//
//
//     console.log(newLi);
//     listOutput.appendChild(newLi);
//
//     if(testTrue) {
//         listOutput.insertBefore(button, newLi.nextSibling);
//         testTrue = false
//     }
//
//     console.log(listOutput.lastChild);
});
function creatLIFromArray(value) { // value === [] or value === {}

    for(let i = 0; i < value.length; i++ ) {
        createLi(value[i])
    }
}

function createLi(val) {

    let newLi = document.createElement('li');
        newLi.setAttribute('data', val.id);
    let newInput = document.createElement('input');

    let close = document.createElement('span');
    close.className = "close";
    close.addEventListener('click', function (event) {
        let takeID = this.parentNode.getAttribute('data');
        console.log(takeID);
        // debugger;
        let newArr = [];
        for(let i = 0; i < itemLenght; i++) {
            console.log(item[i].id);
            if (item[i].id == takeID) {
                console.log('ggg');
            } else {
                newArr.push(item[i]);
            }
        }
        debugger;
        item = newArr;
        itemLenght = newArr.length;
        setToLoc(newArr);
        this.parentNode.remove();
        console.log(newArr);
    });

    newInput.setAttribute('type', 'checkbox');
    newInput.className = 'check';
    newLi.addEventListener('click', function (event) {
        if (this.className === "line-through") {
            this.className = "item"
        } else {
            this.className = "line-through";
        }
    });

    newLi.className = "item";
    newLi.innerHTML = val.text;

    newLi.appendChild(newInput);
    newLi.appendChild(close);

    listOutput.appendChild(newLi);
}

creatLIFromArray(item);



