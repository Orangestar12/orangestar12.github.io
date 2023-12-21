'use strict';

function maker(input, array) {
    let [text, clist] = array;

    let num = input.length;
    let s = document.createElement('SPAN');
    let t = document.createElement('SPAN');
    s.append(t);
    t.textContent = text;
    t.className = input.toLowerCase().replace(/[^a-z]/g, '');
    // s.textContent = text;
    s.className = clist;

    return [num, s];
}

let dictionary = new Map();
dictionary.set('Jab', ['JAB', 'button']);
dictionary.set('Strong', ['STRONG', 'button']);
dictionary.set('Fierce', ['FIERCE', 'button']);
dictionary.set('Short', ['SHORT', 'button']);
dictionary.set('Forward', ['FORWARD', 'button']);
dictionary.set('Roundhouse', ['ROUND HOUSE', 'button']);
dictionary.set('Bl', ['BLOCK', 'button white']);
dictionary.set('Du', ['D', 'button dust']);
dictionary.set('Ru', ['RUN', 'button dust']);
dictionary.set('LP', ['LP', 'button']);
dictionary.set('MP', ['MP', 'button']);
dictionary.set('HP', ['HP', 'button']);
dictionary.set('LK', ['LK', 'button']);
dictionary.set('MK', ['MK', 'button']);
dictionary.set('HK', ['HK', 'button']);
dictionary.set('HS', ['HS', 'button']);
dictionary.set('st.', ['STANDING', 'unhooked superscript']);
dictionary.set('cr.', ['CROUCHING', 'unhooked superscript']);
dictionary.set('c.', ['CROUCHING', 'unhooked superscript']);
dictionary.set('j.', ['AERIAL', 'unhooked superscript']);
dictionary.set('ws.', ['RISING', 'unhooked superscript']);
dictionary.set('wr.', ['RUNNING', 'unhooked superscript']);
dictionary.set('.1', ['1', 'button']);
dictionary.set('.2', ['2', 'button']);
dictionary.set('.3', ['3', 'button']);
dictionary.set('.4', ['4', 'button']);
dictionary.set('1', ['🡿', 'dir']);
dictionary.set('2', ['🡻', 'dir']);
dictionary.set('3', ['🡾', 'dir']);
dictionary.set('4', ['🡸', 'dir']);
dictionary.set('5', ['⬤', 'dir']);
dictionary.set('6', ['🡺', 'dir']);
dictionary.set('7', ['🡼', 'dir']);
dictionary.set('8', ['🡹', 'dir']);
dictionary.set('9', ['🡽', 'dir']);
dictionary.set('+', ['+', '']);
dictionary.set('/', ['/', '']);

for (let span of document.querySelectorAll('.buttons')) {
    let oldText = span.textContent;
    let newElements = [];
    let hookTo = undefined;

    let doIt = () => {
        // console.log(oldText);
        let s = document.createElement('SPAN');
        let solved = false;

        for (let x of dictionary) {
            if (oldText.startsWith(x[0])) {
                solved = true;
                
                let n = undefined;
                [n,s] = maker(x[0], x[1]);

                oldText = oldText.slice(n);
                break;
            }
        }

        if (!solved) {
            let t = document.createElement('SPAN');
            s.append(t);
            t.textContent = oldText[0];
            if (oldText[0] != ' ') {
                s.classList = 'button'
            }

            oldText = oldText.slice(1);
        }

        if (hookTo) {
            console.log (`hooking ${hookTo.textContent} to ${s.textContent}`)
            s.append(hookTo)
            hookTo = undefined;
        }

        if (s.classList.contains('unhooked')) {
            console.log(`storing ${s.textContent}`);
            if (hookTo) {
                newElements.push(hookTo);
            }
            hookTo = s;
        } else {
            newElements.push(s);
        }

        if (oldText.length > 0) {
            setTimeout(doIt, 1);
        } else {
            span.textContent = '';
            for (let e of newElements) {
                switch(e.firstChild.textContent) {
                    case 'B':
                    case '3':
                    case '4':
                        e.classList.add('yellow');
                        break;
                    case 'C':
                    case 'G':
                    case 'S':
                        e.classList.add('green');
                        break;
                    case 'D':
                    case 'HP':
                    case 'HK':
                    case 'FIERCE':
                    case 'ROUND HOUSE':
                    case 'K':
                        e.classList.add('blue');
                        break;
                    case 'MK':
                    case 'MP':
                    case 'STRONG':
                    case 'FORWARD':
                        e.classList.add('white');
                        break;
                    case 'P':
                        e.classList.add('purple');
                        break;
                }

                span.append(e);
            }
        }
    }

    setTimeout(doIt, 1);
}