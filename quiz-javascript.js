const questions = document.querySelectorAll('.question');
const nextButton = document.getElementById('nextButton');
let currentQuestionIndex = 0;
let score = 0;

function hideAllQuestions() {
    questions.forEach((question) => {
        question.style.display = 'none';
    });
}

function returnScore() {
    // Add score if the value picked by the user matches the correct answer
    const correctAnswers = ['A', 'A', 'B', 'B', 'C'];
    for (let i = 0; i < questions.length; i++) {
        const selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[i]) {
            score++;
        }
    }

    // Show the score
    if (score === 5) {
        alert("You got a perfect score of 5!");
        location.reload();
    } else {
        alert("Your score is: " + score);
        location.reload();
    }
}

nextButton.addEventListener('click', function () {
    questions[currentQuestionIndex].style.display = 'none';
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        questions[currentQuestionIndex].style.display = 'block';
    } else {
        returnScore(); // Show score when all questions are completed
    }
});

hideAllQuestions();
questions[currentQuestionIndex].style.display = 'block';