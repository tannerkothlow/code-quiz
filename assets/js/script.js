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
var hsSotrage = JSON.parse(localStorage.getItem("high-scores"));
highScores = highScores.concat(hsSotrage);
console.log(highScores);


var questionNum = 0;
var stopTimer = false;
var seconds = 59;

var q1 = {
    header: "What coding language can be used to add interactivity to a web page, and change the content you see?",
    b1: "CSS",
    b2: "Javascript",
    b3: "Python",
    b4: "Bootstrap",
    correct: "Javascript"
};

var q2 = {
    header: "Which Javascript command can be used to change an element's CSS styling?",
    b1: "element.textContent()",
    b2: "document.querySelector()",
    b3: "#element {}",
    b4: "element.setAttribute()",
    correct: "element.setAttribute()"
};

var q3 = {
    header: "How do you stop a timer?",
    b1: "clearInterval(timer)",
    b2: "timerStop(timer)",
    b3: "timer = false;",
    b4: "timer.pause()",
    correct: "clearInterval(timer)"
};

var q4 = {
    header: "Why do you need to JSON.parse a stored object?",
    b1: "The object is encrypted when put in local memory.",
    b2: "It is stored in the HTML doc, and needs to be retrieved.",
    b3: "Javascript stores the object as a string in local memory.",
    b4: "The object is converted into machine code and needs to be decoded.",
    correct: "Javascript stores the object as a string in local memory."
};

var q5 = {
    header: "Which of these is NOT a valid concatenation method?",
    b1: "array1.concat(array2)",
    b2: "bigString += string2",
    b3: "array1 + array2",
    b4: "string1 + string2",
    correct: "array1 + array2"
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
    timer.textContent = "Time: 60"
    seconds = 59;
    //Resets stopTimer
    stopTimer = false;
    startTest();
});

//Go back button event, appears on Highscore page
goBackButton.addEventListener("click", function() {
    displayStart();
});

clearButton.addEventListener("click", function() {
    highScores = [];
    localStorage.setItem("high-scores", JSON.stringify(highScores));
    while (questionList.firstChild) {
        questionList.removeChild(questionList.firstChild);
    };
});

initialSubmitBox.addEventListener("click", storeInitials);
function storeInitials(event) {
    event.preventDefault();
    let initials = document.getElementById("initials").value;
        if (initials == "") {
            initials = "AA";
        }

    //Adds to the highscore array
    highScores.push(initials);
    highScores.push(seconds);
    initialsBox.setAttribute("style", "display: none");

    displayHighscores();
};

//Function that displays highscores
var displayHighscores = function() {
    localStorage.setItem("high-scores", JSON.stringify(highScores));
    questionList.setAttribute("style", "display: inline");

    questionHeader.textContent = "Latest Highscores";
    questionHeader.setAttribute("style", "text-align: left");

    //Button Labeling
    startButton.setAttribute("style", "display: none")
    goBackButton.setAttribute("style", "display: inline")
    clearButton.setAttribute("style", "display: inline")

    quizDesc.setAttribute("style", "display: none");

    //Stops the timer if clicked mid test
    stopTimer = true;
    //In case the user decides to be a comedian, this deletes all the questions
    while (questionList.firstChild) {
        questionList.removeChild(questionList.firstChild);
    };

    //for loop that creates an li element and appends it to ol
    let x = 0;
    for (let i = 0; i < highScores.length / 2;) {
        i++;
        let score = document.createElement("li");
        score.textContent = highScores[x] + " ";
        x++;
        score.textContent += highScores[x];
        x++;
        questionList.appendChild(score);
    }
};

//Function that displays the start page
startButton.setAttribute("style", "display: inline")
goBackButton.setAttribute("style", "display: none")
clearButton.setAttribute("style", "display: none")
var displayStart = function() {
    questionHeader.textContent = "Coding Quiz Challenge";
    quizDesc.textContent = "Welcome! In this quiz you'll be answering five quick coding questions. You'll have 60 seconds to answer them all, you'll get a five second time penalty for each question you get wrong, make sure to answer all the questions in time! \n You'll get a score based on how much time you have left by the end. Good luck!";

    startButton.setAttribute("style", "display: inline")
    goBackButton.setAttribute("style", "display: none")
    clearButton.setAttribute("style", "display: none")

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
    questionNum = 0;
    questionList.setAttribute("style", "display: inline");
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
    startButton.setAttribute("style", "display: none")
    goBackButton.setAttribute("style", "display: none")
    clearButton.setAttribute("style", "display: none")

    //Starts a timer that runs and when its done it displays highscore with a unique message
    var timerCounter = setInterval(function() {
        timerUpdate(seconds);
        if (stopTimer) {
            clearInterval(timerCounter)
        } else if (seconds <= 0) {
            seconds = 0;
            clearInterval(timerCounter);
            hsEntry2(seconds);
            questionHeader.textContent = "Time's Up!"
        };
    }, 1000);


};

//Populates the question list with new content
var nextQuesiton = function() {
    questionNum++;
    if (questionNum < allQuestions.length) {

        questionHeader.textContent = allQuestions[questionNum].header;

        option1.textContent = allQuestions[questionNum].b1;

        option2.textContent = allQuestions[questionNum].b2;

        option3.textContent = allQuestions[questionNum].b3;

        option4.textContent = allQuestions[questionNum].b4;
    } else {
        stopTimer = true;
        let tick = 0;
        var pause = setInterval(function() {
            if (tick == 1) {
                clearInterval(pause);
                hsEntry2(seconds);
            }
        tick++;
        }, 700);
    };
};

//Displays Wrong, deducts time, and plays a sound
var soundWrong = document.getElementById("sound-wrong");
function wrong() {
    testResult.setAttribute("style", "border-top: 2px solid ")
    testResult.textContent = "Wrong!";
    soundWrong.play();
    seconds = seconds - 5;
    timerUpdate(seconds);

    clearInterval(clear);

    timer.setAttribute("style", "color: red")
    let tick = 1;
    var clear = setInterval(function() {
        if (tick == 0) {
            testResult.textContent = "";
            testResult.setAttribute("style", "border-top: 0px solid ")
            timer.setAttribute("style", "color: black")
            clearInterval(clear);
        }
        tick--;
    }, 700);
};

//Displays Correct and plays a sound.
var soundRight = document.getElementById("sound-right");
function right() {
    testResult.setAttribute("style", "border-top: 2px solid ")
    testResult.textContent = "Correct!";
    soundRight.play();
    clearInterval(clear);

    let tick = 1;
    var clear = setInterval(function() {
        if (tick == 0) {
            testResult.textContent = "";
            testResult.setAttribute("style", "border-top: 0px solid ")
            clearInterval(clear);
        }
        tick--;
    }, 700);
};
//Redistributes text for the highscore entry page.
var hsEntry2 = function(score) {
    questionHeader.textContent = "All Done!"

    quizDesc.setAttribute("style", "display: inline-block");
    score++;
    quizDesc.textContent = "Your final score is " + score;
        
    //Wipes OL and removes all LI
     while (questionList.firstChild) {
        questionList.removeChild(questionList.firstChild);
    };

    initialsBox.setAttribute("style", "display: inline-block");
}
//Semi-unecesary command that deals with updating the timer.
//Made a unique function to cut down on time spent tinkering with its functionality.
var timerUpdate = function(second) {
    timer.textContent = "Time: " + second;
    seconds--;
}





