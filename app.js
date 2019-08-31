// Get computer choice
const computerChoiceRock = document.getElementById("computerRock");
const computerChoicePaper = document.getElementById("computerPaper");
const computerChoiceScissors = document.getElementById("computerScissors");

// Get computer image
const cimgRock = document.getElementById("cimg1");
const cimgPaper = document.getElementById("cimg2");
const cimgScissors = document.getElementById("cimg3");

// Get user choice
const userChoiceRock = document.getElementById("choseRock");
const userChoicePaper = document.getElementById("chosePaper");
const userChoiceScissors = document.getElementById("choseScissors");

// Get user image
const uimgRock = document.getElementById("uimg1");
const uimgPaper = document.getElementById("uimg2");
const uimgScissors = document.getElementById("uimg3");

// Get paragraph which displays results and display the game result
const displayResult = document.getElementById("displayResult");

// Add border to user image, clear border when selecting multiple times
function addUserImageBorder() {
  if (userChoiceRock.checked === true) {
    userChoicePaper.checked = false;
    userChoiceScissors.checked = false;
    uimgRock.classList.add("whiteBorder");
    uimgPaper.classList.remove("whiteBorder");
    uimgScissors.classList.remove("whiteBorder");
  } else if (userChoicePaper.checked === true) {
    userChoiceRock.checked = false;
    userChoiceScissors.checked = false;
    uimgPaper.classList.add("whiteBorder");
    uimgRock.classList.remove("whiteBorder");
    uimgScissors.classList.remove("whiteBorder");
  } else if (userChoiceScissors.checked === true) {
    userChoicePaper.checked = false;
    userChoiceRock.checked = false;
    uimgScissors.classList.add("whiteBorder");
    uimgPaper.classList.remove("whiteBorder");
    uimgRock.classList.remove("whiteBorder");
  } else {
    //do nothing
  }
}

function getComputerChoice() {
  // Generate a computer choice
  const computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0) {
    computerChoiceRock.checked = true;
    computerChoicePaper.checked = false;
    computerChoiceScissors.checked = false;
  } else if (computerChoice === 1) {
    computerChoicePaper.checked = true;
    computerChoiceRock.checked = false;
    computerChoiceScissors.checked = false;
  } else {
    computerChoiceScissors.checked = true;
    computerChoicePaper.checked = false;
    computerChoiceRock.checked = false;
  }

  // reveal computer choice and add border to image

  if (computerChoiceRock.checked) {
    cimgRock.classList.add("whiteBorder");
    cimgRock.setAttribute("src", "./images/rock.png");
  } else if (computerChoicePaper.checked) {
    cimgPaper.classList.add("whiteBorder");
    cimgPaper.setAttribute("src", "./images/paper.png");
  } else if (computerChoiceScissors.checked) {
    cimgScissors.classList.add("whiteBorder");
    cimgScissors.setAttribute("src", "./images/scissors.png");
  } else {
    //do nothing
  }
}

// disable unchecked radio buttons
function disableUserChoice() {
  if (userChoiceRock.checked === true) {
    userChoicePaper.disabled = true;
    userChoiceScissors.disabled = true;
  } else if (userChoicePaper.checked === true) {
    userChoiceRock.disabled = true;
    userChoiceScissors.disabled = true;
  } else if (userChoiceScissors.checked === true) {
    userChoicePaper.disabled = true;
    userChoiceRock.disabled = true;
  } else {
    // do nothing
  }
}

//disable unchecked radio buttons
function disableComputerChoice() {
  if (computerChoiceRock.checked === true) {
    computerChoicePaper.disabled = true;
    computerChoiceScissors.disabled = true;
  } else if (computerChoicePaper.checked === true) {
    computerChoiceRock.disabled = true;
    computerChoiceScissors.disabled = true;
  } else if (computerChoiceScissors.checked === true) {
    computerChoicePaper.disabled = true;
    computerChoiceRock.disabled = true;
  } else {
    //do nothing
  }
}

function determineWinner() {
  if (
    (userChoiceRock.checked === true && computerChoiceRock.checked === true) ||
    (userChoicePaper.checked === true &&
      computerChoicePaper.checked === true) ||
    (userChoiceScissors.checked === true &&
      computerChoiceScissors.checked === true)
  ) {
    displayResult.innerHTML = "Game Result: This game is a TIE!";
  } else if (
    (userChoiceRock.checked === true && computerChoicePaper.checked === true) ||
    (userChoicePaper.checked === true &&
      computerChoiceScissors.checked === true) ||
    (userChoiceScissors.checked === true && computerChoiceRock.checked === true)
  ) {
    displayResult.innerHTML = "Game Result: You LOST!";
  } else if (
    (userChoiceRock.checked === true &&
      computerChoiceScissors.checked === true) ||
    (userChoicePaper.checked === true && computerChoiceRock.checked === true) ||
    (userChoiceScissors.checked === true &&
      computerChoicePaper.checked === true)
  ) {
    displayResult.innerHTML = "Game Result: You WON! :)";
  } else {
  }
}

function noMoreFight() {
  disableUserChoice();
  disableComputerChoice();
}

function fight() {
  // Compare user choice vs computer choices and determine winner
  if (
    userChoicePaper.checked === false &&
    userChoiceRock.checked === false &&
    userChoiceScissors.checked === false
  ) {
    alert("You must select your choice first!");
  } else if (
    computerChoicePaper.checked === true ||
    computerChoiceRock.checked === true ||
    computerChoiceScissors.checked === true
  ) {
    alert("Please click on New Game button!");
  } else {
    noMoreFight();
    getComputerChoice();
    determineWinner();
  }
}

// Reset everything for new game
function reset() {
  displayResult.innerHTML = "Game Result: ";
  cimgScissors.setAttribute("src", "./images/questionmark.png");
  cimgPaper.setAttribute("src", "./images/questionmark.png");
  cimgRock.setAttribute("src", "./images/questionmark.png");
  cimgPaper.classList.remove("whiteBorder");
  cimgRock.classList.remove("whiteBorder");
  cimgScissors.classList.remove("whiteBorder");
  uimgPaper.classList.remove("whiteBorder");
  uimgRock.classList.remove("whiteBorder");
  uimgScissors.classList.remove("whiteBorder");
  userChoicePaper.checked = false;
  userChoiceRock.checked = false;
  userChoiceScissors.checked = false;
  userChoicePaper.disabled = false;
  userChoiceRock.disabled = false;
  userChoiceScissors.disabled = false;
  computerChoicePaper.checked = false;
  computerChoiceRock.checked = false;
  computerChoiceScissors.checked = false;
  computerChoicePaper.disabled = false;
  computerChoiceRock.disabled = false;
  computerChoiceScissors.disabled = false;
}

/* canvas animation circle around image 


(function() {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

var canvas = document.getElementsByClassName("canvas")[0];
var context = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var radius = 75;
var endPercent = 101;
var curPerc = 0;
var counterClockwise = false;
var circ = Math.PI * 2;
var quart = Math.PI / 2;

context.lineWidth = 5;
context.strokeStyle = "#fff";
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.shadowBlur = 10;
context.shadowColor = "#656565";

function animate(current) {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.arc(x, y, radius, -quart, circ * current - quart, false);
  context.stroke();
  curPerc++;
  if (curPerc < endPercent) {
    requestAnimationFrame(function() {
      animate(curPerc / 30);
    });
  }
}

animate();
*/
