let colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "black", "white"]
let selectedColourA = 0; //Colour of Squares
let selectedColourB = 0;

let sizeA = 50; //Starting size of Squares
let sizeB = 50;

let speedA = 1; //Starting speed of Squares
let speedB = 1;

let squareXDirectionA; //Empty data for Square A movement
let squareXA;
let squareYDirectionA;
let squareYA;

let squareXDirectionB; //Empty data for Square B movement
let squareXB;
let squareYDirectionB;
let squareYB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  rectMode(CENTER);

  squareXDirectionA = random([true, false]); //Starting point and direction for Square A
  squareXA = random(width);
  squareYDirectionA = random([true, false]);
  squareYA = random(height/2); //Can only start in top half

  squareXDirectionB = random([true, false]); //Starting point and direction for Square B
  squareXB = random(width);
  squareYDirectionB = random([true, false]);
  squareYB = random(height/2) + height/2; //Can only start in bottom half
}

function draw() {
  let trail = document.getElementById("trail");
  if (trail.checked) { //Draws transparent background if Trail is checked
    background(0, 2.5);
  } else { //Normal Background
    background(0)
  }

  squareA(); //Seperate Function for Organization
  
  squareB(); //Seperate FUnction for Organization
  
  if (squareXA >= squareXB - (sizeA/2 + sizeB/2) && squareXA <= squareXB + (sizeA/2 + sizeB/2) && squareYA >= squareYB - (sizeA/2 + sizeB/2) && squareYA <= squareYB + (sizeA/2 + sizeB/2)) { //If the Squares Collode switch direction
    squareXDirectionA = !squareXDirectionA;
    squareYDirectionA = !squareYDirectionA;
    squareXDirectionB = !squareXDirectionB;
    squareYDirectionB = !squareYDirectionB;
 }
  
  noStroke();
  fill("grey") //Border around Canvas
  for (x = 5; x <= width; x += 10) {
    ellipse(x, 0, 10);
    ellipse(x, height, 10);
  } for (y = 5; y <= height; y += 10) {
    ellipse(0, y, 10);
    ellipse(width, y, 10);
  }
  
  fill("white") //Name in bottom corner
  textAlign(RIGHT, BOTTOM)
  text("Charlie Watson", width - 10, height - 10);
}

function squareA() {
  fill(colours[selectedColourA]); //Colour of square
  stroke("white");
  rect(squareXA, squareYA, sizeA) //Draws first square, variable size

  if (squareXDirectionA) { //Movement of Square
    squareXA += speedA; //Variable for speed
  } else {
    squareXA += -1*speedA;
  } if (squareYDirectionA) {
    squareYA += speedA;
  } else {
    squareYA += -1*speedA;
  }
  
  if (squareXA >= width - sizeA/2) { //Switch direction apon hitting wall
    squareXDirectionA = false;
  } if (squareXA <= 0 + sizeA/2) { //Edge of square hits wall
    squareXDirectionA = true;
  } if (squareYA >= height - sizeA/2) {
    squareYDirectionA = false;
  } if (squareYA <= 0 + sizeA/2) {
    squareYDirectionA = true;
  }
}

function squareB() {
  fill(colours[selectedColourB]); //Colour
  stroke("white");
  rect(squareXB, squareYB, sizeB) //Draws Square, variable size

  if (squareXDirectionB) { //Movement
    squareXB += speedB; //Variable Speed
  } else {
    squareXB += -1*speedB;
  } if (squareYDirectionB) {
    squareYB += speedB;
  } else {
    squareYB += -1*speedB;
  }
  
  if (squareXB >= width - sizeB/2) { //Switches Direction aopn edge of square hitting wall
    squareXDirectionB = false;
  } if (squareXB <= 0 + sizeB/2) {
    squareXDirectionB = true;
  } if (squareYB >= height - sizeB/2) {
    squareYDirectionB = false;
  } if (squareYB <= 0 + sizeB/2) {
    squareYDirectionB = true;
  }
}

function colourA() { //Colour Select for First Square
  let colour = document.getElementById("colour-select-a");
  selectedColourA = colour.selectedIndex;
}

function colourB() { //Colour Select for Seccond Square
  let colour = document.getElementById("colour-select-b");
  selectedColourB = colour.selectedIndex;
}

function squareSizeA() { //Size of first square
  let size = document.getElementById("size-a");
  if (size.value > 10) { //maximum size of 10
    sizeA = 100;
  } else if (size.value < 0) { //minimum size of 0
    sizeA = 10;
  } else {
    sizeA = size.value * 10;
  }
}

function squareSizeB() { //Size of seccond square
  let size = document.getElementById("size-b");
  if (size.value > 10) { //miximum size of 10
    sizeB = 100;
  } else if (size.value < 0) { //minimum size of 0
    sizeB = 10;
  } else {
  sizeB = size.value * 10;
  }
}

function squareSpeedA() { //speed of first square
  let squareSpeed = document.getElementById("speed-a");
  if (squareSpeed.value > 10) { //maximum speed of 10
    speedA = 10;
  } else if (squareSpeed.value < 1) { //minimum speed of 0
    speedA = 0;
  } else {
    speedA = squareSpeed.value * 1; //would only work with a *1
  }
}

function squareSpeedB() { //speed of seccond square
  let squareSpeed = document.getElementById("speed-b");
  if (squareSpeed.value > 10) { //maximum speed of 10
    speedB = 10;
  } else if (squareSpeed.value < 1) { //mimumum speed of 1
    speedB = 0
  } else {
    speedB = squareSpeed.value * 1;
  }
}
