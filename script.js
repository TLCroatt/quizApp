var startButton = document.getElementById("start-btn");
var answerButton = document.querySelector(".answer-buttons");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.querySelector(".answer-buttons");
var currentQuestionIndex = 0;
let randomQuestion


startButton.addEventListener("click", startQuiz);
answerButton.addEventListener("click", selectAnswer);

questionContainer.classList.add("hide");

function startQuiz() {
    console.log("Started")
    startButton.classList.add("hide");
    //randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide");
    showQuestion();
    function startTimer() {}
}


function showQuestion() {
    questionElement.innerText = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].choices.forEach((choices, choiceIndex) => {
        var choiceBtn = document.getElementById(choiceIndex);
        choiceBtn.innerText = choices.text;
        choiceBtn.classList.add("choiceBtn");
        if (choices.correct) {
            choiceBtn.dataset.correct = choices.correct;
        }
        
    })
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

var questions = [
    {
        question: "What is a boolean?",
        choices: [
            { text: "A data type that can only have one of two values"},
            { text: "Zero or more characters written inside quotes"},
            { text: "A special variable that can hold mutiple values"},
            { text: "A tired ghost"}
        ], correct: 0
            
    }

];