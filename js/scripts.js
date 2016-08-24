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
var newPerson = new Player("chris");

Player.prototype.generateScore = function(newPoints){
  this.totalScore = this.totalScore + newPoints;
}
var scoreKeeper;
var roll = function(){
  var playerScore = 0;
  var individualRoll= Math.floor((Math.random() * 6) + 1);
  playerScore += individualRoll;
  newPerson.generateScore(playerScore);
  console.log(newPerson.totalScore);
}
