function setup() {
  let canvas = createCanvas(innerWidth-15, innerHeight-15);
  canvas.parent('sketch-container');
  background(0);
  fill(255,50);
  // textSize(20);
  // textAlign(CENTER)
  // text('hi there, welcome to my portfolio, have a rifle through my work, otherwise tap about a bit...', innerWidth/4, innerHeight/2-100,innerWidth/2);
}
let size = 3;
let direction = 1;
function draw() {
  if(millis() % 345 ==0){
    background(0);
    direction = direction * -1;
  }
  // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  // let val = randomGaussian();

  // let sd = 160;                  // Define a standard deviation
  // let mean = width/2;           // Define a mean value (middle of the screen along the x-axis)
  // let x = ( val * sd ) + mean;  // Scale the gaussian random number by standard deviation and mean

  noStroke();
  let mouseCol = map(mouseY,0,innerHeight,0,255)
  colour = color(mouseCol/2, mouseCol, mouseCol,10)
  fill(mouseCol/2, mouseCol, mouseCol, 10);
  // ellipse(x, height/2, mouseCol/2, mouseCol/2);   // Draw an ellipse at our "normal" random location

  circles();
}

function circles() {
  stroke(map(size,0,innerWidth+13, 100, 255).toFixed(0),map(size,innerWidth,0, 213, 26).toFixed(0),30);
  fill(colour);
  size+=direction;
  ellipse(mouseX,mouseY,size,size);

  if(size <2 || size > innerWidth/2){
    direction = direction * -1;
  }
  return false;
}