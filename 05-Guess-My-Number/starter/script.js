'use strict';
console.log(document.querySelector('.message').textContent);
let correctNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highScore = 0;
console.log(correctNumber);

let numberEl = document.querySelector('.number');
let scoreEl = document.querySelector('.score')
function resetGame() {
    console.log("Resetting the ");
    score = 20;
    scoreEl.textContent = score;
    numberEl.textContent = '?';
    numberEl.style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#000';

    correctNumber = Math.trunc(Math.random()*20) + 1;
    sendMessage("Start guessing!");
}
function sendMessage(message) {
    document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', resetGame);
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(`Guess is ${guess} and correct is ${correctNumber}`);
    if (score > 0) {
        if (!guess) {
            sendMessage("No guess made");
        } else if (guess === correctNumber) {
            sendMessage("Correct number!");
            //setting the color to green
            document.querySelector('body').style.backgroundColor = '#60b347';
            highScore = Math.max(highScore,score);
            //widening the number and updating to the correct when you win
            numberEl.style.width = '30rem';
            numberEl.textContent = correctNumber;
            document.querySelector('.highscore').textContent = highScore;
        } else {

                sendMessage(guess > correctNumber ? "too high" : "too low");
                score--;
                scoreEl.textContent = score;
            }
            
    } else {
        sendMessage('You lost the game');
    }   
});
