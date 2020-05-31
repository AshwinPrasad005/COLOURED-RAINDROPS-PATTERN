var raindrop1,engine,world;

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  raindrop1 = new Raindrops(50,50,1,1);
}

function draw() {
  background(80,80,80);
  Engine.update(engine);  
  drawSprites();
  raindrop1.display();
}