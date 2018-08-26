//generate random number from 30 - 100 = gemNum
//generate random from 1 - 10 = crystalNum 1,2,3,4
//On.Click add the numbers from crystalNum = userScore
//If userScore = gemNum , then ++wins
//If userScore > gemNum, then ++losses
//After a win or a loss, reset the game. 


$(document).ready(function () {
    var random = Math.floor(Math.random() * 101 + 19);
    console.log(random);
    //gemNum needs to be between 19 and 120
    $('#gemNum').text(random);
    //appending random number to id=gemNum

    var num1 = Math.floor(Math.random() * 11 + 1);
    console.log(num1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    console.log(num2);
    var num3 = Math.floor(Math.random() * 11 + 1);
    console.log(num3);
    var num4 = Math.floor(Math.random() * 11 + 1);
    console.log(num4);
    //setting random numbers for each crystal
    //random number between 1 - 12
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    //wins and losses variables
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    //game time
    //Anything after this line does not work for some reason, I am not sure. The console.log are not functioning. Most problematic, the crystal buttons are unresponsive. 

    function game() {
        var random = Math.floor(Math.random() * 101 + 19);
        console.log(random);

        $('#crystal1').on('click', function () {
            userScore = userScore + num1;
            console.log("New userScore=" + userScore);
            $('#finalTotal').text(userScore);
            //determines a win or loss
            if (userScore === random) {
                winner();
            }
            else if (userScore > random) {
                loser();
            }
        })

        $('#crystal2').on('click', function () {
            userScore = userScore + num2;
            console.log("New userScore=" + userScore);
            $('#finalTotal').text(userScore);

            if (userScore === random) {
                winner();
            }
            else if (userScore > random) {
                loser();
            }
        })

        $('#crystal3').on('click', function () {
            userScore = userScore + num3;
            console.log("New userScore=" + userScore);
            $('#finalTotal').text(userScore);

            if (userScore === random) {
                winner();
            }
            else if (userScore > random) {
                loser();
            }
        })

        $('#crystal4').on('click', function () {
            userScore = userScore + num4;
            console.log("New userScore=" + userScore);
            $('#finalTotal').text(userScore);

            if (userScore === random) {
                winner();
            }
            else if (userScore > random) {
                loser();
            }
        })
                    //wins and losses
                    function winner() {
                        alert("You won!");
                        wins++;
                        $('#numberWins').text(wins);
                        reset();
                    }
                    function loser() {
                        alert("You lose!");
                        losses++;
                        $('#numberLosses').text(losses);
                        reset();
                    }
                }

        function reset() {
            userScore = 0;
            game();
        }
})