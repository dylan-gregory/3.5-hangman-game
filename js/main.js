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
document.querySelector('.letter-buttons').addEventListener('click', updateTurns);


// To display how many turns you've got left!
function updateTurns(e){
  if (e.target !== e.currentTarget) {
    numTurns = numTurns -1;
    document.querySelector('.turns-display').innerHTML = "You've got " + numTurns + " guesses left!";
    if (numTurns === 0) {
      alert("you lose! Try again!");
      // Maybe try to factor in a modal failure display
    }
  }
};

function updateDisplay(displayDashes){
  // foundIndex.forEach()
  document.querySelector('.word-display').innerHTML = displayDashes.join(" ");
};


// This almost works - but only displays one letter, even if there are multiples
//
function checkLetter(e) {
    if (e.target !== e.currentTarget) {
// use something besides includes - maybe a map and a filter -array of indexes where letter is


        if (randoArray.includes(e.target.textContent)) {
          // randoArray.indexOf(e.target.textContent) = displayDashes.replace("__", e.target.textContent);
          // console.log(e.target.textContent);
          // console.log(randoArray);
          // console.log(randoArray.indexOf(e.target.textContent));
          // console.log(displayDashes);

          console.log(displayDashes.splice((randoArray.indexOf(e.target.textContent)), 1, e.target.textContent));

          updateDisplay(displayDashes);
          // updateTurns();
          console.log(numTurns);

        }

    }
    e.stopPropagation();
      if (displayDashes.includes("__") == false) {
          alert("you win!"), 100000;
      }

}


console.log(numTurns);

// var foundIndex = [];
//
// randoArray.forEach(function(letter, index)){
//   if (letter == guess){
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
        e.target.style.backgroundColor = "red";

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
