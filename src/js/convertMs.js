export default function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = padStart(Math.floor(ms / day));
  // Remaining hours
  const hours = padStart(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = padStart(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = padStart(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}



function padStart(value) {
  return String(value).padStart(2, "0");
};
