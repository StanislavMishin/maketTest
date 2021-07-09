
let dotSlider1 = document.querySelector('.dotSlider1');
let dotSlider2 = document.querySelector('.dotSlider2');
let dotSlider3 = document.querySelector('.dotSlider3');

let elem1 = document.querySelector('.blockQuoteFlexRow__quote_status1');
let elem2 = document.querySelector('.blockQuoteFlexRow__quote_status2');
let elem3 = document.querySelector('.blockQuoteFlexRow__quote_status3');

let elemAuthor1 = document.querySelector('.blockQuoteFlexRow__author1');
let elemAuthor2 = document.querySelector('.blockQuoteFlexRow__author2');
let elemAuthor3 = document.querySelector('.blockQuoteFlexRow__author3');

dotSlider1.addEventListener('mouseover', function() {
    if (elem1.hidden && elemAuthor1.hidden === true) {
        elem1.hidden = false;
        elemAuthor1.hidden = false;

        elem2.hidden = true;
        elemAuthor2.hidden = true;
        elem3.hidden = true;
        elemAuthor3.hidden = true;
    };
});
dotSlider2.addEventListener('mouseover', function() {
    if (elem2.hidden && elemAuthor2.hidden === true) {
        elem2.hidden = false;
        elemAuthor2.hidden = false;

        elem1.hidden = true;
        elemAuthor1.hidden = true;
        elem3.hidden = true;
        elemAuthor3.hidden = true;
    };
});
dotSlider3.addEventListener('mouseover', function() {
    if (elem3.hidden && elemAuthor3.hidden === true) {
        elem3.hidden = false;
        elemAuthor3.hidden = false;

        elem1.hidden = true;
        elemAuthor1.hidden  = true;
        elem2.hidden = true;
        elemAuthor2.hidden = true;
    };
});
