var questions = [{
    "question": "What is Ash's last name in the Pokemon anime series?",
    "option1": "Catch'Em",
    "option2": "Smith",
    "option3": "Ketchum",
    "option4": "Ketchup",
    "answer": "3"
}, {
    "question": "What was Ash's first Pokemon?",
    "option1": "Pikachu",
    "option2": "Caterpie",
    "option3": "Squirtle",
    "option4": "Pidgey",
    "answer": "1"
}, {
    "question": "What year did the first Pokemon movie come out?",
    "option1": "1999",
    "option2": "2000",
    "option3": "1996",
    "option4": "1998",
    "answer": "4"
}, {
    "question": "What Pokedex number is Pikachu?",
    "option1": "24",
    "option2": "25",
    "option3": "26",
    "option4": "007",
    "answer": "2"
}, {
    "question": "Charizard is what type of Pokemon?",
    "option1": "Water",
    "option2": "Char",
    "option3": "Fire",
    "option4": "Dragon",
    "answer": "3"
}, {
    "question": "How many original Pokemon were there?",
    "option1": "151",
    "option2": "150",
    "option3": "149",
    "option4": "350",
    "answer": "1"
}, {
    "question": "Who is #1 in the Pokedex?",
    "option1": "Charmander",
    "option2": "Pikachu",
    "option3": "Squirtle",
    "option4": "Bulbasaur",
    "answer": "4"
}, {
    "question": "The English motto of Pokemon is?",
    "option1": "Catch'Em",
    "option2": "Gotta Catch 'Em All!",
    "option3": "Do Or Do Not, There Is No Try",
    "option4": "I Done Caught 'Em",
    "answer": "2"
}];
var startBtn = document.getElementById('startButton')
startBtn.addEventListener('click', startQuiz);
function startQuiz() {
    countdown();
    loadQuestion(currentQuestion);
}
var timer = document.querySelector('.timerText')
// timeLeft is set to 60 so that the timer will start with 60 seconds
timeLeft = 60;
// countdown function sets the timer and has it decreasing every second
function countdown () {
   timeInterval = setInterval(function() {
    if (timeLeft > 0) {
      timer.textContent = timeLeft;
      timeLeft--;
    }else if (timeLeft === 0){
      clearInterval(timeInterval);
      timer.textContent = "";
      container.style.display = 'none'; //hides container when questions are done
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score; 
    }
  }, 600)
}

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;
// var questionIndex=0;
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
// loadQuestion();
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
    timeLeft -= 5; // Takes 5 seconds off the timer if answer is incorrect
    currentQuestion++;
    if(currentQuestion == totalQuestions -1){
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


// loadQuestion(currentQuestion); //manually loads first question will add start button later
