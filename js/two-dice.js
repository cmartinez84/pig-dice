
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
////////back end for one die option//////////

function OneDie (name){
  this.name = name;
  this.totalScore = 0;
  this.currentRoll = 0;
  this.currentRollTotal = 0;
}

OneDie.prototype.roll = function(){
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

OneDie.prototype.endTurn = function(){
  this.totalScore += this.currentRollTotal;
  this.currentRollTotal = 0;
  if(this.totalScore >= 100){
    console.log("succes");
  }
  return this.totalScore;
}
// front end

$(function() {
  $(".flyingPig").hide();
  $(".cubeFace ").text("");


///////being front end for one die option///////////
  $("#buttonOneDie").click(function(){
    $(".well").addClass("onLoad");
    $(".die2Position").fadeOut();
    $(".die1Position").addClass("blowUp")
    $(".options").fadeOut();
    function rollingState(die1value,rollTotal){
      $(".side1").text(1);
      $(".side2").text(2);
      $(".side3").text(3);
      $(".side4").text(4);
      $(".side5").text(5);
      $(".side6").text(6);
      $(".d6").removeClass("slower");
      $(".d6").addClass("faster");
      setTimeout(afterRolling1,3000);
      function afterRolling1 (){
        $(".die1Position .cubeFace  ").text(die1value);
        $(".die1Position").removeClass("faster");
        $(".die1Position").addClass("slower");
        $("#roundTotal").text(rollTotal);
      };
    };
    $("form#playerOptions").submit(function(event){
      event.preventDefault();
      $(".flyingpig2").toggle();
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
        $(".flyingpig1").toggle();
        $(".flyingpig2").toggle();
        $("#player1name").toggleClass("red");
        $("#player2name").toggleClass("red");
        $("#buttonRoll").click(function(){
            var rollValue = player1.roll();
            rollingState(rollValue);
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
          rollingState(rollValue);
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
  })
  ////////begin front end for two die option
  $("#buttonTwoDie").click(function(){
    $(".options").fadeOut();
    $(".well").addClass("onLoad");

      function rollingState(die1value,die2value, rollTotal){
        $(".side1").text(1);
        $(".side2").text(2);
        $(".side3").text(3);
        $(".side4").text(4);
        $(".side5").text(5);
        $(".side6").text(6);
        $(".d6").removeClass("slower");
        $(".d6").addClass("faster");
        setTimeout(afterRolling1,3000);
        setTimeout(afterRolling2,2000);
        function afterRolling1 (){
          $(".die1Position .cubeFace  ").text(die1value);
          $(".die1Position").removeClass("faster");
          $(".die1Position").addClass("slower");
          $("#roundTotal").text(rollTotal);
        };
        function afterRolling2 (){
          $(".die2Position .cubeFace").text(die2value);
          $(".die2Position").removeClass("faster");
          $(".die2Position").addClass("slower");

        };
      };


      $("form#playerOptions").submit(function(event){
        $(".flyingpig2").toggle();
        event.preventDefault();
        $( ".cubeFace").addClass("red");

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
          $(".flyingpig1").toggle();
          $(".flyingpig2").toggle();
          $("#buttonRoll").click(function(){
            $("#buttonPass").prop("disabled", false);
              var rollValue = player1.roll();
              rollingState(player1.dice1, player1.dice2, player1.currentRollTotal);
              if(player1.dice1 ===1 || player1.dice2 ===1){
                changePlayer2();
              }
              else if(player1.dice1 === player1.dice2){
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
          $(".flyingpig1").toggle();
          $(".flyingpig2").toggle();
          $("#buttonRoll").click(function(){

            $("#buttonPass").prop("disabled", false);
            var rollValue = player2.roll();
            rollingState(player2.dice1, player2.dice2, player2.currentRollTotal);
            if(player2.dice1 ===1 || player2.dice2 ===1){
              changePlayer1();
            }
            else if(player2.dice1 === player2.dice2){
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
  })

});
