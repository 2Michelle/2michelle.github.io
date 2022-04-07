function setup() {
  createCanvas(520, 520);
}

function draw() {
  background(255);

  //Hair
  noStroke()
  fill(111,88,90);
  arc(260, 350, 300, 580, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

  //Face 
  noStroke()
  fill(247, 221, 212);
  ellipse(260, 255, 200, 260);

  //Ears
  arc(150, 265, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  arc(370, 265, 40, 60, 0, PI + PI + HALF_PI, OPEN)

  //Bang
  noStroke()
  fill(111,88,90);
  arc(290, 150, 150, 100, 00, PI + QUARTER_PI, CHORD);
  arc(200, 110, 160, 148, 0, 0.75 * Math.PI);


  //Eyebrows
  stroke(89, 70, 40);
  strokeWeight(3);
  noFill();
  arc(210, 235, 45, 15, PI, TWO_PI, OPEN);
  arc(310, 235, 45, 15, PI, TWO_PI, OPEN);

  //Eyeshadow
  stroke(93, 79, 57);
  strokeWeight(6);
  arc(210, 255, 45, 15, PI, TWO_PI, OPEN);
  arc(310, 255, 45, 15, PI, TWO_PI, OPEN);
  arc(210, 257, 40, 30, HALF_PI, PI);
  arc(310, 257, 40, 30, 0, HALF_PI);

  //Eyes
  strokeWeight(1)
  fill(32, 19, 19);
  ellipse(210, 260, 28, 25);
  ellipse(310, 260, 28, 25);

  //Eyeballs
  noStroke()
  fill(255)
  ellipse(207, 252, 8, 8);
  ellipse(306, 252, 8, 8);

  //Nose
  fill(255,205,180)
  ellipse(260, 290,15,30);

  //Mouth
  fill(255, 102, 102);
  arc(260, 325, 49, 35, 0, PI);

  //Hoodie
  rectMode(CENTER)
  fill(255, 153, 202)
  rect(260, 470, 205, 150, 20);
  fill(255, 204, 229)
  rect(220, 510, 40, 230, 30, 940);
  rect(298, 625, 40, 460, 30, 435);
  fill(255)
  ellipse(300, 432, 15, 15);
  ellipse(220, 432, 15, 15);
  rect(300, 480, 8, 65, 20);
  rect(220, 480, 8, 65, 20);
  
  // Top
  fill(255)
  arc (260, 390, 60, 60, TWO_PI, PI);


  //Neck
  fill(247, 221, 212)
  rect(260, 380, 50, 55, 20);











}
