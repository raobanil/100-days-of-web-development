let isClicked = false;
let paragraphElement = document.querySelector('p');

function handleClickEvent() {
    if (isClicked === false) {
        let hrElement = document.createElement('hr');
        paragraphElement.append(hrElement);
        isClicked = true;
    }
    let clickedElement = document.createElement('p');
    clickedElement.textContent = 'Clicked!';
    paragraphElement.append(clickedElement);
}

paragraphElement.addEventListener('click', handleClickEvent);

let inputElement = document.querySelector('input');

function retrieveUserInput() {
    let enteredText = inputElement.value;
    console.log(enteredText);
}

inputElement.addEventListener('input', retrieveUserInput);