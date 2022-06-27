const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {}

function selectAnswer() {}

const questions = [
  {
    question: "What is 2 + 2",
    answers: [
      { text: "4", correct: true },
      { text: "2", correct: false },
    ],
  },
];
