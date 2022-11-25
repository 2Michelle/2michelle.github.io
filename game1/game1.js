var ballx = 300;
var bally = 300;
var ballSize = 40;
var img1, img2, img3;
var score =0;
var gameState = "L1";

function preload() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  img1= loadImage('https://2michelle.github.io/Cloud.jpg');
}

function setup() {
  createCanvas(720, 400);
  textAlign(CENTER);
  textSize(20);
   
}  // end of setup
  
function draw() {
    // background(img1);

  if(gameState == "L1"){ 
    levelOne(); 
  }
  
} // end draw


function levelOne(){
  background(img1);
  
  text("You are like a cloudy day", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>5){
// call level 2
  fill(random(255));
  }
  

  ellipse(ballx, bally, ballSize, ballSize);
} // end level one
