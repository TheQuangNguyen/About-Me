// test = window.confirm("yes or no?");
// console.log(test);
'use strict';

//function takes input prompt, converts to uppercase and puts into an array test and returns the first index of array.
var inputCheck = function (input) {
  var test = input.toUpperCase();
  test = test.split("");
  var firstLetter = test[0];
  return firstLetter;
};

// keep track of how many answer user got right
var score = 0;

//question functions. takes prompt, runs inputCheck provide feedback.
var q1 = function (){
  input = inputCheck(prompt("Is my last name Nguyen, the most common Vietnamese' last name ever?"));
  if (input === "Y") { 
    score++;
    alert("Correct. The odds were in your favor though, like 80%.");
  } else { 
    alert("Incorrect. And also incorrect if you think I am related to a Nguyen you know.")
  }
};
var q2 = function() {
  input = inputCheck(prompt("Am I the sexiest person you know?"));
  if (input === "Y") { 
    score++;
    alert("That's right. And don't you ever forget it.");
  } else { 
    alert("That's 100% wrong. You should get your eyes checked.");
  }
};
var q3 = function() {
  input = inputCheck(prompt("Was I once the champion of the Spelling Bee in elementary school?"));
  if (input === "N") { 
    score++;
    alert("You are right. I was knocked out in the first round. It was indeed the saddest moment in human history.");
  } else { 
    alert("Thank you for thinking that I am smart that is incorrect. I should have won but unfortunately the competition was rigged.");
  }
};
var q4 = function() {
  input = inputCheck(prompt("Was I once the champion of my high school's talent show?"));
  if (input === "Y") { 
    score++;
    alert("That's absolutely right. I gave everyone quite a show. Every person that attended shed a tear and chanted my name.");
  } else { 
    alert("You are dead wrong. I was freaking awesome.");
  }
};
var q5 = function () {
  input = inputCheck(prompt("Did I ever kill anyone?"));
  if (input === "Y") { 
    alert("Yep I actually did once");
    alert("Just kidding. How could I do such a thing? I am a saint.");
  } else { 
    score++;
    alert("You are right. I am the nicest person ever.");
  }
};
var q6 = function() {

  var guess;
  var correctPIdigits = 26;  
  var numChances = 4;
  var correct = false;

  // ask the user the question along with how many chances they have left and have messages if their guess is higher or lower than the correct answer. Then reiterate again until the user run out of chances. 
  while (numChances > 0) { 
    guess = parseInt(prompt("How many digits of PI can I memorize in my head? You now have " + numChances + " chances to guess correctly."));
    if (guess === correctPIdigits) { 
      alert("Yea I know, I'm amazing for remembering that much digits. You were amazing too for guessing that right, just less amazing than me.");
      score++;
      correct = true;
      break;
    } else if (guess > correctPIdigits) { 
      alert("The guess is too high.");
    } else if (guess < correctPIdigits) { 
      alert("The guess is too low.");
    }
    numChances--;
  }

  if (correct === false) { 
    alert("The answer was " + correctPIdigits + " digits. Yea, I am that good.");
  }

};
var q7;

var input = inputCheck(prompt("Would you like to play a game with me? Answer yes or no."));

// change the user input to all uppercase then split the string into an array filled with every characters and then take the first character ot test for y or n for yes or no 
// var test = input.toUpperCase();
// test = test.split("");
// var firstLetter = test[0]; 


// test user answer and execute the case for the corresponding answer.
if (input === "N") { 
  alert("Well, you are missing out on some seriously fun");
} else { 
  alert("Answer yes or no for each question about me. Let see if you can guess right. For each right answer, you get a different prize.")
  
  q1();
  q2();
  q3();
  q4();
  q5();

  alert("Ok, now for a more difficult question");
  
  q6();
  
  // Generate 6 random numbers ranging from 0 to 60 and store them in an array
  var randomNum = [];
  var max = 60;
  var min = 0;

  // the statement for randomly generating a number I got it from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  for (var i = 0; i < 6; i++) { 
    randomNum[i] = Math.floor((Math.random() * (max - min + 1)) + min);
  }

  alert("Now for the final, toughest question/challenge.")

  numChances = 6;

  // while loop is for iterating through the number of chances the user get. For loop is for iterating through the array that contains the 6 possible correct answer. If statement is for checking to see if any number in the array match what the user guess. 
  while (numChances > 0) { 

    guess = parseInt(prompt("Guess the one of the six numbers that appear from the fortune cookie that I just opened. You have " + numChances + " chances remaining. ***Hint - the numbers are between 0 and 60***"));

    for (i=0; i < randomNum.length; i++) { 
      if (guess == randomNum[i]){
        alert("You got it. I could have guess it too just so you know.");
        score++;
        numChances = -1; 
        break;
      }
    }
    numChances--;
  }

  alert("The numbers are " + randomNum[0] + ", " + randomNum[1] + ", " + randomNum[2] + ", " + randomNum[3] + ", " + randomNum[4] + ", " + randomNum[5]);

  alert("Now for your prize.");

  // use switch to have different result based on the score the user got
  switch (score) { 
    case 1:
      alert("You got 1 correct. You get one gulp of water.");
      break;
    case 2:
      alert("You got 2 correct. You get two gulps of Coca-Cola.");
      break;
    case 3:
      alert("You got 3 correct. You get three handful amount of rice.");
      break;
    case 4: 
      alert("You got 4 correct. You get four pieces of sour skittles.");
      break;
    case 5: 
      alert("You got 5 correct. You get five broken 0.5mm pencil lead sticks");
      break;
    case 6: 
      alert("You got 6 correct. You get six sheets of paper");
      break;
    case 7: 
      alert("You got 7 correct. You get a very special prize. Wait for it......");
      alert("You get a signature from me.... YAYYYYYY");
      break;
  }
}
