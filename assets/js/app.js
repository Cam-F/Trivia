/*  Saw this style of pseudo online, found it appealing

1. [X]   Setup globals: Time, Right Answers, Wrong Answers (maybe more)
2. [x]   Setup array object pulpTrivia = [
            question: "",
            answers: ["","","",""],
            right: ""]
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
        question: "",
        answers: ["", "", "", ""],
        right: ""
    }, {
        question: "",
        answers: ["", "", "", ""],
        right: ""
    }, {
        question: "",
        answers: ["", "", "", ""],
        right: ""
    }, {
        question: "",
        answers: ["", "", "", ""],
        right: ""
    }];

})