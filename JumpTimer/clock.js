realClock();

function realClock() {
  var date = new Date();

  document.querySelector(".circle-front").innerHTML =`${checkDigit(date.getHours())}:${checkDigit(date.getMinutes())}`
  
  setTimeout("realClock()", 1000);
};

function checkDigit(i) {
    if (i < 10) {i = "0" + i}; 
    return i;
}

