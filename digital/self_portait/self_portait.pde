function setup() {
  createCanvas(520, 520);
}

function draw() {
  background(255);

  //Hair
  noStroke()
  fill(32, 19, 19);
  arc(260, 260, 300, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN);

  //Face 
  noStroke()
  fill(247, 221, 212);
  ellipse(260, 255, 200, 260);

  //Ears
  arc(150, 265, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);
  arc(370, 265, 40, 60, 0, PI + PI + HALF_PI, OPEN)

  //Bang
  noStroke()
  fill(32, 19, 19);
  arc(300, 150, 150, 100, 0, PI + QUARTER_PI, CHORD);
  arc(180, 120, 140, 148, 0, 0.75 * Math.PI);


  //Eyebrows
  stroke(21, 19, 19);
  strokeWeight(3);
  noFill();
  arc(210, 235, 45, 15, PI, TWO_PI, OPEN);
  arc(310, 235, 45, 15, PI, TWO_PI, OPEN);

  //Eyeshadow
  stroke(249, 67, 6, 130);
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
  fill(247, 221, 155, )
  triangle(260, 270, 270, 300, 250, 300);

  //Mouth
  fill(255, 102, 102);
  arc(260, 325, 49, 35, 0, PI);

  //Hoodie
  rectMode(CENTER)
  fill(255, 153, 202)
  rect(260, 470, 205, 150, 20);
  fill(255, 204, 229)
  triangle(135, 435, 170, 360, 330, 470);
  triangle(360, 380, 390, 460, 200, 435);
  fill(255)
  ellipse(300, 432, 15, 15);
  ellipse(220, 432, 15, 15);
  rect(300, 460, 8, 65, 20);
  rect(220, 460, 8, 65, 20);


  //Neck
  fill(247, 221, 212)
  rect(260, 380, 50, 55, 20);











}
