import Player from '@vimeo/player';

const player = new Player('vimeo-player');

const onPlay = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
  console.log(data.seconds);
};

// player.on('timeupdate', _.throttle(onPlay, 1000));
player.on('timeupdate', onPlay);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
