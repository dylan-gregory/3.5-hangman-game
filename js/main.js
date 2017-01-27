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











}());
