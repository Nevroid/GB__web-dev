const timer_btn = document.getElementById('timer_btn');
const timer_stop_btn = document.getElementById('timer_stop_btn');
let userTime = document.getElementById('timer_input');
const timerDisplay = document.getElementById('current__timer');
let timerStopTrigger = false;
const {Howl, Howler} = require('howler');
const timerAlert = new Howl({
  src: ['../src/media/timer_snd.mp3']
});



console.log("script loaded")

timer_btn.addEventListener('click', startTimer);
timer_stop_btn.addEventListener('click', () => {
  timerStopTrigger = true
})

function startTimer() {
    console.log("initial value is " + userTime.value)

    let current = userTime.value;
    let timerId = setInterval(go, 1000);
    function go() {
      console.log(current);
      timerDisplay.innerHTML = `${current} seconds left`
      if ((current <= 0) || timerStopTrigger ) {
        clearInterval(timerId);
        console.log("stoped");
        timerAlert.play();
        timerDisplay.innerHTML = `Timer stopped at: ${current}`
        userTime.value = current;
        timerStopTrigger = false;
      }
      current--;
    }
};

function stopTimer() {
  clearInterval();
  console.log("stoped");
  timerAlert.play();
  timerDisplay.innerHTML = `Timer stopped at: ${current}`
};