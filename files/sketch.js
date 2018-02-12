var counter = 0;
var timeLeft = 5;
var squares = [];
var newSquare;

function convertSeconds(s){
  var min = floor (s/60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

function setup() {
  createCanvas(600, 400);
  background(51);
  squares.push(new Square());
  console.log(squares);
  for (i=0; i<10; i++){
    newSquare = new Square();
    console.log(newSquare.colour);
    console.log(squares);
    if(squares[i].colour == newSquare.colour){
      console.log("Duplicate!");
        continue;
    }else{
      squares[i] = newSquare;
    }
  }


  //timer handling
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

//draw all objects on the page
function draw(){
  for (i=0; i<squares.length;i++){
    squares[i].show();
  }
}
}
