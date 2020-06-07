// question bank
const questions = [
  {
    question: 'Which of the following values is bla bla bla?',
    answers: {
      a: 'ipsum',
      b: 'lorem',
      c: 'correct answer',

    },
    correctAnswer: 'c',
  },
  {
    question: 'Which of the following values is bla bla bla?',
    answers: {
      a: 'correct answer',
      b: 'lorem',
      c: 'ipsum',
    },
    correctAnswer: 'a',
  },
  {
    question: 'Which of the following values is bla bla bla?',
    answers: {
      a: 'correct answer',
      b: 'lorem',
      c: 'ipsum',
    },
    correctAnswer: 'a',
  },
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


generateQuiz(questions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {
  function showQuestions(questions, quizContainer) {
    // storage
    const output = [];
    let answers;

    // question appearance
    for (let i = 0; i < questions.length; i++) {
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for (letter in questions[i].answers) {
        // answer buttons
        answers.push(
          // '<label>'
          // + '<input type="button" name="question' + i + '" value="' + letter + '">'
          // + letter + ': '
          // + questions[i].answers[letter]
          // + '</label>'
          // );
          `${'<label class="btn btn-secondary answer">'
                    + '<input type="radio" autocomplete="off" name="question'}${i}" value="${letter}">${
            letter}: ${
            questions[i].answers[letter]
          }</label>`,
        );
      }

      // question and anwers
      output.push(
        `<div class="question">${questions[i].question}</div>`
                + `<div class="answers">${answers.join('')}</div>`,
      );
    }

    // combine output
    quizContainer.innerHTML = output.join('');
  }


  function showResults(questions, quizContainer, resultsContainer) {
    // answer container
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let userAnswer = '';
    let numCorrect = 0;

    // for each question...
    for (let i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (answerContainers[i].querySelector(`input[name=question${i}]:checked`) || {}).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
    const total = numCorrect + 0;
  }


  // show questions right away
  showQuestions(questions, quizContainer);


  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}
