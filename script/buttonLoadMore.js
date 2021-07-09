let button = document.querySelector('.blocks-loadButton');
let blockElem = document.querySelector('.blocks-flexRow3')

button.addEventListener('click', createClass);

function createClass() {
    blockElem.classList.toggle('action');
}

