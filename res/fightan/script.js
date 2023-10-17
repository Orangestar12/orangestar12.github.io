'use strict';

function makeModal(data, i) {
    let element = document.createElement('div');
    element.className = 'modal';
    
    let button = document.createElement('button');
    button.textContent = '\u00d7';
    button.className = 'close';
    button.addEventListener('click', () => { element.remove(); });
    element.append(button);

    let header = document.createElement('h1');
    header.textContent = data.name;
    element.append(header);

    let flex = document.createElement('div');
    flex.className = 'flex';

    let img = document.createElement('img');
    img.src = i;
    flex.append(img);

    let box = document.createElement('div');
    for (let [key, item] of Object.entries(data.stuff)) {
        let p = document.createElement('p');
        let bold = document.createElement('strong');
        bold.textContent = key + ': ';
        let span = document.createElement('span');
        span.textContent = item;
        p.append(bold);
        p.append(span);
        box.append(p);
    }
    flex.append(box);

    element.append(flex);

    return element;
}

for (let element of document.querySelectorAll('.box')) {
    element.addEventListener('click', (e) => {
        // console.log(e.target.getAttribute('data-data'));
        let data = JSON.parse(e.target.getAttribute('data-data'));
        let el = makeModal(data, e.target.style.backgroundImage.slice(5,-2));
        // console.log(el);
        document.body.append(el);
    })
}