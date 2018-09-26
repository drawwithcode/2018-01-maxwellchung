function setup() {
  createCanvas(800, 600);

  // Set here the values that are not changing

  strokeWeight(2);
  stroke(170);
}

function draw() {
  background(240);
  fill(42,57,65);
  stroke(200,0,0);

  // Neck
line(250,200,230,230);
  // Antennas
ellipse(250,465,70,70);

  // Body
  rect(235,280,30,30);
	ellipse(290,231,25,25);
    ellipse(210,231,25,25);
    ellipse(250,350,100,100);
  ellipse(250,380,150,150);

	rect(240,167,20,20);
	    rect(235,180,30,30);

  // Head

    ellipse(250,350,45,45);
    ellipse(250,240,90,90);
    ellipse(275,220,12,12);
    rect(300,212,15,35);
    rect(190,214,15,35);
    rect(200,212,105,45);
    ellipse(275,320,12,12);
    ellipse(275,233,12,12);
    ellipse(235,233,12,12);
}
