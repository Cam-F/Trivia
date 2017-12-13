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
        question: "In the beginning of the film, where did Brad get the burger that Jules took a bite of?",
        answers: ["Luscious Lil's", "Big Kahuna", "Carl's Jr", "Jack in the Box"],
        right: "Big Kahuna"
    }];
    console.log(trivia);

})