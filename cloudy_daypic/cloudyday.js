var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var img1, img2, beginImg, img;
var  c; // our text color as a variableset in setup

var gameState = "L1";



function preload() {
  img=loadImage('https://2michelle.github.io/Cloud.jpg');
  img1=loadImage('https://2michelle.github.io/sun.png');
  bg = loadImage('https://2michelle.github.io/Cloud.jpg');
  img2=loadImage('https://2michelle.github.io/rain.jpg');
}

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  createCanvas(720, 400);
    textAlign(CENTER);
  textSize(20);
}

function draw() {

if(gameState =="L1"){
  background (img);
  levelOne();
}

if(gameState =="L2"){
  background(img2);
  levelTwo();
 

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  createCanvas(720, 400);
    textAlign(CENTER);
  textSize(20);
}
  
}
if(gameState =="L3"){
    background(50);
  levelThree();
}
if(gameState =="Win"){
    background(50);
  win();
}
  text(("Day count until storm: " + score), width/2, 40); 
}

 // end of draw

// function beginGame(){
//  if (mouseIsPressed === true) {
//   gameState="L1";  
//  } // end of if mousIsPressed
// } // end of beginGame


function levelOne(){
  text("You are like a cloudy day", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  
  if (score>=10){
    gameState= "L2";
  }

  image(img1, ballx, bally);
} // end level one


function levelTwo(){
  text("Bring my sunshine back", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
  } // end if
  if (score>=20){
       gameState= "L3";
  }
   image(img1, ballx, bally);
} // end of level 2

function levelThree(){
  text("level 3", width/2, height-20);
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-5);
    bally = random(height-5);
    score = score +1;
    ballSize=ballSize -1;
  } // end if
  if (score>=30){
       gameState= "Win";
  }
      image(img1, ballx, bally, ballSize, ballSize);
} // end level 3

function win(){
  text("You Won", width/2, height-20);
} // end win
