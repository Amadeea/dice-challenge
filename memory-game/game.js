var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");

// nextSequence generate random number from 0 to 3
function nextSequence() {
  return Math.floor(Math.random() * 4);
}

// animateChosenBtn animate button display & play sound for the random chosen button
function animateChosenBtn(chosenColor) {
  $("#" + chosenColor).fadeOut(100);
  $("#" + chosenColor).fadeIn(100);

  switch (chosenColor) {
    case "red":
      redAudio.play();
      break;
    case "blue":
      blueAudio.play();
      break;
    case "green":
      greenAudio.play();
      break;
    case "yellow":
      yellowAudio.play();
      break;
  }
}

// chooseRandomBtn choose a random colored-button and play animation for the chosen button
function chooseRandomBtn() {
  var randomChosenColor = buttonColors[nextSequence()];
  gamePattern.push(randomChosenColor);

  animateChosenBtn(randomChosenColor);
}
