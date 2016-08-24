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
    this.endTurn();
  }
  else{
  this.currentRollTotal += this.currentRoll;
  }
  return  this.currentRoll;
}

Player.prototype.endTurn = function(){
  this.totalScore += this.currentRollTotal;
  this.currentRollTotal = 0;
  if(this.totalScore >= 100){
    console.log("succes");
  }
  return this.totalScore;
}



// front end

$(function() {
  $("form#playerOptions").submit(function(event){
    event.preventDefault();
    $("img").addClass("animated");
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
      $("#player1name").toggleClass("red");
      $("#player2name").toggleClass("red");
      $("#buttonRoll").click(function(){
          var rollValue = player1.roll();
          $("#rollValue").text(rollValue);
          $("#roundTotal").text(player1.currentRollTotal);
          if(rollValue === 1){
            changePlayer2();
          }
        });
      $("#buttonPass").click(function(){
        $("#player1total").text(player1.endTurn());
        changePlayer2();
      });
    };
    var changePlayer2 = function(){
      $("button").off();
      $("#player1name").toggleClass("red");
      $("#player2name").toggleClass("red");
      $("#buttonRoll").click(function(){
        var rollValue = player2.roll()
        $("#rollValue").text(rollValue);
        $("#roundTotal").text(player2.currentRollTotal);
        if(rollValue === 1){
          changePlayer1();
        }
        });
      $("#buttonPass").click(function(){
        $("#player2total").text(player2.endTurn());
        changePlayer1();
      });
    };
    changePlayer1();
  });// end submit



});
