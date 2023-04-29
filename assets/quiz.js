var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 1;
    }
    selectedOption.checked = false;
    // timeLeft -= 5; // Takes 5 seconds off the timer if answer is incorrect
    currentQuestion++;
    if(currentQuestion = totalQuestions -1){
        nextButton.textContent = "Finish"; //Changes next button to "finish" when on the last question
    }
    if(currentQuestion == totalQuestions){
        container.style.display = 'none'; //hides container when questions are done
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score; //displays score at end of quiz
        return;
    }
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion); //manually loads first question will add start button later
