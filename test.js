let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["stone","paper","scissors"];
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
};
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "game was draw, Play Again";
};


const showWinner = (userWin) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You WIN");
        msg.innerText = "You WIN..hurrayyy!!!!";
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You LOSE");
        msg.innerText = "You LOSE ...";
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);

    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            //scissors,paper
            userWin = compChoice === "paper" ? false: true;
        }else if(userChoice === "paper"){
            //stone,scissors
            userWin = compChoice === "scissors" ? false: true;
        } else{
            //stone,paper
            userWin = compChoice === "stone"? false :true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked" , userChoice);
        playGame(userChoice);
    });
});