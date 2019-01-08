var userScore = 0;
var comScore = 0;
const userScore_span = document.getElementById("user-score");
const comScore_span = document.getElementById("com-score");
const scoreBorard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

main();

function main() {

    // Add Event Listener (click) for each choice
    rock_div.addEventListener('click', () => {
        game("r");
    });

    paper_div.addEventListener('click', () => {
        game("p");
    });

    scissors_div.addEventListener('click', () => {
        game("s");
    });
}

function game(userChoice) {
    let comChoice = getComputerChoice();
    // console.log(comChoice);
    switch (userChoice + comChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, comChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, comChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, comChoice);
            break;
    }
}

function convertToWord(letter) {
    switch (letter) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
    }
}

function win(user, com) {
    userScore++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = `Your ${convertToWord(user)} beats ${convertToWord(com)}. You WIN!`;
    document.getElementById(user).classList.add("green-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("green-glow");
    }, 500);
}

function lose(user, com) {
    comScore++;
    userScore_span.innerHTML = userScore;
    comScore_span.innerHTML = comScore;
    result_div.innerHTML = `Your ${convertToWord(user)} loses to ${convertToWord(com)}. You LOST!`;
    document.getElementById(user).classList.add("red-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("red-glow");
    }, 500);

}

function draw(user, com) {
    result_div.innerHTML = ` ${convertToWord(user)} VS ${convertToWord(com)}. DRAW!`;
    document.getElementById(user).classList.add("gray-glow");
    setTimeout(() => {
        document.getElementById(user).classList.remove("gray-glow");
    }, 500);
}

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    let index = Math.floor(Math.random() * 3);
    return choices[index];
}


