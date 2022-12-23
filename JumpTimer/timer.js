let timeInSecs;
let ticker;

const targetTime = new Date();
// Set the target time to the next half-hour mark
targetTime.setMinutes(targetTime.getMinutes() + 30 - (targetTime.getMinutes() % 30), 0, 0);

function startTimer() {
  // Calculate the time remaining in seconds
  timeInSecs = Math.floor((targetTime - Date.now()) / 1000);

  ticker = setInterval(tick, 1000);
}

function tick() {
  // Decrease the time remaining by 1 second
  timeInSecs--;

  // Calculate the time remaining in seconds
  let secs = timeInSecs;

  // If the target time has passed, set the target time to the next half-hour mark
  if (secs <= 0) {
    targetTime.setMinutes(targetTime.getMinutes() + 30);
    timeInSecs = Math.floor((targetTime - Date.now()) / 1000);
    secs = timeInSecs;
  }

  // Calculate the time remaining in minutes and seconds
  let mins = Math.floor(secs / 60);
  secs %= 60;

  // Format the time as a string
  let pretty =  (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;

  // Update the countdown element
  document.getElementById("countdown2").innerHTML = pretty;
  document.getElementById("fullscreenTimerId").innerHTML = secs;

  // countdown van 10
  if (mins == 0 && secs < 11) {
    document.body.style.backgroundColor = "#2803a0";
    document.getElementById("container").style.display = "none";
    document.getElementById("fullscreenTimerId").style.display = "block";
  }
  setTimeout(function delay() {
    if (secs == 0) {
      document.body.style.backgroundColor = "#00bfff";
      document.getElementById("container").style.display = "grid";
      document.getElementById("fullscreenTimerId").style.display = "none";
    }
  }, 1000);
}

startTimer();
