var score = {
    wins: 0,    //User wins
    losses: 0,  //User losses
    ties: 0     //User ties
}
var compChoice
var userChoice
var choiceOptions = ["R", "P", "S"] //rock, paper, scissor. array for the choices that you pick from

var gate = true;
while (gate) {
    var gate2 = true;
    while (gate2) {
        // userinput while loop used to make sure input is valid
        userChoice = prompt("R, P, S").toUpperCase();
        if (choiceOptions.includes(userChoice)) {
            gate2 = false;
        } else {
            alert("That is not a valid option. Try again");
        }
    }

    // computer randomize choice
    compChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    alert("Computer picks " + compChoice);

    // display computer choice // find winner // add to score
    if (compChoice === userChoice) {
        // tie
        score.ties++;
        alert("Nobody wins lol");
    } else if ((compChoice === "R" && userChoice === "S") || (compChoice === "P" && userChoice === "R") || (compChoice === "S" && userChoice === "P")){
        // user loses
        score.losses++;
        alert("You're a loser haha");
    } else {
        // user wins
        score.wins++;
        alert("You win :)");
    }

    // show the current score
    alert("Wins: " + score.wins + " Losses: " + score.losses + " Ties: " + score.ties);

    // give option to repeat
    gate = confirm("Play again?");
}