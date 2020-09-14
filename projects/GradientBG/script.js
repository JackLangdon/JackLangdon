var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var cssText = document.getElementById('cssText');
var body = document.getElementById('gradient');
var direction = 'right';

function setGradient() {
  body.style.background =
    'linear-gradient(to ' +
    direction +
    ', ' +
    color1.value +
    ', ' +
    color2.value +
    ')';

  cssText.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);

// RANDOMISE THE BACKGROUND

var randomButton = document.getElementById('randomButton');

// Calculate a random number between 0 and 255 inclusive
var num0;
function randomNum() {
  num0 = Math.floor(Math.random() * 256);
}

// Get six random numbers
var num1, num2, num3, num4, num5, num6;

function assignRandomNum() {
  randomNum();
  num1 = num0;
  randomNum();
  num2 = num0;
  randomNum();
  num3 = num0;
  randomNum();
  num4 = num0;
  randomNum();
  num5 = num0;
  randomNum();
  num6 = num0;
}

// Set the background rgb values to the new random numbers
function setRandomGradient() {
  assignRandomNum();
  assignBackgroundRandom();
}

function assignBackgroundRandom() {
  body.style.background =
    'linear-gradient(to ' +
    direction +
    ', rgb(' +
    num1 +
    ', ' +
    num2 +
    ', ' +
    num3 +
    '), rgb(' +
    num4 +
    ', ' +
    num5 +
    ', ' +
    num6 +
    '))';

  cssText.textContent = body.style.background + ';';
}

// Listen for randomButton click
randomButton.addEventListener('click', setRandomGradient);

// ROTATE THE BACKGROUND

var rotateButton = document.getElementById('rotateButton');

function rotate() {
  if (direction == 'right') {
    direction = 'bottom';
    color1Label.textContent = 'top';
    color2Label.textContent = 'bottom';
    assignBackgroundRandom();
  } else if (direction == 'bottom') {
    direction = 'left';
    color1Label.textContent = 'right';
    color2Label.textContent = 'left';
    assignBackgroundRandom();
  } else if (direction == 'left') {
    direction = 'top';
    color1Label.textContent = 'bottom';
    color2Label.textContent = 'top';
    assignBackgroundRandom();
  } else if (direction == 'top') {
    direction = 'right';
    color1Label.textContent = 'left';
    color2Label.textContent = 'right';
    assignBackgroundRandom();
  }

  // console.log(color1.value, color2.value);
}

rotateButton.addEventListener('click', rotate);
