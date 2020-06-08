const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false },
      { text: '44', correct: false },
      { text: '8', correct: false },
    ],
  },
  {
    question: 'What is 8 + 2?',
    answers: [
      { text: '7', correct: false },
      { text: '22', correct: false },
      { text: '10', correct: true },
      { text: '66', correct: false },
    ],
  },
  {
    question: 'What is 1 + 567?',
    answers: [
      { text: '1567', correct: false },
      { text: '567.1', correct: false },
      { text: '89', correct: false },
      { text: '568', correct: true },
    ],
  },
  {
    question: 'What is 16 + 16?',
    answers: [
      { text: '1', correct: false },
      { text: '32', correct: true },
      { text: '23', correct: false },
      { text: '22', correct: false },
    ],
  },
  {
    question: 'What is 4 + 90?',
    answers: [
      { text: '94', correct: true },
      { text: '93', correct: false },
      { text: '490', correct: false },
      { text: '-94', correct: false },
    ],
  },

];
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const continueButton = document.getElementById('continue-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions; let
  currentQuestionIndex;

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const { correct } = selectedButton.dataset;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('invisible');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('invisible');
    continueButton.classList.remove('invisible');
  }
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('invisible');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}
function showQuestion(question) {
  questionElement.innerHTML = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('button');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function startGame() {
  // console.log('Game started');
  startButton.classList.add('invisible');
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('invisible');
  setNextQuestion();
}


startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex += 1;
  setNextQuestion();
});
