var startButton = document.getElementById("start-btn");
var answerButton = document.querySelector(".answer-buttons");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.querySelector(".answer-buttons");
var choiceAElement = document.getElementById("A");
var choiceBElement = document.getElementById("B");
var choiceCElement = document.getElementById("C");
var choiceDElement = document.getElementById("D");
var currentQuestionIndex = 0;

let score = 0;
//let randomQuestion


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


function startQuiz() {
    console.log("Started")
    startButton.classList.add("hide");
    //randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.style.display = "block";
    showQuestion();
    function startTimer() {}
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
    if (answer == questions[currentQuestionIndex].correct) {
        //score ++
        alert("Correct!")
    } else {
        //score -1
        alert("Wrong!")
        //wrong - dock time/score
    }
    if (currentQuestionIndex < lastQuestionIndex) {
        count = 0;
        currentQuestionIndex ++;
        showQuestion()
    } else {
        endGame()
    }
}

function endGame() {

}