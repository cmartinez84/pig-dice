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
var roll = function(){
   return Math.floor((Math.random() * 6) + 1);
}
var rollTotal = 0;
var assessRoll = function(value){
  if(value === 1){
    rollTotal = 0;
    return rollTotal;
  }
  else{
    rollTotal += value;
  }
  return rollTotal;
}




var pass = function(){
  newPerson.generateScore(rollTotal);
}

// front end

$(function() {
  $("form#playerOptions").submit(function(event){
    event.preventDefault();
    var player1 = $("input#inputtedPlayer1").val();
    var player2 = $("input#inputtedPlayer2").val();
    var player1 = new Player(player1);
    var player2 = new Player(player2);
    $("#player1name").text(player1.name);
    $("#player1total").text(player1.totalScore);
    $("#player2name").text(player2.name);
    $("#player2total").text(player2.totalScore);
  });// end submit
  $("#buttonRoll").click(function(){
    var rollValue = roll();
    var assessed = assessRoll(rollValue);
    $("#rollValue").text(rollValue);
    $("#roundTotal").text(assessed);

  })
});
