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
  
    // If the number of minutes is greater than 30, reset it to 0
    if (mins > 30) {
      mins = 0;
      timeInSecs = 3600;
    }
  
    // Format the time as a string
    let pretty = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  
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