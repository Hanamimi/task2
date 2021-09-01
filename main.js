let seconds = 0;
let one  = 0;
let ten = 0;
let hundred = 0;

let interval= null;


function stopwatch(){
  seconds++;
  if(seconds / 10 === 1){
    seconds = 0;
    one++;
    
    if(one / 10 === 1){
      one = 0;
      ten++;
      
      if(ten / 10 === 1){
        ten = 0;
        hundred++;
      }
    }
  }
  
  document.getElementById("time").innerHTML = hundred + " " + ":" + " " + ten + " " + ":" + " " + one + " " + ":" + " " + seconds;
}
    
function start(){
  
  interval = window.setInterval(stopwatch, 100);
  document.getElementById("start").innerHTML = "スタート";
  document.getElementById("start").classList.add("opacity");
  document.getElementById("stop").classList.remove("opacity");

}


function stop(){
  
  window.clearInterval(interval);
  document.getElementById("stop").innerHTML = "ストップ";
  document.getElementById("start").classList.remove("opacity");
  document.getElementById("stop").classList.add("opacity");
}

function reset(){
  
  window.clearInterval(interval);
  seconds = 0;
  one = 0;
  ten = 0;
  hundred = 0;
  document.getElementById("time").innerHTML= "0 : 0 : 0 : 0";
  document.getElementById("stop").classList.remove("opacity");
  document.getElementById("start").classList.remove("opacity");
  // document.getElementById("reset").classList.add("opacity");
}