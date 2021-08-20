var readlineSync = require("readline-sync");

var score = 0;

const queBank = [
  {
    question: "What is name of Akshay Kumar character in the film?\na. Baburao\nb. Raju\nc. Shyam\n",
    answer: "b"
  }, {
    question:
    "Who's dialogue is Paisa Hi Paisa Hoga?\na. Shyam\nb. Baburao\nc. Raju\n",
    answer: "c"
  }, {
    question:
    "Fill the blank space: Ye ____ ka style hai\na. Shyam\nb. Baburao\nc. Raju\n",
    answer: "b"
  }, 
]

function welcome() {
   var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " to Harshalini's quiz on Phir Hera Pheri");
}

let i = 0;

function question() {

    for (var i=0; i<queBank.length; i++) {
    var currentQuestion = queBank[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toLowerCase() === answer.toLowerCase())
   {
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }
  console.log("current score: ", score);
  console.log("-------------");
}
function showScores() {
  console.log("YAY! You SCORED: " + score);
}
welcome();
question();
play();
showScores();