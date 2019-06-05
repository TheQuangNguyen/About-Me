// test = window.confirm("yes or no?");
// console.log(test);
'use strict'


var input = prompt("Would you like to play a game with me? Answer yes or no.");

// change the user input to all uppercase then split the string into an array filled with every characters and then take the first character ot test for y or n for yes or no 
var test = input.toUpperCase();
test = test.split("");
var firstLetter = test[0]; 


// keep track of how many answer user got right
var score = 0;

// test user answer and execute the case for the corresponding answer.
if (firstLetter === "N") { 
  alert("Well, you are missing out on some seriously fun");
} else { 
  alert("Answer yes or no for each question about me. Let see if you can guess right. For each right answer, you get a different prize.")

  // repeat the process for each question
  input = prompt("Is my last name Nguyen, the most common Vietnamese' last name ever?");
  test = input.toUpperCase();
  test = test.split("");
  firstLetter = test[0];

  if (firstLetter === "Y") { 
    score++;
    alert("Correct. The odds were in your favor though, like 80%.");
  } else { 
    alert("Incorrect. And also incorrect if you think I am related to a Nguyen you know.")
  }

  input = prompt("Am I the sexiest person you know?");
  test = input.toUpperCase();
  test = test.split("");
  firstLetter = test[0];

  if (firstLetter === "Y") { 
    score++;
    alert("That's right. And don't you ever forget it.");
  } else { 
    alert("That's 100% wrong. You should get your eyes checked.");
  }

  input = prompt("Was I once the champion of the Spelling Bee in elementary school?");
  test = input.toUpperCase();
  test = test.split("");
  firstLetter = test[0];

  if (firstLetter === "N") { 
    score++;
    alert("You are right. I was knocked out in the first round. It was indeed the saddest moment in human history.");
  } else { 
    alert("Thank you for thinking that I am smart that is incorrect. I should have won but unfortunately the competition was rigged.");
  }

  input = prompt("Was I once the champion of my high school's talent show?")
  test = input.toUpperCase();
  test = test.split("");
  firstLetter = test[0];

  if (firstLetter === "Y") { 
    score++;
    alert("That's absolutely right. I gave everyone quite a show. Every person that attended shed a tear and chanted my name.");
  } else { 
    alert("You are dead wrong. I was freaking awesome.");
  }

  input = prompt("Did I ever kill anyone?");
  test = input.toUpperCase();
  test = test.split("");
  firstLetter = test[0];

  if (firstLetter === "Y") { 
    alert("Yep I actually did once");
    alert("Just kidding. How could I do such a thing? I am a saint.");
  } else { 
    score++;
    alert("You are right. I am the nicest person ever.");
  }

  alert("Now for your prize.");

  // use switch to have different result based on the score the user got
  switch (score) { 
    case 1:
      alert("You got 1 correct. You get one eraser shaving.");
      break;
    case 2:
      alert("You got 2 correct. You get two grains of rice.");
      break;
    case 3:
      alert("You got 3 correct. You get three 0.5mm pencil lead stick.");
      break;
    case 4: 
      alert("You got 4 correct. You get four pieces of sour skittles.");
      break;
    case 5: 
      alert("You got 5 correct. You get a very special prize. Wait for it......");
      alert("You get a signature from me.... YAYYYYYY");
  }
}
