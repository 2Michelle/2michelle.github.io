var ballx = 300; // width/2 ?
var bally = 300;
var ballSize = 40;
var score =0;
var v2 = 0;
var img1, img2, beginImg, bg, img, img3, img4;

var  c; // our text color as a variable, set in setup
var gameState ="L1";


function preload() {
  img=loadImage('https://2michelle.github.io/cloudy_daypic/cloud.jpg');
  img1=loadImage('https://2michelle.github.io/cloudy_daypic/sun.png');
  bg= loadImage('https://2michelle.github.io/cloudy_daypic/cloud.jpg');
  img2=loadImage('https://2michelle.github.io/cloudy_daypic/night.jpg');
  img3=loadImage('https://2michelle.github.io/cloudy_daypic/sunset.jpg');
  img4=loadImage('https://2michelle.github.io/cloudy_daypic/sunsad.png'); 
 
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
      background(img);
      levelOne();
    }

    if(gameState =="L2"){
      background(img2);
      levelTwo();
    }
    
    if(gameState =="L3"){
      background(img);
      levelThree();
    }
   
    if(gameState =="L4"){
      background(img3);
      levelFour();
    }
     if(gameState =="L5"){
      background(img);
      levelFive();
    }
      if(gameState =="L6"){
      background(img2);
      levelSix();
    }
     if(gameState =="Win"){
        background(50);
        Win();
        
       
 }

   
    text(("Day Count Until Storm: " + score), width/2, 40);
    
    text( v2, 7, 40);


    
} // end of beginGame


function levelOne(){
  text("You are like a cloudy day", width/2, height-20);
  fill(0,0,255)
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-50);
    bally = random(height-50);
    score = score +1;
  }
  // end if
  
  if (score>=10){
    gameState= "L2";
  }

  image(img1, ballx, bally);

 } // end level one



function levelTwo(){
  text("I can't deal with it", width/2, height-20);
  fill(255, 68, 51);
  
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-50);
    bally = random(height-50);
  
    score = score +1;
  } // end if
  if (score>=20){
    gameState= "L3";
      
}
  image(img4, ballx, bally);
  
}// end level two


function levelThree(){
  text("You are like a cloudy day", width/2, height-20);
  fill(0,0,255)
 
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-50);
    bally = random(height-50);
    
   score = score +1;
  }// end if

  
  if (score>=30){
    gameState= "L4";
  }
  
  image(img1, ballx, bally);
}
 // end level three


 function levelFour(){
   text("I feel as if i’m quite happy today…", width/2, height-20);
   fill(0,0,255)

   var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
   if (distToBall<ballSize/2){
     ballx= random(width-50);
     bally = random(height-50);
    score = score +1;
  } // end if
  if (score>=40){
    gameState= "L5";
    score=0;

      
}
  image(img4, ballx, bally);
}// end level four
 
 function levelFive(){
   text("You are like a cloudy day", width/2, height-20);
   fill(0,0,255)

   var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
   if (distToBall<ballSize/2){
     ballx= random(width-50);
     bally = random(height-50);
    score = score +1;
  } // end if
  if (score>=50){
    gameState= "L1";
    score=0;
      
}
  image(img4, ballx, bally);

}// end level five
 
 function levelSix(){
  text("Why is everything so annoying?", width/2, height-20);
  fill(0,0,255)
 
  var distToBall = dist(ballx+20, bally+20, mouseX, mouseY);
  if (distToBall<ballSize/2){
    ballx= random(width-50);
    bally = random(height-50);
    
   score = score +1;
   v2 += 1;
  }// end if

  
  if (score>=60){
    gameState= "L1";
  }// end level six
  
  image(img1, ballx, bally);
}
function Win(){
  text("Win", width/2, height-20);
} // end win
