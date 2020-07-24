var startButton = document.getElementById("start-btn");
var answerButton = document.querySelector(".answer-buttons");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.querySelector(".answer-buttons");
var choiceAElement = document.getElementById("A");
var choiceBElement = document.getElementById("B");
var choiceCElement = document.getElementById("C");
var choiceDElement = document.getElementById("D");
var playerInput = document.querySelector(".input");
var finalScore = document.getElementById("finalScore");
var currentQuestionIndex = 0;
var startingTime = 90;
var timerDisplay = document.querySelector(".timerDisplay");
var timer;

playerInput.style.display = "none";

let score = 0;

let questions = [
    {
        question: "What is a boolean?",
        choiceA: "A data type that can only have one of two values",
        choiceB: "Zero or more characters written inside quotes",
        choiceC: "A special variable that can hold mutiple values",
        choiceD: "A tired ghost",
        correct: "A"   
    },

    {
        question: "A JavaScript file has a file extension of",
        choiceA: ".html",
        choiceB: ".script",
        choiceC: ".js",
        choiceD: ".javascript",
        correct: "C",
    },

    {
        question: "A function associated with an object is called",
        choiceA: "function",
        choiceB: "parameter",
        choiceC: "array",
        choiceD: "method",
        correct: "D",
    },

    {
        question: "Which function is used to parse a string into an integer?",
        choiceA: "Int.Parse",
        choiceB: "Parse.Int",
        choiceC: "function(parse).int",
        choiceD: "parse(int)",
        correct: "A"
    }

];

startButton.addEventListener("click", startQuiz);
answerButton.addEventListener("click", selectAnswer);
    //console.log


function startQuiz() {
    console.log("Started")
    startButton.classList.add("hide");
    currentQuestionIndex = 0;
    questionContainer.style.display = "block";
    showQuestion();
    function startTimer() {
        startingTime = 60;
  
        timer = setInterval(function() {
          console.log(startingTime);
          timerDisplay.textContent = startingTime;
          startingTime--;
            if (startingTime < 0) {
                clearInterval(timer);
            }
        },1000);
      
    
    }
    startTimer();
}

let lastQuestionIndex = questions.length - 1;

function showQuestion() {
    var q = questions[currentQuestionIndex];
    question.innerText = q.question;
    choiceAElement.innerText = q.choiceA;
    choiceBElement.innerText = q.choiceB;
    choiceCElement.innerText = q.choiceC;
    choiceDElement.innerText = q.choiceD;
}

function selectAnswer(answer) {
    //makes sure that nothing registers unless it's a button click
    if (event.target.id === 0 || event.target.id) {
        console.log(event.target.id);
    }
    if (answer.target.id == questions[currentQuestionIndex].correct) {
        score ++
        alert("Correct!")
    } else {
        score -1
        alert("Wrong!")
        //dock time/score
        //timer = timer - 5
    }
    if (currentQuestionIndex < lastQuestionIndex) {
        count = 0;
        currentQuestionIndex ++;
        showQuestion()
    } else {
        endGame()
    }
}

function stopTimer() {
    clearInterval(timer);
}  

const form = document.getElementById("nameInput");
const ul = document.getElementById("highScores");
const save = document.getElementById("saveBtn");
const input = document.getElementById("name");

function liMaker(text) {
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
}

save.addEventListener("click", function(e) {
    e.preventDefault();
    liMaker(input.value);
    input.value = "";
})

function endGame() {
    stopTimer();
    questionContainer.style.display = "none";
    timerDisplay.style.display = "none";
    playerInput.style.display = "block";
    //render score
    finalScore.innerHTML = "Your Score: " + score;
    //local storage to record scores
    liMaker();
    //create empty array to hold localStorage
    var highScoresArray = []
    localStorage.setItem("highScores", JSON.stringify(highScoresArray));
    const data = JSON.parse(localStorage.getItem("highScores"));
    save.addEventListener("click", function(e) {
        e.preventDefault()
        highScoresArray.push(input.value);
        localStorage.setItem("highScore", JSON.stringify("highScoresArray"));
        data.forEach((name) => {
            liMaker(name);
        });

    })
    
    
}