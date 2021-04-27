import {formatError} from "./common.js"
import {diffDates, datesToHTML} from "./diffDates.js"


const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    event.preventDefault();
    dateCalcResult.innerHTML = "";
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        dateCalcResult.innerHTML = datesToHTML(diffDates(firstDate, secondDate));
        console.log(datesToHTML(diffDates(firstDate, secondDate)));
    }else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля")
}