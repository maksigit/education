console.log("///////////////////////////////////////// TODO LIST ///////////////////////////////////////////////////////");

// let button = document.getElementsByClassName('send-task');

// console.log(button);

sendTask.addEventListener('click', function (e) {
    e.preventDefault();
    let getInput = document.getElementsByClassName('input-task')[0];
    let getInputValue = getInput.value;
    console.log(getInputValue);

    let newLi = document.createElement('li');
    newLi.innerHTML = getInputValue;
    tasks.appendChild(newLi);
});

