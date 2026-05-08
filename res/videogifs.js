'use strict';

function mutetoggle() {
    this.muted = !this.muted;
}

function main() {
    let videogifs = document.querySelectorAll('video[muted]');

    for (let video of videogifs) {
        video.addEventListener('click', mutetoggle);
    }

    let style = document.createElement('STYLE');

    style.textContent = 'video{cursor:pointer;}';

    document.querySelector('head').appendChild(style);
}

document.addEventListener('DOMContentLoaded', main);