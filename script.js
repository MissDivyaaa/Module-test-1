const RulesBtn = document.querySelector('.rules-btn');
const CloseBtn = document.querySelector('.close-btn');
const ModalRules = document.querySelector('.modal');
const NEXTbtn = document.querySelector('.Next-btn')

// game logic

const CHOICES = [
    {
        name: "PAPER",
        beats: "ROCK",
    },
    {
        name: "SCISSORS",
        beats: "PAPER",
    },
    {
        name: "ROCK",
        beats: "SCISSORS",
    },
];


const choiceButtons = document.querySelectorAll(".choice-button");
const gameDiv = document.querySelector(".playing-field");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results_result");

const resultWinner = document.querySelector(".results_winner");
const resultText = document.querySelector(".results_text");

const playAgainBtn = document.querySelector(".play-again");
const replayBtn = document.querySelector(".replay");

const scoreNumber = document.getElementById("Your-score");
const CompScore = document.getElementById('Computer-score')


let Userscore = JSON.parse(localStorage.getItem("Userscore")) || 0;
let Pcscore = JSON.parse(localStorage.getItem("Pcscore")) || 0;


choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const choiceName = button.dataset.choice;
        const choice = CHOICES.find((choice) => choice.name === choiceName);
        choose(choice);
    });
});

function choose(choice) {
    const aichoice = aiChoose();
    displayResults([choice, aichoice]);
    displayWinner([choice, aichoice]);
}

function aiChoose() {
    const rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
}

function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
          <div class="choice ${results[idx].name}">
            <img src="images/icon-${results[idx].name}.png" alt="${results[idx].name}" />
          </div>
        `;
        }, idx * 10);
    });

    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
}

function displayWinner(results) {
    setTimeout(() => {
        const userWins = isWinner(results);
        const aiWins = isWinner(results.reverse());

        if (userWins) {
            resultText.innerText = "YOU WIN";
            resultDivs[0].classList.toggle("winner");
            replayBtn.style.display = "none";
            playAgainBtn.style.display = "block";
            NEXTbtn.style.display = "block"
            keepScore(1);
        } else if (aiWins) {
            resultText.innerText = "YOU LOST AGAINST PC";
            resultDivs[1].classList.toggle("winner");
            replayBtn.style.display = "none";
            playAgainBtn.style.display = "block";
            NEXTbtn.style.display = "none"
            storeScore(1);
        } else {
            resultText.innerText = "TIE UP";
            replayBtn.style.display = "block";
            playAgainBtn.style.display = "none";
            NEXTbtn.style.display = "none"
        }

        localStorage.setItem("Userscore", JSON.stringify(Userscore));
        localStorage.setItem("Pcscore", JSON.stringify(Pcscore));

        resultWinner.classList.toggle("hidden");
        resultsDiv.classList.toggle("show-winner");
    }, 1);
}




function isWinner(results) {
    return results[0].beats === results[1].name;
}

function keepScore(point) {
    Userscore += point;
    scoreNumber.innerText = Userscore;
}

function storeScore(point) {
    Pcscore += point;
    CompScore.innerText = Pcscore;
}


// Play Again
playAgainBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");

    resultDivs.forEach((resultDiv) => {
        resultDiv.innerHTML = "";
        resultDiv.classList.remove("winner");
    });

    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
});


replayBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");

    resultDivs.forEach((resultDiv) => {
        resultDiv.innerHTML = "";
        resultDiv.classList.remove("winner");
    });

    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
});


// close open button

RulesBtn.addEventListener('click', () => {
    ModalRules.classList.toggle('show-modal')
})

CloseBtn.addEventListener('click', () => {
    ModalRules.classList.toggle('show-modal')
})