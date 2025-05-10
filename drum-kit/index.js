var numberOfDrums = document.querySelectorAll(".drum").length;

var audioTom1 = new Audio("sounds/tom-1.mp3");
var audioTom2 = new Audio("sounds/tom-2.mp3");
var audioTom3 = new Audio("sounds/tom-3.mp3");
var audioTom4 = new Audio("sounds/tom-4.mp3");
var audioSnare = new Audio("sounds/snare.mp3");
var audioCrash = new Audio("sounds/crash.mp3");
var audioKick = new Audio("sounds/kick-bass.mp3");

for (let i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    buttonAnimation(this.textContent);
    makeSound(this.textContent);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      audioTom1.play();
      break;
    case "a":
      audioTom2.play();
      break;
    case "s":
      audioTom3.play();
      break;
    case "d":
      audioTom4.play();
      break;
    case "j":
      audioSnare.play();
      break;
    case "k":
      audioCrash.play();
      break;
    case "l":
      audioKick.play();
      break;
  }
}

function buttonAnimation(key) {
  var targetButton = document.querySelector("." + key);

  targetButton.classList.add("pressed");
  setTimeout(function () {
    targetButton.classList.remove("pressed");
  }, 100);
}
