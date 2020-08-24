
const drumKeys = document.querySelectorAll('.key');
drumKeys.forEach(key => key.addEventListener('transitionend', function(e) {
  if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}));

function playSound(e) {
  const drumKey = document.querySelector(`.key[data-key='${e.keyCode}'`);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  drumKey.classList.add('playing');
  if(!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener('keydown', playSound);