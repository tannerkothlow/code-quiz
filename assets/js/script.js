var highScoreButton = document.querySelector("#high-scores");
var timer = document.querySelector("#timer")

var questionHeader = document.querySelector("#question-header");
var quizDesc = document.querySelector("#quiz-desc");
var questionList = document.querySelector("#questions");

var startButton = document.querySelector("#start-button");
var goBackButton = document.querySelector("#go-back-button");
var clearButton = document.querySelector("#clear-hs-button");

var q1 = {
    header: "placeholder1",
    b1: "1. ph1 1",
    b2: "2. ph2 1",
    b3: "3. ph3 1",
    b4: "4. ph4 1",
    correct: "1. ph1 1"
};

var q2 = {
    header: "placeholder2",
    b1: "1. ph1 2",
    b2: "2. ph2 2",
    b3: "3. ph3 2",
    b4: "4. ph4 2",
    correct: "1. ph 1"
};

var q3 = {
    header: "placeholder",
    b1: "ph1",
    b2: "ph2",
    b3: "ph3",
    b4: "ph4",
    correct: 1
};

var q4 = {
    header: "placeholder",
    b1: "ph1",
    b2: "ph2",
    b3: "ph3",
    b4: "ph4",
    correct: 1
};

var allQuestions = [q1, q2, q3, q4];

var option1 = document.createElement("li");
option1.addEventListener("click", function() {
    nextQuesiton();
    //check if this was the right answer
    // if (option 1 == right answer) {right answer function, next question function}
    // else {wrong answer function, next question function}

});
var option2 = document.createElement("li");
var option3 = document.createElement("li");
var option4 = document.createElement("li");

//High Score Button event
highScoreButton.addEventListener("click", function() {
    displayHighscores();
});

//Start button event
startButton.addEventListener("click", function() {
    startTest();
});

//Go back button event, appears on Highscore page
goBackButton.addEventListener("click", function() {
    displayStart();
});

//Function that displays highscores
var displayHighscores = function() {
    index = 1;
    questionHeader.textContent = "Highscores";
    //Button Labeling
    startButton.textContent = "";

    goBackButton.textContent = "Go Back";

    clearButton.textContent = "Clear Highscores"

    quizDesc.setAttribute("style", "display: none");

    console.log(index);

};

//Function that displays the start page
var displayStart = function() {
    index = 0;
    questionHeader.textContent = "Coding Quiz Challenge";
    quizDesc.textContent = "Quiz description";

    //Button Labeling
    startButton.textContent = "Start!";
    
    goBackButton.textContent = "";

    clearButton.textContent = "";

    questionHeader.setAttribute("style", "text-align: center");
    quizDesc.setAttribute("style", "display: inline-block");
    questionList.setAttribute("style", "display: none");

    //Wipes OL and removes all LI
    while (questionList.firstChild) {
        questionList.removeChild(questionList.firstChild);
    }

    console.log(index);

};

//Function that starts the test
var questionNum = 0;
var startTest = function() {
    //Reset question num
    questionNum = 0;
    //Reformats all relevant text
    questionList.setAttribute("style", "display: inline");
    highScoreButton.setAttribute("style", "display: none");
    questionHeader.textContent = allQuestions[questionNum].header;
    questionHeader.setAttribute("style", "text-align: left");
    quizDesc.textContent = "";
    //Appends the child elements into the OL object
    option1.textContent = allQuestions[questionNum].b1;
    questionList.appendChild(option1);

    option2.textContent = allQuestions[questionNum].b2;
    questionList.appendChild(option2);

    option3.textContent = allQuestions[questionNum].b3;
    questionList.appendChild(option3);

    option4.textContent = allQuestions[questionNum].b4;
    questionList.appendChild(option4);

    //Hides the buttons
    startButton.textContent = "";
    
    goBackButton.textContent = "";

    clearButton.textContent = "";

    //Increments the counter
    questionNum++;

};

//Fills the questions based on which question
var nextQuesiton = function() {
    if (questionNum <= allQuestions.length) {

        questionHeader.textContent = allQuestions[questionNum].header;

        option1.textContent = allQuestions[questionNum].b1;

        option2.textContent = allQuestions[questionNum].b2;

        option3.textContent = allQuestions[questionNum].b3;

        option4.textContent = allQuestions[questionNum].b4;

        questionNum++;
    }
};





