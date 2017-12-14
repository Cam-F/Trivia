/*  Saw this style of pseudo online, found it appealing

1. [X]   Setup globals: Time, Right Answers, Wrong Answers (maybe more)
2. [x]   Setup array object pulpTrivia = [
            question: "",
            answers: ["","","",""],
            right: ""]
    2a. [x] Setup array for gifs dependent on answer
3. [x]   Setup timer (setInterval or setTimeout)
4. [x]   Setup function to display next question/answers
5. [x]   Setup .click on answers array
6. [x]   ++Right Answers
7. [x]   ++Wrong Answers
8. [x]   Show score
9. [x]   Reset
10. []  Figure out how to only show gifs in between
*/

$(document).ready(function () {

    // Globals
    var time = 20;            // time to answer
    var rightAnswer = 0;      // right answers
    var wrongAnswer = 0;      // wrong answers
    var count = -1;           // to cycle through the questions/answers/gifs. Its set to -1 so it gets the index of [0] first
    var intervalID;           // for setInterval timing
    var userGuess;            // User guess answer, empty for storing a value after click

    // Object for Q&A's
    var trivia = [{
        question: "According to Pulp Fiction, what is a Quarter Pounder called in Europe?",
        answers: ["Big Mac", "Royale with Cheese", "Pound-Quatre", "Le Burger-Fromage"],
        right: "Royale with Cheese"
    }, {
        question: "What was the name of the restaurant where Vincent took Mia out to dinner?",
        answers: ["Jimmy's Chicken Shack", "Hawthorne Grille", "Chelsea's Palace", "Jackrabbit Slim's"],
        right: "Jackrabbit Slim's"
    }, {
        question: "In what round does Marcellus tell Butch to take a dive during the fight?",
        answers: ["Sixth", "First", "Fourth", "Fifth"],
        right: "Fifth"
    }, {
        question: "In the beginning of the film, where did Brett get the burger that Jules took a bite of?",
        answers: ["Luscious Lil's", "Big Kahuna", "Carl's Jr", "Jack in the Box"],
        right: "Big Kahuna"
    }];
    console.log(trivia);

    // Arrays for GIF's

    var rightAnswerImg = ["assets/images/right1.gif", "assets/images/right2.gif", "assets/images/right3.gif", "assets/images/right4.gif"];
    var wrongAnswerImg = ["assets/images/wrong1.gif", "assets/images/wrong2.gif", "assets/images/wrong3.gif", "assets/images/wrong4.gif"];

    startGame();

    // Start game

    function startGame() {
        var gameStart = $(".answer");                             // grabbing the question element to append to later
        var beginButton = $(document.createElement("button"));      // dynamically create start button
        beginButton.addClass("btn-lg btn-block begin-button");      // adding classes to new button

        beginButton = beginButton.html("Start Trivia Quiz");        // put text on the button

        gameStart.append(beginButton);                              // appending the start button to the div

        $(".begin-button").click(function () {                      // on click function
            beginButton.remove();                                   // removing the start quiz button
            nextQuestion();                                         // calling the next question
            timer();
        })
    }

    // Timer function

    function timer() {
        time--;                                     // decreasing from 25 by 1

        $(".timer").html(time + " Remaining");      // Displays time on screen

        if (time === 0) {                           // IF the user runs out of time
            wrongAnswer++;                          // add 1 to the wrong answer
            clearInterval(intervalID);              // clear the setInterval    NOT SURE IF THIS IS NEEDED
            nextQuestion();                         // Call next question      REMEMBER TO NAME QUESTION FUNCTION THIS
        }
    }

    // Function for calling questions

    function nextQuestion() {
        count++;                                            // Increase count by 1 to cycle through questions 
        time = 20;                                           // Timer set to 25
        intervalID = setInterval(timer, 1000);              // Run the timer function every 1 second

        if (count < trivia.length) {
            $(".question").text(trivia[count].question);    // displays the question property at the current index of var count in trivia object

            $(".answer").empty();                           // Need .empty() or they all append to the page
            nextAnswers();
        }
        // Clearing divs once all questions have been answered
        else if (count > (trivia.length - 1)) {              // Clear all div's once count exceeds 3

            $(".timer").empty();
            $(".question").empty();
            $(".answer").empty();
            clearInterval(intervalID);

            function score() {
                var gameEnd = "<h1>Game Over! </h1>"            // Assign new var 
                $(".question").html(gameEnd);                   // 

                var results = "<h2>Right answers: " + rightAnswer + " Wrong answers: " + wrongAnswer + "</h2>";
                $(".answer").html(results);
            }
            score();                                            // HOLY **** JUST CALL THE FUNCTION DUH
            reset();
        }


        // Function for calling answers

        function nextAnswers() {
            for (i = 0; i < trivia[count].answers.length; i++) {
                var button = $(document.createElement("button"));               // dynamically creates 4 buttons
                button.addClass("btn-lg btn-block answer-button");              // added the same classes for consistent look

                var answerButton = button.html(trivia[count].answers[i]);       // utiliizing [count] to get into the [answers] property, and indexof to get each answer
                $(".answer").append(answerButton);                              // appending the 4 answer buttons
            }

            // Function for click capturing 

            $(".answer-button").on("click", function (event) {

                userGuess = $(this).text();                                     // Redefining empty var to the string on the button clicked
                console.log(userGuess);
                
                $(".answer-button").remove();                                    // Clear out the answer choices for clean presentation of the gif
                $(".question").empty();                                          // MAJOR KEY THESE 3 LINES
                $(".timer").empty();                                             // I DID IT TIME GO DIE NOW

                if (userGuess === trivia[count].right) {                        // comparing click to [right] "string"
                    rightAnswer++;                                              // awarding a point
                    rightGif();                                                 // Call transition gif
                    clearInterval(intervalID);                                  // reset timer
                }
                else {
                    wrongAnswer++;                                              // adding 1 to wrong
                    wrongGif();                                                 // call transition gif
                    clearInterval(intervalID);                                  // reset timer
                }
                console.log(rightAnswer);
                console.log(wrongAnswer);
            })
        }

        // reset

        function reset() {
            var reset = $(document.createElement("button"));               // dynamically added a button
            reset.addClass("btn-lg btn-block");                            // consistent styling
            reset.text("Play Again");

            $(".answer").append(reset);                                     // added to the DOM

            reset.on("click", function () {
                count = -1;                                                 // reset our navigator
                rightAnswer = 0;                                            // reset our stats
                wrongAnswer = 0;

                reset.remove();                                             // removing our button

                nextQuestion();                                             // Restarting game
            })
        }

        // Transition GIF's

        function rightGif() {
            $(".gif").html("<img src=" + rightAnswerImg[count] + " width='400px'><h2>You're correct!</h2>");
            setTimeout(removeGif, 4000);

        }
        function wrongGif() {
            $(".gif").html("<img src=" + wrongAnswerImg[count] + " width='400px'><h2>Incorrect: " + trivia[count].right + "</h2>");
            setTimeout(removeGif, 4000);
        }
        function removeGif() {
            $(".gif").empty();
            nextQuestion();
        }
    }
})