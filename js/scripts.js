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
  this.currentRoll = 0;
  this.currentRollTotal = 0;
}


Player.prototype.roll = function(){
  this.currentRoll =  Math.floor((Math.random() * 6) + 1);
  if(this.currentRoll === 1){
    this.currentRollTotal = 0;
  }
  else{
  this.currentRollTotal += this.currentRoll;
  }
  return  this.currentRoll;
}

Player.prototype.endTurn = function(){
this.totalScore += this.currentRollTotal;
this.currentRollTotal = 0;
return this.totalScore;
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

    var changePlayer1 = function(){
      $("button").off();
      $("#buttonRoll").click(function(){
          $("#rollValue").text(player1.roll());
          $("#roundTotal").text(player1.currentRollTotal);
        });
      $("#buttonPass").click(function(){
        $("#player1total").text(player1.endTurn());
        changePlayer2();
      });
    };
    var changePlayer2 = function(){
      $("button").off();
      $("#buttonRoll").click(function(){
          $("#rollValue").text(player2.roll());
          $("#roundTotal").text(player2.currentRollTotal);
        });
      $("#buttonPass").click(function(){
        $("#player2total").text(player2.endTurn());
        changePlayer1();
      });
    };
    changePlayer1();
  });// end submit



});
