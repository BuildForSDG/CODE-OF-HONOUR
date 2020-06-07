//question bank
var questions = [
    {
        question: "Which of the following values is bla bla bla?",
        answers: {
            a: 'ipsum',
            b: 'lorem',
            c: 'correct answer'

        },
        correctAnswer: 'c'
    },
    {
        question: "Which of the following values is bla bla bla?",
        answers: {
            a: 'correct answer',
            b: 'lorem',
            c: 'ipsum'
        },
        correctAnswer: 'a'
    },
    {
        question: "Which of the following values is bla bla bla?",
        answers: {
            a: 'correct answer',
            b: 'lorem',
            c: 'ipsum'
        },
        correctAnswer: 'a'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


generateQuiz(questions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // storage
        var output = [];
        var answers;

        // question appearance
        for (var i = 0; i < questions.length; i++) {

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
                    '<label class="btn btn-secondary answer">'
                    + '<input type="radio" autocomplete="off" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // question and anwers
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // combine output
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        // answer container
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect++;
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        var total = numCorrect + 0;

    }


    // show questions right away
    showQuestions(questions, quizContainer);


    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }
}
