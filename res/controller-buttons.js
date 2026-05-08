'use strict';

let select;

function changeButtons() {
    for(let e of document.querySelectorAll('.controller-button')) {
        if (e.firstElementChild && e.firstElementChild.nodeName == 'IMG') {
            e.firstElementChild.src = `/res/buttons/${select.value}/${e.firstElementChild.alt.toLowerCase()}.svg`;
        } else {
            let text = e.textContent;

            e.textContent = '';

            let svg = document.createElement('img');
            svg.src = `/res/buttons/${select.value}/${text.toLowerCase()}.svg`;
            svg.alt = text;

            e.appendChild(svg);
        }
    }
    
    localStorage.setItem('articles.buttons', select.value);
}

function main() {
    console.log('initialized');

    select = document.createElement('select');

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
        select.appendChild(option);
    }

    select.addEventListener('change', changeButtons);

    let selectbox = document.createElement('div');
    selectbox.textContent = 'Change controller glyphs: ';
    selectbox.className = 'button-selector';
    selectbox.appendChild(select);

    select.value = localStorage.getItem('articles.buttons') ? localStorage.getItem('articles.buttons') : 'universal';

    document.body.appendChild(selectbox);
}

document.addEventListener('DOMContentLoaded', main);
document.addEventListener('DOMContentLoaded', changeButtons);