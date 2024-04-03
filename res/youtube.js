'use strict';

// Load YouTube API.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

document.body.append(tag);

let players = [];
let index = 0;

function onYouTubeIframeAPIReady() {
    for (let figure of document.querySelectorAll('.youtube-wrapper')) {
        if (!figure.getAttribute('data-time')) {
            figure.setAttribute('data-time', '0');
        }

        let element = document.createElement('div');
        element.id = String.fromCharCode(97+index);

        figure.appendChild(element);

        let vars = {
            start: figure.getAttribute('data-time')
        };

        if (figure.getAttribute('data-end')) {
            vars['end'] = figure.getAttribute('data-end');
        }

        let player = new YT.Player(element.id, {
            videoId: figure.getAttribute('data-id'),
            width: '100%',
            height: '100%',
            playerVars: vars,
            enablejsapi: 1
        });

        index++;
        players.push(player);
    }

    for (let link of document.querySelectorAll('.yt-seek-link')) {
        link.addEventListener('click', function(e) {
            console.log(this.getAttribute('data-player'));
            
            players[this.getAttribute('data-player')].seekTo(this.getAttribute('data-time'));

            e.preventDefault();
        })
    }
}