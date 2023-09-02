'use strict';

let boxes = [],
    timer, scorecard,
    time = 60,
    score = 0;

function getRandomBox() {
  return boxes[Math.floor(Math.random() * 9)];
}
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function hit(e) {
    if (time == 0) { return; } // don't continue if game is over

    if (e.target.classList.contains('hit')) { return; } // don't double-count hits

    e.target.classList.add('hit');

    if (e.target.classList.contains('spam')) {
        score += 100;
    }
    if (e.target.classList.contains('ral')) {
        score -= 100;
    }

    clearTimeout(e.target.timer)

    e.target.timer = setTimeout(() => { down(e.target) }, 500);

    scorecard.textContent = score;
}

function countdown() {
    time--;
    timer.textContent = time;

    if (time != 0) {
        setTimeout(countdown, 1000);
    } else {
        for (let box of boxes) {
            clearTimeout(box.dude.timer);
        }

        document.querySelector('#gamebox').classList.add('over');
    }
}

function down(dude) {
    dude.classList.add('down');
}

function pop() {
    if (time == 0) { return }

    let box = getRandomBox();
    let breakout = 5;

    while (!box.dude.classList.contains('down') && breakout > 0) {
        box = getRandomBox();
        breakout--;
    }

    if (breakout == 0) { // couldn't get a valid box, give up for now
        setTimeout(pop, 300);
        return;
    }

    let chance = Math.random();
    if (chance < 0.2) {
        box.dude.className = 'ral';
    } else {
        box.dude.className = 'spam';
    }
    box.dude.timer = setTimeout(() => { down(box.dude) }, 1000);

    if (timer != 0) {
        let speed = Math.max(50, time * 7.5); // "speed" actually goes down because it's the min time

        let split = randInt(speed, 450); // how soon should another mole appear

        console.log(split, speed);

        setTimeout(pop, split);
    }
}

function go(e) {
    time = 60;
    score = 0;
    setTimeout(countdown, 1000);
    setTimeout(pop, 300)
    e.target.remove();
}

function prep() {
    timer = document.querySelector('#timer');
    scorecard = document.querySelector('#score');

    boxes = document.querySelectorAll('.box');
    for (let box of boxes) {
        box.dude = box.children[0];
        box.dude.classList.remove('spam', 'ral', 'hit');
        box.dude.classList.add('down');
        box.dude.addEventListener('pointerdown', hit);
    }
    let button = document.createElement('button');
    button.textContent = 'Go!';
    document.querySelector('#raedy').appendChild(button);
    button.addEventListener('pointerdown', go);
}

if (document.readyState !== 'loading') { // skip listener if dom already loaded
  prep();
} else {
    document.addEventListener('DOMContentLoaded', prep);
}