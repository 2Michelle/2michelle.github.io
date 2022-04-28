var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState="L1";

var img;


function preload() {
  img=loadImage('https://2michelle.github.io/Cloud.jpg');
  img1=loadImage('https://2michelle.github.io/pls.png');
}

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('https://2michelle.github.io/Cloud.jpg');
  createCanvas(720, 400);
    textAlign(CENTER);
  textSize(20);
}
function draw() {
  background (img);
  levelOne();
  text(("Score: " + score), width/2, 40);
} // end draw


function levelOne(){
  text("Level 1", width/2, height-20);
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
  

  image(img1, ballx, bally);
} // end level one
