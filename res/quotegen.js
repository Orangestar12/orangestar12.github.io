'use strict';

// console.log('here we go');

let quoteElement = document.querySelector('.quote');
// console.log(quoteElement);

// This array is getting really big so here's a way to save on memory
let element = document.createElement('script');
element.async = true;

element.addEventListener('load', function() {
    // console.log('quotes loaded');
    newQuote();
    setInterval(() => {
        newQuote();
    }, 30000);
});
element.addEventListener('error', function() {
    window.quotes = [['There was an error while loading quotes.']];
});

let filename = Math.floor(Math.random() * 4);
element.src = './res/quotes/' + filename.toString() + '.js';
document.body.appendChild(element);
// console.log('loading', element.src);

function getQuote() {
    let quote = quotes[Math.floor(Math.random()*(quotes.length))];
    if (!quote[1]) {
        quote[1] = '';
    }
    // console.log(quote);
    return quote;
}

function newQuote() {
    // console.log('getting a quote');
    let result = getQuote();
    quoteElement.textContent = result[0];
    quoteElement.setAttribute('title', result[1]);
    quoteElement.style.opacity = 1;
    setTimeout(() => {
        quoteElement.style.opacity = 0;
    }, 29000);
}

function showReference(e) {
    if (quoteElement.getAttribute('title') == '') {
        return;
    }
    let popup = document.createElement('div');
    popup.textContent = quoteElement.getAttribute('title');
    popup.className = "popup";
    document.body.appendChild(popup);
}

function killPopup() {
    while (document.querySelector('.popup')) {
        let el = document.querySelector('.popup');
        el.parentElement.removeChild(el);
    }
}

quoteElement.addEventListener("mouseover", showReference, false);
quoteElement.addEventListener('mouseleave', killPopup, false);