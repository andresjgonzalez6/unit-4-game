//generate random number from 30 - 100 = gemNum
//generate random from 1 - 10 = crystalNum 1,2,3,4
//On.Click add the numbers from crystalNum = userScore
//If userScore = gemNum , then ++wins
//If userScore > gemNum, then ++losses
//After a win or a loss, reset the game. 


$(document).ready(function(){
    var random=Math.floor(Math.random()*101+15);
    console.log(random);

    $('#gemNum').text(random);
    //appending random number to the gemNum id in html doc.

    var num1= Math.floor(Math.random()*11+1);
    var num2= Math.floor(Math.random()*11+1);
    var num3= Math.floor(Math.random()*11+1);
    var num4= Math.floor(Math.random()*11+1);
    //setting random numbers for each crystal
    //random number between 1 - 12
    var userScore=0;
    var wins=0;
    var losses=0;
//wins and losses variables
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);
    //game reset

    function reset(){
        random=Math.floor(Math.random()*11+1);
        console.log(random);

        function reset(){
            num1=Math.floor(Math.random()*11+1);
            num2=Math.floor(Math.random()*11+1);
            num3=Math.floor(Math.random()*11+1);
            num4=Math.floor(Math.random()*11+1);
            userScore= 0;
            $('#finalTotal').text(userScore);

            //increases win count

            function winner(){
                alert("You won!");
                wins++;
                $('#numberWins').text(wins);
                reset();
            }
            function loser(){
                alert ("You lose!");
                losses++;
                $('#numberLosses').text(losses);
                reset();
            }

            $('#crystal1').on('click', function(){
                userScore = userScore + num1;
                console.log("New userScore=" + userScore);
                $('#finalTotal').text(userScore);
                //determines a win or loss
                if(userScore === random){
                    winner();
                }
                else if (userScore > random) {
                    loser();
                }
            })

            $('#crystal2').on('click', function(){
                userScore = userScore + num2;
                console.log("New userScore=" + userScore);
                $('#finalTotal').text(userScore);
                
                if(userScore === random){
                    winner();
                }
                else if (userScore > random) {
                    loser();
                }
            })

            $('#crystal3').on('click', function(){
                userScore = userScore + num3;
                console.log("New userScore=" + userScore);
                $('#finalTotal').text(userScore);
                
                if(userScore === random){
                    winner();
                }
                else if (userScore > random) {
                    loser();
                }
            })

            $('#crystal4').on('click', function(){
                userScore = userScore + num4;
                console.log("New userScore=" + userScore);
                $('#finalTotal').text(userScore);
                
                if(userScore === random){
                    winner();
                }
                else if (userScore > random) {
                    loser();
                }
            })
        }  
    }


});