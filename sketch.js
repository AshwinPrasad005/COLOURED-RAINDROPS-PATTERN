var raindrop1engine,world;

const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  raindrop1 = new Raindrops(50,50,10,70);
}

function draw() {
  background(80,80,80);  
  drawSprites();
  raindrop1.display();
}