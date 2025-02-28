import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import convertMs from "./convertMs";
const inputEl = document.querySelector("#datetime-picker");
const buttonStartEl = document.querySelector("[ data-start]");
const spanSecEl = document.querySelector("[data-seconds]");
const spanMinEl = document.querySelector("[data-minutes]");
const spanHoursEl = document.querySelector("[data-hours]");
const spanDaysEl = document.querySelector("[data-days]");
let intervalId = null;
let selectedTime = null
buttonStartEl.disabled = true;



buttonStartEl.addEventListener("click", onStartTimer);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {    
        selectedTime = selectedDates[0];
        buttonStartEl.disabled = false;
  },
};

flatpickr(inputEl, options);


function onStartTimer() {
    startTimer(selectedTime)
}


function startTimer(time) {
    futureTime = time.getTime();
    let currentTime = Date.now();

    if (futureTime < currentTime) {
        return alert("dasdasda")
    };
    
    buttonStartEl.disabled = true;
    intervalId = setInterval(() => {
        const currentTime = Date.now();
        let unixTime = futureTime - currentTime;
        loadInterface(unixTime);

        if (unixTime <= 0) {
            clearInterval(intervalId);
            buttonStartEl.disabled = false;
        };

    }, 1000)
};


function loadInterface(time) {
    const interfaceValue = convertMs(time);
    let { seconds, minutes, hours, days } = interfaceValue;
    
    seconds = (seconds < 0) ? 0 : seconds;
    minutes = (minutes < 0) ? 0 : minutes;
    hours = (hours < 0) ? 0 : hours;
    days = (days < 0) ? 0 : days;

    spanSecEl.textContent = seconds; 
    spanMinEl.textContent = minutes;
    spanHoursEl.textContent = hours;
    spanDaysEl.textContent = days;
}