let img1 = document.getElementById('imgBrand1');
let img2 = document.getElementById('imgBrand2');
let img3 = document.getElementById('imgBrand3');
let img4 = document.getElementById('imgBrand4');
let img5 = document.getElementById('imgBrand5');

function goSlider() {
    window.timerId = window.setInterval(timer, 1500);
}
function timer() {
    let box = img1.src;
    img1.src = img2.src;
    img2.src = img3.src;
    img3.src = img4.src;
    img4.src = img5.src;
    img5.src = box;
}

window.addEventListener('load', goSlider);
