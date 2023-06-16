const daysText = document.querySelector("#days");
const hoursText = document.querySelector("#hours");
const minsText = document.querySelector("#mins");
const secondsText = document.querySelector("#seconds");

let date =  new Date().getFullYear() + 1;
const newYears = "1 Jan " + date;

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = formatTime(Math.floor(totalSeconds / 3600 / 24));
  const hours = formatTime(Math.floor(totalSeconds / 3600) % 24);
  const minutes = formatTime(Math.floor(totalSeconds / 60) % 60);
  const seconds = formatTime(Math.floor(totalSeconds % 60));

  daysText.innerHTML = days;
  hoursText.innerHTML = hours;
  minsText.innerHTML = minutes;
  secondsText.innerHTML = seconds;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
