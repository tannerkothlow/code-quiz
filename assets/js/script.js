var highScoreButton = document.querySelector("#high-scores");
var timer = document.querySelector("#timer")

var questionHeader = document.querySelector("#question-header");
var quizDesc = document.querySelector("#quiz-desc");
var questionList = document.querySelector("#questions");

var startButton = document.querySelector("#start-button");
var goBackButton = document.querySelector("#go-back-button");
var clearButton = document.querySelector("#clear-hs-button");
var initialsBox = document.querySelector("#hs-enter");
var initialSubmitBox = document.querySelector("#initialsSubmit");
initialsBox.setAttribute("style", "display: none");

var testResult = document.querySelector("#answerBox")
testResult.textContent = "";

var highScores = [];

var questionNum = 0;
timer.textContent += "60";

var q1 = {
    header: "placeholder1 1",
    b1: "1. ph1 1",
    b2: "2. ph2 1",
    b3: "3. ph3 1",
    b4: "4. ph4 1",
    correct: "1. ph1 1"
};

var q2 = {
    header: "placeholder2 2",
    b1: "1. ph1 2",
    b2: "2. ph2 2",
    b3: "3. ph3 2",
    b4: "4. ph4 2",
    correct: "2. ph2 2"
};

var q3 = {
    header: "placeholder3 3",
    b1: "ph1",
    b2: "ph2",
    b3: "ph3",
    b4: "ph4",
    correct: "ph3"
};

var q4 = {
    header: "placeholder4",
    b1: "ph1",
    b2: "ph2",
    b3: "ph3",
    b4: "ph4",
    correct: "ph4"
};

var q5 = {
    header: "placeholder5",
    b1: "ph1",
    b2: "ph2",
    b3: "ph3",
    b4: "ph4",
    correct: "ph1"
};

var allQuestions = [q1, q2, q3, q4, q5];

//Option 1 Functionality
var option1 = document.createElement("li");
option1.addEventListener("click", function() {
    if (option1.textContent == allQuestions[questionNum].correct) {
        right();
    } else {
        wrong();
    };
    nextQuesiton();
});

//Option 2 Functionality
var option2 = document.createElement("li");
option2.addEventListener("click", function() {
    if (option2.textContent == allQuestions[questionNum].correct) {
        right();
    } else {
        wrong();
    };
    nextQuesiton();
});

//Option 3 Functionality 
var option3 = document.createElement("li");
option3.addEventListener("click", function() {
    if (option3.textContent == allQuestions[questionNum].correct) {
        right();
    } else {
        wrong();
    };
    nextQuesiton();
});

//Option 4 Functionality
var option4 = document.createElement("li");
option4.addEventListener("click", function() {
    if (option4.textContent == allQuestions[questionNum].correct) {
        right();
    } else {
        wrong();
    };
    nextQuesiton();
});

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

clearButton.addEventListener("click", function() {
    highScores = [];
    while (questionList.firstChild) {
        questionList.removeChild(questionList.firstChild);
    };
});

initialSubmitBox.addEventListener("click", storeInitials);
function storeInitials(event) {
    event.preventDefault()

    //placeholder
    let score = 00;

    console.log("The submit button works");
    let initials = document.getElementById("initials").value;
        if (initials == "") {
            initials = "AA";
        }

    //Adds to the highscore array
    highScores.push(initials);
    highScores.push(score);

    console.log(initials);

    initialsBox.setAttribute("style", "display: none");
    displayHighscores();
};

//Function that displays highscores
var displayHighscores = function() {
    questionList.setAttribute("style", "display: inline");

    questionHeader.textContent = "Highscores";
    questionHeader.setAttribute("style", "text-align: left");

    //Button Labeling
    startButton.textContent = "";
    goBackButton.textContent = "Go Back";
    clearButton.textContent = "Clear Highscores"

    quizDesc.setAttribute("style", "display: none");

    //In case the user decides to be a comedian, this deletes all the questions
    while (questionList.firstChild) {
        questionList.removeChild(questionList.firstChild);
    };

    //for loop that creates an li element and appends it to ol
    let x = 0;
    for (let i = 0; i < highScores.length / 2;) {
        i++;
        let score = document.createElement("li");
        score.textContent = i + ". " + highScores[x] + " ";
        x++;
        score.textContent += highScores[x];
        x++;
        questionList.appendChild(score);
    }
    //Dont forget to clear the timer too i guess
};

//Function that displays the start page
var displayStart = function() {
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
};

//Function that starts the test
var startTest = function() {
    //Reset question num
    questionNum = 0;
    //Reformats all relevant text
    questionList.setAttribute("style", "display: inline");
    //highScoreButton.setAttribute("style", "display: none");
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

};

//Fills the questions based on which question
var nextQuesiton = function() {
    questionNum++;
    console.log("Current value of qNum " + questionNum);
    console.log("Value of allQ.length " + allQuestions.length);
    if (questionNum < allQuestions.length) {

        questionHeader.textContent = allQuestions[questionNum].header;

        option1.textContent = allQuestions[questionNum].b1;

        option2.textContent = allQuestions[questionNum].b2;

        option3.textContent = allQuestions[questionNum].b3;

        option4.textContent = allQuestions[questionNum].b4;
    } else {
        console.log("Test End!")
        hsEntry()
    }
};

function wrong() {
    testResult.setAttribute("style", "border-top: 2px solid darkgray")
    testResult.textContent = "Wrong!";
    let timer = 1;

    var clear = setInterval(function() {
        if (timer == 0) {
            testResult.textContent = "";
            testResult.setAttribute("style", "border-top: 0px solid darkgray")
            clearInterval(clear);
        }
        timer--;
    }, 700);
};

function right() {
    testResult.setAttribute("style", "border-top: 2px solid darkgray")
    testResult.textContent = "Correct!";
    let timer = 1;

    var clear = setInterval(function() {
        if (timer == 0) {
            testResult.textContent = "";
            testResult.setAttribute("style", "border-top: 0px solid darkgray")
            clearInterval(clear);
        }
        timer--;
    }, 700);
};

var hsEntry = function() {
    //Wait for wrong or write to clear
    let timer = 0;
    var pause = setInterval(function() {
        if (timer == 1) {
            clearInterval(pause);
            questionHeader.textContent = "All Done!"

            quizDesc.setAttribute("style", "display: inline-block");
            quizDesc.textContent = "Your final score is "
        
            //Wipes OL and removes all LI
            while (questionList.firstChild) {
                questionList.removeChild(questionList.firstChild);
            };

            initialsBox.setAttribute("style", "display: inline-block");
        };
        timer++;
    }, 700);


};






