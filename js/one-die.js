

// front end

$(function() {
  $("form#playerOptions").submit(function(event){
    event.preventDefault();
    $("img").addClass("animated");
    var player1 = $("input#inputtedPlayer1").val();
    var player2 = $("input#inputtedPlayer2").val();
    var player1 = new OneDie(player1);
    var player2 = new OneDie(player2);
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
