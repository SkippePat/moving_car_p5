// Car position variable
let carX = 0;
let carY;
let carSpeed = 3;

function setup() {
  createCanvas(800, 400);
  // Start car in the middle vertically
  carY = height / 2;
}

function draw() {
  
  
  // ===== DRAW BACKGROUND =====
  // Sky (light blue)
  if (mouseIsPressed === true) {
    background(25, 25, 112);
  } else {
    background(196, 234, 234);
  }

  // ===== BEGIN BILLBOARD HERE =====
  //Sign
  stroke("grey")
  strokeWeight(10);
  line(500,250,500,125)
  noStroke()
  fill("grey")
  rect(300,50,400,100)
  fill(0, 64, 128)
  rect(310,60,380,80)
  fill(255,255,255)
  textSize(20)
  textFont('Highway Gothic')
  text("Life is like a one way road,",350,90)
  text("it keeps moving forward.",450,120)
  // ===== END BILLBOARD HERE =====

  // ===== DRAW GRASS =====
  fill(34, 139, 34); // Green grass
  rect(0, height / 2 + 50, width, height);

  // ===== DRAW ROAD =====
  fill(70, 70, 70); // Gray road
  rect(0, carY + 30, width, 60);
  
  // Road lines (dashed yellow line)
  stroke(255, 255, 0);
  strokeWeight(3);
  for (let i = 0; i < width; i += 40) {
    line(i, carY + 60, i + 20, carY + 60);
  }
  noStroke();
  
  if (mouseIsPressed === true) {
    fill(220, 220, 220)
    circle(25, 25, 100);
    fill(110,110,110)
    circle(0,25,10)
    circle(20,0,15)
    circle(20,40,15)
    circle(40,25,10)
  } else {
    fill("yellow")
    circle(25, 25, 100);
  }

  // ===== DRAW CAR =====
  drawCar(carX, carY);

  // ===== MOVE CAR =====
  carX = carX + carSpeed;

  // Reset car when it goes off the right side
  if (carX > width + 50) {
    carX = -100;
  }
}

// Function to draw the car
function drawCar(x, y) {
  // Car body (red)
  fill(255, 0, 0);
  rect(x, y, 100, 40, 5);

  // Car top (red)
  fill(200, 0, 0);
  rect(x + 20, y - 25, 60, 30, 5);

  // Windows (light blue)
  fill(135, 206, 250);
  rect(x + 25, y - 20, 20, 18);
  rect(x + 55, y - 20, 20, 18);

  // Wheels (black)
  fill(0);
  circle(x + 25, y + 40, 20);
  circle(x + 75, y + 40, 20);

  // Wheel rims (gray)
  fill(150);
  circle(x + 25, y + 40, 10);
  circle(x + 75, y + 40, 10);

  // Headlight (yellow)
  fill("white");
  circle(x + 95, y + 15, 8);
  if (mouseIsPressed === true) {
    triangle(x + 95, y + 15,x + 180, y + 30,x + 180, y - 30,)
  } else {
    fill(255, 212, 55)
    circle(25, 25, 100);
  }
}