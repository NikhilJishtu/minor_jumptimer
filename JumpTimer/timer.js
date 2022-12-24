let timeInSecs;
let ticker;

const targetTime = new Date();

targetTime.setHours(11, 0, 0, 0);

function startTimer() {
  // Calculate the time remaining in seconds
  timeInSecs = Math.floor((targetTime - Date.now()) / 1000);

  // If the target time has passed, set the target time to the next day
  if (timeInSecs < 0) {
    targetTime.setDate(targetTime.getDate() + 1);
    timeInSecs = Math.floor((targetTime - Date.now()) / 1000);
  }

  ticker = setInterval(tick, 1000);
}

function tick() {
  // Decrease the time remaining by 1 second
  timeInSecs--;

  // Calculate the time remaining in seconds
  let secs = timeInSecs;

  // If the target time has passed, set the target time to the next day
  if (secs <= 0) {
    targetTime.setDate(targetTime.getDate() + 1);
    timeInSecs = Math.floor((targetTime - Date.now()) / 1000);
    secs = timeInSecs;
  }

  // Calculate the time remaining in half-hour blocks
  let halfHourBlocks = Math.floor(secs / 1800);
  secs %= 1800;

  // Calculate the time remaining in minutes and seconds
  let mins = Math.floor(secs / 60);
  secs %= 60;

  // If the timer has reached 0, reset it to 60 minutes
  if (halfHourBlocks === 0 && secs === 0) {
    timeInSecs = 3600;
    mins = 60;
  }

  // Format the time as a string
  let pretty =  (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;

  // Update the countdown element
  document.getElementById("countdown2").innerHTML = pretty;
}

startTimer();