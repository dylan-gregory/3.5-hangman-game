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
document.querySelector('.word-display').innerHTML = displayDashes.join(" ");

// This gives you the number of turns you'll have
var numTurns = randoArray.length + 5;

// This displays displays the above
document.querySelector('.turns-display').innerHTML = "You've got " + numTurns + " guesses left!";

var letterGuessed = document.querySelector('.btnA').textContent;

document.querySelector('.btn').addEventListener("click", compareLetter);

function compareLetter(letterGuessed){
  if (randoArray.includes(letterGuessed)) {
    console.log("Good guess!");
  }
};


// var decrimentTurns = function(turns){
//   numTurns = turns -1 ;
//   return numTurns;
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










}());
