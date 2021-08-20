var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

const queBank = [
  {
    question: "What is name of Akshay Kumar's character in the film?\na. Baburao\nb. Raju\nc. Shyam\n",
    answer: "b"
  }, {
    question:
    "Who's dialogue is Paisa Hi Paisa Hoga?\na. Shyam\nb. Baburao\nc. Raju\n",
    answer: "c"
  }, {
    question:
    "Fill the blank space: Ye ____ ka style hai\na. Shyam\nb. Baburao\nc. Raju\n",
    answer: "b"
  }, {
    question: 
    "Complete the dialogue: Utha le re baba, utha le... Mereko nahi re, _____ ko utha le.\na. is shyam\nb. in dono\nc. is raju\n",
    answer: "b"
  }, {
    question:
    "What is Bipasha Basu's character name in movie?\na. Anuradha\nb. Radha\nc. Anjali\n",
    answer: "a"
  }, {
    question:
    "How much rupees Kachra Seth offer for shoes that Raju brings?\na. 200 Rs.\nb. 100 Rs.\nc. 150 Rs.\n",
    answer: "c"
  } 
]

function welcome() {
   var userName = readlineSync.question("What's your name? ");

  console.log(chalk.bgYellow("Welcome "+ userName + " to Harshalini's quiz on Phir Hera Pheri"));
  console.log("Below is the quiz. Choose the answers from a, b, c");
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
    console.log(chalk.green("right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.red("wrong!"));
   
  }
  console.log("current score: ", score);
  console.log("-------------");
}
function showScores() {
  console.log(chalk.bgBlue("YAY! You SCORED: " + score + " "));
}
welcome();
question();
showScores();