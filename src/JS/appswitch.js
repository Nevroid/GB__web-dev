const dateCalcForm = document.getElementById("datecalc");
const timerForm = document.getElementById("timer");
const switchBtn = document.getElementById("appSwitcher");

switchBtn.addEventListener('click', appSwitcherHandler);
function appSwitcherHandler(event) {
    event.preventDefault();
    if (dateCalcForm.style.display == 'block') {
        switchBtn.innerHTML = 'Калькулятор дат';
        dateCalcForm.style.display = 'none';
        timerForm.style.display = 'block';
    }else{
        switchBtn.innerHTML = 'Таймер';
        dateCalcForm.style.display = 'block';
        timerForm.style.display = 'none';
    }}
