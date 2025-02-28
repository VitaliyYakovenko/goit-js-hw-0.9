import getRandomHexColor from "./random-color";
const btnStartEl = document.querySelector("[data-start]");
const btnStopEl = document.querySelector("[data-stop]");
let intervalId = null;


btnStartEl.addEventListener("click", onStartChangeBodyColor);
btnStopEl.addEventListener("click", onStopChangeBodyColor);

function onStartChangeBodyColor(e) {
    btnStartEl.disabled = true;
    btnStopEl.disabled = false;
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 500);
    
};

function onStopChangeBodyColor(e) {
    clearInterval(intervalId);
    btnStopEl.disabled = true;
    btnStartEl.disabled = false;
};