// Player{
//   name: larry;
//   totalScore: 9;
// }
// player.score = player.score + points
//
// player constructor
// button to generate random numbers between 1-6;
// two buttons for pass and roll
// point display
// rolling 1 or pushing pass will cause turn to switch to other player
//
function Player (name){
  this.name = name;
  this.totalScore = 0;
}


Player.prototype.generateScore = function(newPoints){
  this.totalScore = this.totalScore + newPoints;
  if(this.totalScore >= 100){
    alert("you win!");
  }
}

var rollTotal = 0;
var roll = function(){
  var individualRoll= Math.floor((Math.random() * 6) + 1);
  if(individualRoll === 1){
    rollTotal = 0;
    pass();
  }
  else{
    rollTotal += individualRoll;
  }
  console.log(rollTotal);
}

var pass = function(){
  newPerson.generateScore(rollTotal);
}

// front end

$(function() {
  $("form#playerOptions").submit(function(event){
    event.preventDefault();
    var player1 = $("input#player1-name").val();
    var player2 = $("input#player2-name").val();
    var player1 = new Player(player1);
    var player2 = new Player(player2);
    console.log(player1);
  });
});
