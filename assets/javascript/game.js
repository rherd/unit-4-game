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
        timeStone = Math.floor(Math.random()*12) + 1;\

        userScore = 0;

        $("#div").html("Wins: " + wins);
        $("#div").html("Losses :" + losses);
        $("#div").html(randomNum);
        $("#div").html(userScore);
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

    $("div").on("click", function () {
        userScore = userScore + realityStone;
        ohDidIWin();

    });

    $("div").on("click", function () {
        userScore = userScore + spaceStone;
        ohDidIWin();

    });

    $("div").on("click", function () {
        userScore = userScore + soulStone;
        ohDidIWin();

    });

    $("div").on("click", function () {
        userScore = userScore + timeStone;
        ohDidIWin();

    });


});