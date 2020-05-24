var raindrop1;

function setup() {
  createCanvas(400,400);
  raindrop1 = new Raindrops(50,50,10,70);
}

function draw() {
  background(80,80,80);  
  drawSprites();
  raindrop1.display();
}