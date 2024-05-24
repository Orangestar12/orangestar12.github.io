'use strict';

// https://stackoverflow.com/questions/22329282/make-url-friendly-from-string
function makeUrlFriendly(value) {
    return value == undefined ? '' : value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
}

const toc = document.getElementById('toc');

let heading = document.createElement('h2');
heading.textContent = 'Table of Contents';
toc.append(heading);

let collapseButton = document.createElement('button');
collapseButton.textContent = 'Expand';
toc.append(collapseButton);

let lastTagNum = 0;

let tree = [];

for (let h of document.querySelectorAll('h1, h2, h3, h4, h5, h6')) {
    if (toc.compareDocumentPosition(h) != 4) { continue; }
    let hnum = parseInt(h.tagName.slice(1));
    console.log(hnum)
    if (hnum > lastTagNum) {
        let lastList = tree[tree.length - 1]
        let currentList = document.createElement('ul');
        tree.push(currentList);
        try {
            lastList.append(currentList);
        } catch(e) {
            if (e.name != 'TypeError') {
                throw e;
            } else {
                toc.append(currentList);
            }
        }
        lastTagNum++;
    } else if (hnum < lastTagNum) {
        tree.pop();
        lastTagNum--;
    }
    let currentList = tree[tree.length - 1];
    let li = document.createElement('li');
    let index = makeUrlFriendly(h.textContent);
    h.id = index;
    let a = document.createElement('a');
    a.href = '#' + index;
    a.textContent = h.textContent;
    li.append(a);
    currentList.append(li);
}

toc.className = 'collapsed';
tree[0].style.display = 'none';

function toggleCollapse() {
    toc.classList.toggle('collapsed');
    if (toc.classList.contains('collapsed')) {
        tree[0].style.display = 'none';
        collapseButton.textContent = 'Expand';
    } else {
        tree[0].style.display = 'block';
        collapseButton.textContent = 'Collapse';
    }
}

collapseButton.addEventListener('click', toggleCollapse);