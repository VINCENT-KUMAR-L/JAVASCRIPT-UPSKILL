let secretNumber = Math.trunc((Math.random()*20)) +1;
let highScore
//initial refresh of the document
function initialLoad(isTryClick = false) {
secretNumber = Math.trunc((Math.random()*20))+1;
displayScore(20, false);
console.log(secretNumber);
document.body.style.backgroundColor = 'rgb(107, 105, 103)';
if (!isTryClick) {
     highScore =0;
}
}
console.log(secretNumber);
//function to display the textContent
function displayTextContent(message) {
    document.querySelector('.correctNumber').textContent = message;
}
//function to display score
function displayScore(scoreValue, scoreNotZero=true) {
    if(scoreNotZero) {
    document.querySelector('.score').value = scoreValue - 1;
    document.querySelector('.score').textContent = "Score: "+(scoreValue-1);
    }
    else {
        document.querySelector('.score').value = scoreValue;
        document.querySelector('.score').textContent = "Score: "+(scoreValue);
    }
}
// while giving the click
function checkGuessNumber() {
    let score=document.querySelector('.score').value;
    let guessNumber = document.querySelector('.guess').value;
    //if guess is correct
    if (guessNumber == secretNumber){
    document.querySelector('.secret').textContent = secretNumber;
    displayTextContent("Correct Number: "+secretNumber);
    document.body.style.backgroundColor = 'green';
    if(highScore<score) {
        highScore = score;
        document.querySelector('.highScore').textContent ="HighScore: " +highScore;
        displayScore(score, false);
    }
    }
    // if guess is wrong
    else {
        displayTextContent(guessNumber < secretNumber ? "Too Low": "Too High");
        document.body.style.backgroundColor = 'red';
        if(score>=1){
            displayScore(score);
        }
        else {
            displayScore(score,false);
            displayTextContent("Game Over")
        }
    }
}
// while loading the document
document.addEventListener('DOMContentLoaded', function() {
    initialLoad();
    document.querySelector('.try').addEventListener('click',function() {
        initialLoad(true);
    });
 });
//while clicking the agian button
 