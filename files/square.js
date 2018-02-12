var x,y,colour;

function Square(){
  //var rand = colours[Math.floor(Math.random() * colours.length)];
  colour = random(["white","gray","black","red","maroon", "yellow", "lime","green","aqua","teal","blue","fuchsia","purple"]);
  x = Math.floor(Math.random() * (550 - 0 + 1));
  y = Math.floor(Math.random() * (350 - 0 + 1));

  newRec = rect(x, y, 50, 50);
  newRec.fill(colour);
  console.log(colour);

  return colour;

  this.show = function(){
    newRec.show();
  }
}
