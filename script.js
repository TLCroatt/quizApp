var startButton = document.getElementById("start-btn");
var answerButton = document.getElementById("answer-btns");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");

let randomQuestion, currentQuestionIndex

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Started")
    startButton.classList.add("hide");
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hide");
    function startTimer() {}
}

function setNextQuestion() {
    showQuestion(randomQuestion[currentQuestionIndex]);
}   

function showQuestion() {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
})

answerButton.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#9370DB";
})

function selectAnswer() {


}

var questions = [
    {
        question: "What is a boolean?",
        answers: [
            { text: "A data type that can only have one of two values", correct: true},
            { text: "Zero or more characters written inside quotes", correct: false},
            { text: "A special variable that can hold mutiple values", correct: false},
            { text: "A tired ghost", correct: false}
        ]
            
    }
]