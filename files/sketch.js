var counter = 0;
var timeLeft = 61;
var squares = [];
var flagged = false;


//handles number format of timer
function convertSeconds(s){
  var min = floor (s/60);
  var sec = s % 60;
  return nf(min,2) + ':' + nf(sec,2);
}

//initialisation of the page
function setup() {
  background(51);

  button = createButton('Start!');
  button.parent('start-button');
  button.mousePressed(run);
}

function run(){
  button.hide();

  var canvas = createCanvas(600, 400);
  canvas.parent('sketch-holder');
  background(51);
  timeIt();

  randomiseSquares();
}

//create an amount of random squares
function randomiseSquares(){
  for(i=0;i<=5;i++){
    var tempSquare = new Square();
    console.log(tempSquare);
    squares.push(tempSquare);
  }
}


//timer handling
function timeIt(){
  //gets the html element by id
  var timer = select('#timer');

  //calculates if time is up or not
  if(timeLeft - counter <= 0){
    timer.html("Times up!");
  }else{
  counter++;
  timer.html("Time Remaining: " + convertSeconds(timeLeft - counter ));
  }
}
//end of timer handling

//draw all objects on the page
function draw(){

}

document.getElementById("insert-button").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("insert-button").innerHTML = "YOU CLICKED ME!";
}

setInterval(timeIt, 1000);
