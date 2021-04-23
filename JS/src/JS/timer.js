const timer_btn = document.getElementById('timer_btn');
let userTime = document.getElementById('timer_input').value;

timer_btn.addEventListener('click', timer(userTime));

function timer (from) {
    let current = from;
    let timerId = setInterval(go, 1000);
    function go() {
      console.log(current);
      if (current <= 0) {
        clearInterval(timerId);
        console.log("stoped");
      }
      current--;
    }
  
    go();
    
  }
  

// function timer () {
//     console.log(userTime.value);
//     --userTime.value;
// }
// function startTimer() {
//     // let time = userTime.value;
//     setInterval(timer(userTime.value), 1000)
// }
// if (userTime.value) {
// console.log(userTime.value)
// let seconds = userTime.value;
// }

// function startTimer () {
//     console.log(userTime.value)
//     let seconds = userTime.value;
    
//     setInterval(timer(seconds), 1000);
// }


// function timer (seconds) {
//     if (seconds > 0) {
//         seconds--
//         console.log(seconds)
//     } else {
//         clearInterval();
//         console.log('timer stoped');
//     }
// }


