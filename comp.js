<script type="text/javascript">
        // Make the variables
        var tie = 0;
        var win = 0;
        var loss = 0;
        // Create array of variables for computer choice
        var choice =["r","p","s"]
        // loop for 10 games
        for (var games = 0; games < 10; games++) {
            // gernate random choice for computer
            var compChoice = choice[Math.floor(Math.random()*choice.length)];
            console.log(compChoice);
            // Create prompt for user to input choice of variable (r, p, s)
            var userChoice = prompt("Choose r, p, or s");
            var userChoiceLower = userChoice.toLowerCase();
            // check if user put in an accepted value
                if (userChoiceLower == "r" ||userChoiceLower == "p" ||userChoiceLower == "s")
                {
                    alert("the computer chose " + compChoice);
                
            // compare computer choices to user choices
                if (compChoice === userChoiceLower)
                    {
                        alert("You tied");
                        tie = tie+1;
                    }
                else if (compChoice === "p" && userChoiceLower === "r" )
                    {
                        alert("You lose");
                        loss = loss+1;
                    }
                else if (compChoice === 'r' && userChoiceLower === "s")
                    {
                        alert("You lose");
                        loss = loss+1;
                    }
                else if (compChoice === "p" && userChoiceLower === 's' )
                    {
                        alert("You win");
                        win = win +1;
                    }
                else if (compChoice === 'r' && userChoiceLower === "p")
                    {
                        alert("You win");
                        win = win +1;
                    }
                else if (compChoice === 's' && userChoiceLower === "p")
                    {
                        alert("You lose");
                        loss = loss +1;
                    }
                else if (compChoice === 's' && userChoiceLower === "r")
                    {
                        alert("You win");
                        win = win +1;
                    }
            
        }
    }
        // display total number of wins, losses, and ties
        alert("You've won " + win + " times \n You've lost " + loss + " times \n You've tied " + tie + " times" )
    </script>