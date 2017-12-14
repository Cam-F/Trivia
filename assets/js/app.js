/*  Saw this style of pseudo online, found it appealing

1. [X]   Setup globals: Time, Right Answers, Wrong Answers (maybe more)
2. [x]   Setup array object pulpTrivia = [
            question: "",
            answers: ["","","",""],
            right: ""]
    2a. [x] Setup array for gifs dependent on answer
3. []   Setup timer (setInterval or setTimeout)
4. []   Setup .click on answers array
5. []   ++Right Answers
6. []   ++Wrong Answers
7. []   Show score
8. []   Reset

*/

$(document).ready(function () {

    // Globals
    var time = 25;      // time to answer
    var rightAnswer = 0;      // right answers
    var wrongAnswer = 0;      // wrong answers
    var count = -1;     // to cycle through the images
    var intervalID;     // for setInterval timing

    // Object for Q&A's
    var trivia = [{
        question: "According to the Pulp Fiction, what is a Quarter Pounder called in Europe?",
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
        var gameStart = $(".question");                             // grabbing the question element to append to later
        var beginButton = $(document.createElement("button"));      // dynamically create start button
        beginButton.addClass("btn-lg begin-button");                 // adding classes to new button

        beginButton = beginButton.html("Start Trivia Quiz");        // put text on the button

        gameStart.append(beginButton);                              // appending the start button to the div

        $(".begin-button").click(function () {                         // on click function
            beginButton.remove();                                   // removing the start quiz button
            nextQuestion();                                         // calling the next question
        })
    }
    // Timer function
    function timer() {
        time--;                                     // decreasing from 25 by 1

        $(".timer").html(time + " Remaining");      // Displays time on screen

        if (time === 0) {                           // IF the user runs out of time
            wrongAnswer++;                          // add 1 to the wrong answer
            clearInterval(intervalID);              // clear the setInterval
            nextQuestion();                         // Call next question      REMEMBER TO NAME QUESTION FUNCTION THIS
        }
    }

})