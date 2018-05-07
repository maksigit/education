console.log("///////////////////////////////////////// TODO LIST ///////////////////////////////////////////////////////");

let button = document.querySelector('.send-task');
let listOutput = document.querySelector('.list-output');


button.addEventListener('click', function (e) {
    e.preventDefault();
    let getInput = document.getElementsByClassName('input-task')[0];
    let getInputValue = getInput.value;

    let text = document.createTextNode(getInputValue);


    let newLi = document.createElement('li');
    newLi.className = "item";
    newLi.addEventListener('click', function (event) {
        // console.log(event);
        if (this.className === "line-through") {
            this.className = ""
        } else {
            this.className = "line-through";
        }
    });

    let close = document.createElement('span');
    close.className = "close";
    close.addEventListener('click', function (event) {
        this.parentNode.remove();
    });


    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'checkbox');
    newLi.appendChild(newInput);
    newLi.insertBefore(close, newInput);
    newLi.insertBefore(text, newLi.nextSibling);

    console.log(newLi);
    listOutput.appendChild(newLi);

});

