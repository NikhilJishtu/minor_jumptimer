let timeInSecs2;
let ticker2;

function startTimer(secs2) {
timeInSecs2 = parseInt(secs2);
ticker2 = setInterval("tick2()", 1000); 
}

function tick2( ) {
let secs2 = timeInSecs2;
if (secs2 > 0) {
timeInSecs2--; 
}
else {
clearInterval(ticker2);
startTimer(30*60);
}

let mins2 = Math.floor(secs2/60);
secs2 %= 60;
let pretty2 =( (mins2 < 10) ? "0" : "" ) + mins2 + ":" + ( (secs2 < 10) ? "0" : "" ) + secs2;

document.getElementById("countdown3").innerHTML = pretty2;
}

startTimer(30*60);









