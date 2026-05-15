'use strict';

let selectElement;

function changeButtons() {
    for(let e of document.querySelectorAll('.controller-button')) {
        if (e.firstElementChild && e.firstElementChild.nodeName == 'IMG') {
            e.firstElementChild.src = `/res/buttons/${selectElement.value}/${e.firstElementChild.alt.toLowerCase()}.svg`;
        } else {
            let text = e.textContent;

            e.textContent = '';

            let svg = document.createElement('img');
            svg.src = `/res/buttons/${selectElement.value}/${text.toLowerCase()}.svg`;
            svg.alt = text;

            e.appendChild(svg);
        }
    }
    
    localStorage.setItem('articles.buttons', selectElement.value);
}

function main() {
    if (selectElement) { return; }

    console.log('initialized');

    selectElement = document.createElement('select');

    for(let e of ['360','xbone','playstation','switch','universal']) {
        let option = document.createElement('option');
        option.value = e;
        switch (e) {
            case '360':
                option.textContent = 'Microsoft Xbox 360';
                break;
            case 'xbone':
                option.textContent = 'Microsoft Xbox One';
                break;
            case 'playstation':
                option.textContent = 'Sony PlayStation';
                break;
            case 'switch':
                option.textContent = 'Nintendo Switch';
                break;
            case 'universal':
                option.textContent = 'Universal (Might be small!)';
                break;
        }
        selectElement.appendChild(option);
    }

    selectElement.addEventListener('change', changeButtons);

    let selectbox = document.createElement('div');
    selectbox.textContent = 'Change controller glyphs: ';
    selectbox.className = 'button-selector';
    selectbox.appendChild(selectElement);

    selectElement.value = localStorage.getItem('articles.buttons') ? localStorage.getItem('articles.buttons') : 'universal';

    document.body.appendChild(selectbox);
    changeButtons();
}

document.addEventListener('DOMContentLoaded', main);

// sometimes DOMContentLoaded doesn't fire
// and i don't know why
// so I wrote a kludgy hack

let attempts = 20;

function failSafe() {
    if (selectElement) { return; }
    if (attempts == 0) {
        console.log('Firing DOMContentLoaded manually.')
        main();
    } else {
        console.log(`DOMContentLoaded hasn\'t fired. Trying again ${attempts} more times...`)
        attempts--;
    }
    setTimeout(failSafe, 1000);
}

setTimeout(failSafe, 1000);