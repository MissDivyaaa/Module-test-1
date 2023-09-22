const RulesBtn = document.querySelector('.rules-btn');
const CloseBtn = document.querySelector('.close-btn');
const ModalRules = document.querySelector('.modal');

RulesBtn.addEventListener('click', () => {
    ModalRules.classList.toggle('show-modal')
})

CloseBtn.addEventListener('click', () => {
    ModalRules.classList.toggle('show-modal')
});


// Play Again
// playAgainBtn.addEventListener("click", () => {
//     gameDiv.classList.toggle("hidden");
//     resultsDiv.classList.toggle("hidden");

//     resultDivs.forEach((resultDiv) => {
//         resultDiv.innerHTML = "";
//         resultDiv.classList.remove("winner");
//     });

//     resultText.innerText = "";
//     resultWinner.classList.toggle("hidden");
//     resultsDiv.classList.toggle("show-winner");
// });
