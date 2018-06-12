$(document).ready(function(){


    //wins and losses

    var wins = 0;
    var losses = 0;

    var realityStone;
    var spaceStone;
    var soulStone;
    var timeStone;

    var randomNum;
    var userScore;

    function setUp() {
        randomNum = Math.floor(Math.random()*102) + 19;

        realityStone = Math.floor(Math.random()*12) + 1;
        spaceStone = Math.floor(Math.random()*12) + 1;
        soulStone = Math.floor(Math.random()*12) + 1;
        timeStone = Math.floor(Math.random()*12) + 1;

        userScore = 0;

        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses :" + losses);
        $("#random-number").html(randomNum);
        //$("#div").html(userScore);
        console.log();
    }

    function ohDidIWin() {

        if (userScore > randomNum) {
            losses++;
            console.log("we lost");
            setUp();
        }

        else if (userScore === randomNum) {
            wins++;
            console.log("we won");
            setUp();
        }



    }

    setUp();

    $("#reality-stone").on("click", function () {
        userScore = userScore + realityStone;
        $("#user-score").html("Score: " + userScore);
        ohDidIWin();

    });

    $("#power-stone").on("click", function () {
        userScore = userScore + spaceStone;
        $("#user-score").html("Score: " + userScore);
        ohDidIWin();

    });

    $("#soul-stone").on("click", function () {
        userScore = userScore + soulStone;
        $("#user-score").html("Score: " + userScore);
        ohDidIWin();

    });

    $("#time-stone").on("click", function () {
        userScore = userScore + timeStone;
        $("#user-score").html("Score: " + userScore);
        ohDidIWin();

    });


});