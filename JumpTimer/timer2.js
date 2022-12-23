window.onload = function() {
  let timeInSecs2;
  let ticker2;

  const targetTime = new Date();

  targetTime.setHours(11, 0, 0, 0);

  function startTimer() {
    // Calculate the time remaining in seconds
    timeInSecs2 = Math.floor((targetTime - Date.now()) / 1000);

    // If the target time has passed, set the target time to the next day
    if (timeInSecs2 < 0) {
      targetTime.setDate(targetTime.getDate() + 1);
      timeInSecs2 = Math.floor((targetTime - Date.now()) / 1000);
    }

    ticker2 = setInterval(tick2, 1000);
  }

  function tick2() {
    // Decrease the time remaining by 1 second
    timeInSecs2--;
  
    // Calculate the time remaining in seconds
    let secs2 = timeInSecs2;
    
    // If the target time has passed, set the target time to the next day
    if (secs2 <= 0) {
      targetTime.setDate(targetTime.getDate() + 1);
      timeInSecs2 = Math.floor((targetTime - Date.now()) / 1000);
      secs2 = timeInSecs2;
    }
  
    // Calculate the time remaining in half-hour blocks
    let halfHourBlocks = Math.floor(secs2 / 1800);
    secs2 %= 1800;
  
    // Calculate the time remaining in minutes and seconds
    let mins2 = Math.floor(secs2 / 60);
    secs2 %= 60;
  
    // Format the time as a string
    let pretty2 =  (mins2 < 10 ? "0" : "") + mins2 + ":" + (secs2 < 10 ? "0" : "") + secs2;
  
    // Update the countdown element
    document.getElementById("countdown3").innerHTML = pretty2;
    document.getElementById("countdown").innerHTML = pretty2;
    document.getElementById("fullscreenTimerId").innerHTML = secs2;
  
    // countdown van 10
    if (mins2 == 0 && secs2 < 11) {
      document.body.style.backgroundColor = "#2803a0";
      document.getElementById("container").style.display = "none";
      document.getElementById("fullscreenTimerId").style.display = "block";
}
setTimeout(function delay() {
if (secs2 == 0) {
document.body.style.backgroundColor = "#00bfff";
document.getElementById("container").style.display = "grid";
document.getElementById("fullscreenTimerId").style. display = "none";
}
}, 1000);
}

startTimer();
};