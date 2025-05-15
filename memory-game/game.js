var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStop = false;

var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var gameOverAudio = new Audio("sounds/wrong.mp3");

// startOver reset helper variables
function startOver() {
  level = 0;
  gamePattern = [];
  gameStop = false;
}

// nextLevel start a level
function nextLevel() {
  userClickedPattern = [];

  level++;
  $("h1").text("Level " + level);

  var randomNum = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNum];

  gamePattern.push(randomChosenColor);
  animateChosenBtn(randomChosenColor);
}

// startGame start the game from beginning
function startGame() {
  $(document).off("keydown");
  startOver();
  nextLevel();
}

// gameOver stop the game
function gameOver() {
  gameStop = true;
  gameOverAudio.play();

  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 200);

  $("h1").text("Game Over, press any key to restart");
  $(document).keydown(function () {
    startGame();
  });
}

// checkAnswer compare system generated pattern with user clicked pattern
function checkAnswer(currentSequence) {
  if (gamePattern[currentSequence] != userClickedPattern[currentSequence]) {
    return false;
  }

  return true;
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

// eventListenerClickedBtn animate button which is clicked by user
function eventListenerClickedBtn() {
  for (let i = 0; i < buttonColors.length; i++) {
    $("#" + buttonColors[i]).click(function () {
      if (gameStop) {
        return;
      }

      $("#" + buttonColors[i]).addClass("pressed");
      setTimeout(function () {
        $("#" + buttonColors[i]).removeClass("pressed");
      }, 100);

      playBtnSound(buttonColors[i]);
      userClickedPattern.push(buttonColors[i]);

      if (checkAnswer(userClickedPattern.length - 1) != true) {
        gameOver();
      } else {
        if (level == userClickedPattern.length) {
          setTimeout(nextLevel(), 1000);
        }
      }
    });
  }
}

eventListenerClickedBtn();

$(document).keydown(function () {
  startGame();
});
