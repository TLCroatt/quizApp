var startButton = document.getElementById("start-btn");
var answerButton = document.querySelector(".answer-buttons");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.querySelector(".answer-buttons");
var currentQuestionIndex = 0;

let randomQuestion

questionContainer.classList.add("hide");

let questions = [
    {
        question: "What is a boolean?",
        choiceA: "A data type that can only have one of two values",
        choiceB: "Zero or more characters written inside quotes",
        choiceC: "A special variable that can hold mutiple values",
        choiceD: "A tired ghost",
        correct: "A"   
    },

];

startButton.addEventListener("click", startQuiz);
answerButton.addEventListener("click", selectAnswer);


function startQuiz() {
    console.log("Started")
    startButton.classList.add("hide");
    //randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide");
    showQuestion();
    function startTimer() {}
}

let lastQuestionIndex = questions.length - 1;

function showQuestion() {
    var q = questions[currentQuestionIndex];
    question.innerText = q.question;
    choiceA.innerText = q.choiceA;
    choiceB.innerText = q.choiceB;
    choiceC.innerText = q.choiceC;
    choiceD.innerText = q.choiceD;
}

function selectAnswer(event) {
    //makes sure that nothing registers unless it's a button click
    if (event.target.id === 0 || event.target.id) {
        console.log(event.target.id);
    }

    var choiceId = event.target.id;
    var choiceIndex = questions.choices;
    var questionsObj = question[choiceIndex];

    if (choiceId === questionsObj.correct) {
        //correct
    } else {
        //wrong - dock time/score
    }
    currentQuestionIndex ++
    
    //call showQuestion func

    
    //grab id from the event and compare w/ the answer index
//if/else for correct or wrong answer
//update the currentQuestionIndex to next question
//game ends if time is up or reach last question
}

