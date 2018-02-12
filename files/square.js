var colours = ["white","silver","gray","black","red","maroon", "yellow", "olive", "lime","green","aqua","teal","blue","navy","fuchsia","purple"]

function Square(){
  var rand = colours[Math.floor(Math.random() * colours.length)];
  this.colour = rand;
  this.x = Math.floor(Math.random() * (570 - 0 + 1));
  this.y = Math.floor(Math.random() * (370 - 0 + 1));

  newRec = rect(this.x, this.y, 30, 30);
  newRec.fill(this.colour);

  this.show = function(){
    newRec.show();
  }
}
