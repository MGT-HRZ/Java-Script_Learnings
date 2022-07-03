window.onload = function(){
  
  var seconds = 0; 
  var tens = 0; 
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;
  var colr;

  buttonStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }
  
  buttonStop.onclick = function() {
    clearInterval(Interval);
  }
  

  buttonReset.onclick = function(){
    clearInterval(Interval);
    tens = "00";
  	seconds = "000";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    colr = document.querySelector("#font").style.color = "black";
  }  
  
  function startTimer(){
    colr = document.querySelector("#font").style.color = "red";

    tens++;
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "00" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = "0" + seconds;
    }
    
    if (seconds > 99){
      appendSeconds.innerHTML = seconds;
    }

    if (seconds == 999){
      appendSeconds.innerHTML = clearInterval(Interval);
      appendSeconds.innerHTML = tens = "00";
      appendSeconds.innerHTML = seconds = "000";
      appendSeconds.innerHTML = appendTens.innerHTML = tens;
      appendSeconds.innerHTML = appendSeconds.innerHTML = seconds;
    }
  }
}