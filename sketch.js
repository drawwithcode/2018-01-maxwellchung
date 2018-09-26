function setup() {
  createCanvas(800, 600);

  // Set here the values that are not changing

  strokeWeight(2);
  stroke(170);
}

function draw() {
  background(255, 225, 12);
  fill(255,255,255);
  stroke(35,24,21);

  // Neck
line(250,200,230,230);
  // Antennas
  ellipse(250,488,35,35);
	ellipse(250,488,25,25);
	ellipse(250,488,25,25);
	ellipse(150,328,25,25);
	ellipse(150,328,15,15);
	ellipse(350,355,25,25);
	ellipse(350,355,15,15);

  // Body
  ellipse(290,231,25,25);
    ellipse(210,231,25,25);
    ellipse(250,350,100,100);

	ellipse(250,380,160,160);
	 ellipse(250,380,150,150);
	ellipse(250,380,120,120);
    rect(235,180,30,30);
	ellipse(205,390,10,10);
	ellipse(190,390,10,10);
	ellipse(210,390,10,10);

  // Head
    rect(250,350,45,45);

	rect(215,290,65,15); // rec face
	rect(220,270,55,25); // rec face
	rect(220,290,25,15); // rec face
	rect(250,290,25,15); // rec face
	rect(250,290,25,15); // rec face

    ellipse(250,250,45,45);
    ellipse(250,240,90,90);
	  ellipse(250,240,80,80);
	  ellipse(250,240,60,60);
    ellipse(275,220,12,12);
	  ellipse(275,235,35,35);




    rect(290,212,15,35);
    rect(190,214,15,35);


    ellipse(275,320,12,12);
    ellipse(275,233,12,12);
    ellipse(235,233,12,12);
}
