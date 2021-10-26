import { diffDates, diffToHtml } from "./datecalc.js";
import { formatError } from "./utils.js";
import { selector } from "./change.js";
import { timer } from "./timer.js";
//import "./styles/style.css";
//import "./media/peep.mp3";
/* 
import chunk from 'lodash/chunk';
console.log(chunk(['a', 'b', 'c', 'd'], 2)); */


const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);


function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}