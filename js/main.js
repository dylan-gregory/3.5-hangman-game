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









}());
