
function Player (name){
  this.name = name;
  this.dice1 = 0;
  this.dice2 = 0;
  this.currentRoll = 0;
  this.currentRollTotal = 0;
  this.totalScore = 0;
  this.doubles = false
}

Player.prototype.roll = function(){
  this.dice1 = Math.floor((Math.random() * 6) + 1);
  this.dice2 = Math.floor((Math.random() * 6) + 1);
  this.currentRoll =  this.dice1 + this.dice2;
  if(this.dice1 ===1 && this.dice2 ===1){
    this.totalScore === 0;
    this.currentRollTotal = 0;
    this.endTurn();
  }
  else if(this.dice1 === 1 || this.dice2 === 1){
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
        $("#buttonPass").prop("disabled", true);
          var rollValue = player1.roll();
          $("#dice1").text(player1.dice1);
          $("#dice2").text(player1.dice2);
          $("#rollValue").text(rollValue);
          $("#roundTotal").text(player1.currentRollTotal);
          if(player1.dice1 ===1 || player1.dice2 ===1){
            changePlayer2();
          }
          if(player1.dice1 === player1.dice2){
            $("#buttonPass").prop("disabled", true)
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
        $("#buttonPass").prop("disabled", false);
        var rollValue = player2.roll();
        $("#dice1").text(player2.dice1);
        $("#dice2").text(player2.dice2);
        $("#rollValue").text(rollValue);
        $("#roundTotal").text(player2.currentRollTotal);
        if(player2.dice1 ===1 || player2.dice2 ===1){
          changePlayer1();
        }
        if(player2.dice1 === player2.dice2){
          $("#buttonPass").prop("disabled", true);
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
