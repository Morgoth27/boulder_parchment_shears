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
    // userinput
    userChoice = prompt("R, P, S").toUpperCase();
    console.log(typeof userChoice);
    console.log(userChoice);

    // computer randomize choice
    compChoice = choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
    alert(compChoice);
    console.log(typeof compChoice);
    console.log(compChoice);

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