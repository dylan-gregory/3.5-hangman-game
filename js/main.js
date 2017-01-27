(function(){
  "use strict";

// I want the game to automagically choose a random word upon initial page load, so this is an iife
var randoWord;

(function(){
  randoWord = commonWords[Math.floor(Math.random() * commonWords.length)];

}());
console.log(randoWord);

//This splits the random word into an array of it's individual characters
var randoArray = randoWord.split("");

console.log(randoArray);

// This transforms the array items into the dashes to be displayed
var displayDashes = randoArray.map(function(indexItem){
  return indexItem = "__";
});

// This displays the dashes and removes the commas in between them
updateDisplay(displayDashes);

// This gives you the number of turns you'll have
var numTurns = randoArray.length + 5;

// This displays the above
document.querySelector('.turns-display').innerHTML = "You've got " + numTurns + " guesses left!";




document.querySelector('.letter-buttons').addEventListener('click', checkLetter);

// function compareLetter(){
//   if (randoArray.includes(btn.textContent)){
//     console.log("Good guess!");
//   }
// };
function updateDisplay(displayDashes){
  document.querySelector('.word-display').innerHTML = displayDashes.join(" ");
}

function checkLetter(e) {
    if (e.target !== e.currentTarget) {
        if (randoArray.includes(e.target.textContent)) {
          // randoArray.indexOf(e.target.textContent) = displayDashes.replace("__", e.target.textContent);

          console.log(e.target.textContent);
          console.log(randoArray);
          console.log(randoArray.indexOf(e.target.textContent));
          console.log(displayDashes);

          console.log(displayDashes.splice((randoArray.indexOf(e.target.textContent)), 1, e.target.textContent));

          updateDisplay(displayDashes);
          // console.log(randoArray.indexOf(e.target.textContent));
          // console.log("you got it");

        }

    }
    e.stopPropagation();
}


// function hey(){
//   console.log("hey!");
// }


// var letterGuessed = document.querySelector('.btn').textContent;

// var vaildGuess;

// var letterAssign = function(guess){
//   guess == letterGuessed;
//   if (randoArray.includes(letterGuessed)) {
//     randoArray.map(function(indexItem){
//       return indexItem = letterGuessed;
//     });
//     decrimentTurns();
//   }
// }

// for core logic
// var letterAssign =
//
// validGuess
//     letterGuessed === validGuess
// if (validGuess)
//   decrimentTurns




// var letterA = document.querySelector('.btnA').textContent;
// var letterB = document.querySelector('.btnB').textContent;
// var letterC = document.querySelector('.btnC').textContent;
// var letterD = document.querySelector('.btnD').textContent;
// var letterE = document.querySelector('.btnE').textContent;
// var letterF = document.querySelector('.btnF').textContent;
// var letterG = document.querySelector('.btnG').textContent;
// var letterH = document.querySelector('.btnH').textContent;
// var letterI = document.querySelector('.btnI').textContent;
// var letterJ = document.querySelector('.btnJ').textContent;
// var letterK = document.querySelector('.btnK').textContent;
// var letterL = document.querySelector('.btnL').textContent;
// var letterM = document.querySelector('.btnM').textContent;
// var letterN = document.querySelector('.btnN').textContent;
// var letterO = document.querySelector('.btnO').textContent;
// var letterP = document.querySelector('.btnP').textContent;
// var letterQ = document.querySelector('.btnQ').textContent;
// var letterR = document.querySelector('.btnR').textContent;
// var letterS = document.querySelector('.btnS').textContent;
// var letterT = document.querySelector('.btnT').textContent;
// var letterU = document.querySelector('.btnU').textContent;
// var letterV = document.querySelector('.btnV').textContent;
// var letterW = document.querySelector('.btnW').textContent;
// var letterX = document.querySelector('.btnX').textContent;
// var letterY = document.querySelector('.btnY').textContent;
// var letterZ = document.querySelector('.btnZ').textContent;





}());
