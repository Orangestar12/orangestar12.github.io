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
    quoteElement.textContent = getQuote()[0];
    quoteElement.style.opacity = 1;
    setTimeout(() => {
        quoteElement.style.opacity = 0;
    }, 29000);
}
