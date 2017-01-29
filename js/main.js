(function(){
  "use strict";

// I want the game to automagically choose a random word upon initial page load, so this is an iife
var randoWord;

// This filters out words less than 3 characters long
var bigWords = commonWords.filter(function(word) {
  return word.length >=3;
});


(function(){
  randoWord = bigWords[Math.floor(Math.random() * bigWords.length)];

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
document.querySelector('.letter-buttons').addEventListener('click', updateTurns);


// To display how many turns you've got left!
function updateTurns(e){
  if (e.target !== e.currentTarget) {
    numTurns = numTurns -1;
    document.querySelector('.turns-display').innerHTML = "You've got " + numTurns + " guesses left!";
    if (numTurns === 0) {
      // alert("you lose! Try again!");
      // Maybe try to factor in a modal failure display


    }
  }
};

function updateDisplay(displayDashes){
  // foundIndex.forEach(function(letterIndex)){
 //     select the span tag its in + letterIndex = randoArray[letterIndex];
  document.querySelector('.word-display').innerHTML = displayDashes.join(" ");
};


// This almost works - but only displays one letter, even if there are multiples


var foundIndex = [];

function checkLetter(e) {
    if (e.target !== e.currentTarget) {
// use something besides includes - maybe a map and a filter -array of indexes where letter is

      for (var i = 0; i < randoArray.length; i++) {

        var foundIndex = [];

        randoArray.forEach(function(letter, index){
          if (letter == e.target.textContent){
            foundIndex.push(index);


          console.log(foundIndex);


        // if (randoArray.includes(e.target.textContent)) {
          // randoArray.indexOf(e.target.textContent) = displayDashes.replace("__", e.target.textContent);
          // console.log(e.target.textContent);
          // console.log(randoArray);
          // console.log(randoArray.indexOf(e.target.textContent));
          // console.log(displayDashes);
          foundIndex.forEach(function(indexes){
          displayDashes.splice(indexes, 1, e.target.textContent);
        });
          updateDisplay(displayDashes);
        }

        })
      }

    }
    e.stopPropagation();
      if (displayDashes.includes("__") == false) {
          alert("you win!"), 100000;

      }

}


console.log(numTurns);





//
// randoArray.forEach(function checkLetter(e) {
//     if (e.target !== e.currentTarget) {
//
//         if (randoArray.includes(e.target.textContent)) {
//             correctIndexes.push(e);
//             updateDisplay(displayDashes);
//
//         }
//
//         e.stopPropagation();
//           if (displayDashes.includes("__") == false) {
//               alert("you win!"), 100000;
//           }
//
//     }
//
//
//   })


// function checkLetter(e) {
//     if (e.target !== e.currentTarget) {
//
//     }
//
//
//   }

// var foundIndex = [];
//
// randoArray.forEach(function(letter, index)){
//   if (letter == e.target.textContent){
//     foundIndex.push(index);
//   }
// }


//
// updateDisplay(indexes){
//   indexes.forEach(function(letterIndex)){
//     select the span tag its in + letterIndex = randoArray[letterIndex];
//   }
// }

// Form to refactor the main function
// randomWord.forEach(function(letter, index){
//   if (letter === guess){
//   foundIndex.push[index];
// }
// });
//
// if (!foundIndex.length) {decriment guesses and}
//
// update the word thing
//
// }



//
// function checkLetter(e) {
//     var foundIndex = [];
//     if (e.target !== e.currentTarget) {
//           // use something besides includes - maybe a map and a filter -array of indexes where letter is
//           randoArray.forEach(function(letter, index){
//             if (letter == e.target.textContent){
//               foundIndex.push(index);
//             }
//           });
//           console.log(displayDashes.splice((randoArray.indexOf(e.target.textContent)), 1, e.target.textContent));
//
//           updateDisplay(displayDashes);
//           console.log(foundIndex);
//         };
//
//
//         //
//         // function updateDisplay(foundIndex){
//         //   foundIndex.forEach(function(foundIndex){
//         //      displayDashes = randoArray[letterIndex]
//         //   });
//         // if (randoArray.includes(e.target.textContent)) {
//         //   // randoArray.indexOf(e.target.textContent) = displayDashes.replace("__", e.target.textContent);
//         //   // console.log(e.target.textContent);
//         //   // console.log(randoArray);
//         //   // console.log(randoArray.indexOf(e.target.textContent));
//         //   // console.log(displayDashes);
//         //
//         //   console.log(displayDashes.splice((randoArray.indexOf(e.target.textContent)), 1, e.target.textContent));
//         //
//         //   updateDisplay(displayDashes);
//         // }
//
//
//     e.stopPropagation();
// }






// Listener to change color when letter has been guessed already
document.querySelector('.letter-buttons').addEventListener('click', changeColor);

// changing used button's color
function changeColor(e){
    if(e.target !== e.currentTarget){
        e.target.style.backgroundColor = "#4E1500";

    }

}








// if (randoArray.includes(e.target.textContent)) {
//   // randoArray.indexOf(e.target.textContent) = displayDashes.replace("__", e.target.textContent);
//   // console.log(e.target.textContent);
//   // console.log(randoArray);
//   // console.log(randoArray.indexOf(e.target.textContent));
//   // console.log(displayDashes);
//
//   console.log(displayDashes.splice((randoArray.indexOf(e.target.textContent)), 1, e.target.textContent));
//
//   updateDisplay(displayDashes);
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


// Not sure how well this is going to work, but we shall see
// Hangman
// var canvas =  function(){
//
//  var myStickman = document.getElementById("hangman-pic");
//  var context = myStickman.getContext('2d');
//  context.beginPath();
//  context.strokeStyle = "#fff";
//  context.lineWidth = 2;
// };
//
//  var head = function(){
//    myStickman = document.getElementById("hangman-pic");
//    context = myStickman.getContext('2d');
//    context.beginPath();
//    context.arc(60, 25, 10, 0, Math.PI*2, true);
//    context.stroke();
//  }
//
// var draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
//
//  context.moveTo($pathFromx, $pathFromy);
//  context.lineTo($pathTox, $pathToy);
//  context.stroke();
// }
//
// var frame1 = function() {
//   draw (0, 150, 150, 150);
// };
//
// var frame2 = function() {
//   draw (10, 0, 10, 600);
// };
//
// var frame3 = function() {
//   draw (0, 5, 70, 5);
// };
//
// var frame4 = function() {
//   draw (60, 5, 60, 15);
// };
//
// var torso = function() {
//   draw (60, 36, 60, 70);
// };
//
// var rightArm = function() {
//   draw (60, 46, 100, 50);
// };
//
// var leftArm = function() {
//   draw (60, 46, 20, 50);
// };
//
// var rightLeg = function() {
//   draw (60, 70, 100, 100);
// };
//
// var leftLeg = function() {
//   draw (60, 70, 20, 100);
// };
//
// var drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];





}());
