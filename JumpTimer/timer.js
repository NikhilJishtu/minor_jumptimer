let timeInSecs;
let ticker;

function startTimer(secs) {
timeInSecs = parseInt(secs);
ticker = setInterval("tick()", 1000); 
}

function tick( ) {
let secs = timeInSecs;
if (secs > 0) {
timeInSecs--; 
}
else {
clearInterval(ticker);
startTimer(60*60);
}

let mins = Math.floor(secs/60);
secs %= 60;
let pretty =( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

document.getElementById("countdown").innerHTML = pretty;
document.getElementById("countdown2").innerHTML = pretty;
}

startTimer(60*60);









