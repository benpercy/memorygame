var colours = ["white","silver","gray","black","red","maroon", "yellow", "olvie", "lime","green","aqua","teal","blue","navy","fuchsia","purple"]

function Square(){
  var rand = colours[Math.floor(Math.random() * colours.length)];
  this.x = Math.floor(Math.random() * (570 - 0 + 1));
  this.y = Math.floor(Math.random() * (370 - 0 + 1));

  this.show = function(){
    fill(rand);
    rect(this.x, this.y, 30, 30);
  }
}
