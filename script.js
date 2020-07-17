var startButton = document.getElementById("start-btn");
var answerButton = document.getElementById("answer-btns");
var questionContainer = document.getElementById("question-container");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("Started")
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    function startTimer() {}
}


answerButton.addEventListener("mouseover", function() {
    this.style.backgroundColor = "#9370DB";
})

function selectAnswer() {


}