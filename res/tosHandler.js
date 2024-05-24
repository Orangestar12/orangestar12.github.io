'use strict';

const toc = document.getElementById('toc');
const list = toc.getElementsByTagName('ul')[0];

let collapseButton = document.createElement('button');
collapseButton.textContent = 'Expand';
toc.insertBefore(collapseButton, toc.childNodes[1]);

toc.className = 'collapsed';
list.style.display = 'none';

function toggleCollapse() {
    toc.classList.toggle('collapsed');
    if (toc.classList.contains('collapsed')) {
        list.style.display = 'none';
        collapseButton.textContent = 'Expand';
    } else {
        list.style.display = 'block';
        collapseButton.textContent = 'Collapse';
    }
}

collapseButton.addEventListener('click', toggleCollapse);