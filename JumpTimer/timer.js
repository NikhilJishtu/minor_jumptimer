var timeInSecs;
var ticker;

function startTimer(secs) {
timeInSecs = parseInt(secs);
ticker = setInterval("tick()", 1000); 
}

function tick( ) {
var secs = timeInSecs;
if (secs > 0) {
timeInSecs--; 
}
else {
clearInterval(ticker);
startTimer(60*60); // 4 minutes in seconds
}

var days= Math.floor(secs/86400); 
secs %= 86400;
var hours= Math.floor(secs/3600);
secs %= 3600;
var mins = Math.floor(secs/60);
secs %= 60;
var pretty =( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

document.getElementById("countdown").innerHTML = pretty;
}

startTimer(60*60); // 4 minutes in seconds

//Credits to Philip M from codingforum