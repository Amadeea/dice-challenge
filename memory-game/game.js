var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");

// nextSequence generate random number from 0 to 3
function nextSequence() {
  return Math.floor(Math.random() * 4);
}

function playBtnSound(color) {
  switch (color) {
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

// animateChosenBtn animate button display & play sound for the random chosen button
function animateChosenBtn(chosenColor) {
  $("#" + chosenColor).fadeOut(100);
  $("#" + chosenColor).fadeIn(100);

  playBtnSound(chosenColor);
}

function animateClickedBtn() {
  for (let i = 0; i < buttonColors.length; i++) {
    $("#" + buttonColors[i]).click(function () {
      $("#" + buttonColors[i]).addClass("pressed");
      setTimeout(function () {
        $("#" + buttonColors[i]).removeClass("pressed");
      }, 100);

      playBtnSound(buttonColors[i]);
      userClickedPattern.push(buttonColors[i]);
    });
  }
}

// chooseRandomBtn choose a random colored-button and play animation for the chosen button
function chooseRandomBtn() {
  var randomChosenColor = buttonColors[nextSequence()];
  gamePattern.push(randomChosenColor);

  animateChosenBtn(randomChosenColor);
}

animateClickedBtn();
// chooseRandomBtn();
