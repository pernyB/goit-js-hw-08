
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onTimeupdate = function (event) { 
    console.log(event);
    localStorage.setItem("videoplayer-current-time", event.seconds)
};
    
player.on('timeupdate', throttle(onTimeupdate, 1000));
//player.off('timeupdate', onTimeupdate);
player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);