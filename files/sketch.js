var counter = 0;
var timeLeft = 5;
var squares = [];

function convertSeconds(s){
  var min = floor (s/60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

function setup() {
  createCanvas(600, 400);
  for (i=0 ; i<10; i++){
    squares[i] = new Square();
  }


  var timer = select('#timer');
  timer.html("Time Remaining: " + convertSeconds(timeLeft - counter ));

  function timeIt(){
    if(timeLeft - counter <= 0){
      timer.html("Times up!");
    }else{
    counter++;
    timer.html("Time Remaining: " + convertSeconds(timeLeft - counter ));
  }
}

  setInterval(timeIt, 1000);
}

function draw(){
  background(51);
  for (i=0; i<squares.length;i++){
    squares[i].show();
  }
}
