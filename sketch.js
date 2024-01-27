function setup() {
  let canvas = createCanvas(innerWidth-15, innerHeight-15);
  canvas.parent('sketch-container');
  background(0);
  fill(255,50);
  textSize(20);
  textAlign(CENTER)
  text('circle size controlled by how high you tap the screen', innerWidth/4, innerHeight/2-100,innerWidth/2);
}

function draw() {
  let time = millis() % 345
  if(millis() % 345 ==0){
    background(0);
  }
  // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  let val = randomGaussian();

  let sd = 160;                  // Define a standard deviation
  let mean = width/2;           // Define a mean value (middle of the screen along the x-axis)
  let x = ( val * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean

  noStroke();
  let mouseCol = map(mouseY,0,innerHeight,0,255)
  fill(mouseCol/2, mouseCol, mouseCol, 10);
  ellipse(x, height/2, mouseCol/2, mouseCol/2);   // Draw an ellipse at our "normal" random location
}