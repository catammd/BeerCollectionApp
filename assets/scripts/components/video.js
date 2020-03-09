import Plyr from '../../../fractal/node_modules/plyr/dist/plyr';

document.addEventListener('DOMContentLoaded', () => {
    let videos = document.querySelectorAll('.c-media-player');

    if(!videos) {
        return;
    }

    // Bind event listener
    function on(selector, type, callback) {
        if(selector){
            const currentSelector = document.querySelector(selector);
            if(currentSelector){
                currentSelector.addEventListener(type, callback, false);
            }
        }
    }

    // Expose videoplayers
    window.videoplayers = [];

    videos.forEach(video => {
        // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
        const player = new Plyr(video);

        // Add player
        window.videoplayers.push(player);

        // Play
        on('.js-play', 'click', () => {
            player.play();
        });

        // Pause
        on('.js-pause', 'click', () => {
            player.pause();
        });

        // Stop
        on('.js-stop', 'click', () => {
            player.stop();
        });

        // Rewind
        on('.js-rewind', 'click', () => {
            player.rewind();
        });

        // Forward
        on('.js-forward', 'click', () => {
            player.forward();
        });
    })
});